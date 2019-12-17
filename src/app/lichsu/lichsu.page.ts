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
  limit = 10;
  noData: boolean;
  selectedNgayTrongTuan: any;
  isFirstTimeLoading: boolean;
  errorinfo: boolean;
  lichSus = [];
  date = new Date();
  dateCurrent: any;
  checkBoxBangDauDuoi: boolean;
  checkBoxHienDB: boolean;
  onShowBangDauDuoi: boolean;
  onNotShowDB: boolean;
  constructor(
    private datepipe: DatePipe,
    private requestService: RequestService,
    private localStorageService: LocalstorageService,
    private envService: EnvService
  ) {
    this.dateCurrent = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.selectedNgayTrongTuan = '0';
    this.onShowBangDauDuoi = true;
    this.checkBoxBangDauDuoi = true;
    this.onNotShowDB = true;
    this.onReloadData();
  }

  onReloadData() {
    this.currentTotal = 0;
    this.loadData(null);
    this.currenTotal = this.currenTotal += this.limit;
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
      this.noData = true;
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
      this.onShowBangDauDuoi = false;
      this.onNotShowDB = false;
    } else {
      this.onShowBangDauDuoi = true;
      this.onNotShowDB = true;
    }
  }
}