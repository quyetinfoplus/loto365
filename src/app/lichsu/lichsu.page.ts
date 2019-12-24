import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RequestService } from '../service/request.service';
import { LocalstorageService } from '../service/localstorage.service';
import { EnvService } from '../service/env.service';

@Component({
  selector: 'app-lichsu',
  templateUrl: './lichsu.page.html',
  styleUrls: ['./lichsu.page.scss'],
})
export class LichsuPage implements OnInit {
  currentTotal: number;
  currenTotal: any;
  limit = 3;
  noData: boolean;
  isFirstTimeLoading: boolean;
  errorinfo: boolean;
  error: boolean;
  lichSus = [];
  date = new Date();
  dateCurrent: any;
  checkBoxBangDauDuoi: boolean;
  checkBoxHienDB: boolean;
  onShowBangDauDuoi: boolean;
  onNotShowDB: boolean;
  isError: boolean;
  constructor(
    private datepipe: DatePipe,
    private requestService: RequestService,
    private localStorageService: LocalstorageService,
    private envService: EnvService
  ) {
    this.dateCurrent = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.onShowBangDauDuoi = true;
    this.checkBoxBangDauDuoi = true;
    this.onNotShowDB = true;
    this.onReloadData();
  }

  onReloadData() {
    this.currentTotal = 0;
    this.loadData(null);
    this.currenTotal += this.limit;
  }
  loadData(event) {
    const urlLoadLichSu = this.envService.API_URL + this.envService.URL_LOAD_DATA_KET_QUA;
    const params = [];
    params.push({ key: 'limit', value: this.limit });
    params.push({ key: 'skip', value: this.currentTotal });
    this.requestService.get(urlLoadLichSu, params, undefined,
      (response) => this.onSuccess(response, event),
      (error) => this.onError(error, event),
      () => { });
  }

  onError(error, event) {
    if (error.status === 403) {
      this.isFirstTimeLoading = false;
      this.errorinfo = false;
      if (event != null) {
        event.target.disabled = true;
      }
    } else {
      this.isFirstTimeLoading = false;
      this.errorinfo = true;
      if (event != null) {
        event.target.disabled = true;
      }
    }
  }

  onSuccess(response, event) {
    this.isError = false;
    this.isFirstTimeLoading = false;
    this.errorinfo = false;
    if (Object.keys(response).length <= 0) {
      this.noData = true;
    }

    for (let index = 0; index < Object.keys(response).length; index++) {
        this.lichSus.push(response[index]);
    }
    if (event != null) {
      this.currentTotal += this.limit;
      event.target.complete();
    }

  }

  ngOnInit() {
  }

  xemKetQua() {
    if (this.checkBoxBangDauDuoi === true) {
      this.onShowBangDauDuoi = true;
    } else {
      this.onShowBangDauDuoi = false;
    }
    if (this.checkBoxHienDB === true) {
      this.onNotShowDB = false;
    } else {
      this.onNotShowDB = true;
    }
    this.isError = true;
    this.isFirstTimeLoading = true;
  }
}
