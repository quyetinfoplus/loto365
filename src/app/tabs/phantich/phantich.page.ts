import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RequestService } from 'src/app/service/request.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { EnvService } from 'src/app/service/env.service';
import ValidationUtil from 'src/app/service/util/validation';

@Component({
  selector: 'app-phantich',
  templateUrl: './phantich.page.html',
  styleUrls: ['./phantich.page.scss'],
})
export class PhantichPage implements OnInit {
  selectDodai: any;
  moDelDateTime: any;
  date = new Date();
  year: any;
  selectNhay: any;
  month: any;
  day: any;
  onShowTuyChon: boolean;
  arrowTuyChon: any;
  colorTuyChon = '#000000';
  index: any;
  doDaiCau: any;
  arrayNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  modelDoDaiCau: any;
  valueNhay: any;
  checkBoxDB: any;
  checkBoxLon: any;
  checkBoxKhongLon: any;
  ngaychotCurrent: string;
  lon: number;
  arrayCauDepOrigin: any;
  arrayCauDep = [];
  valueDateSelect: any;
  onShowLoading: boolean;
  constructor(
    public datepipe: DatePipe,
    private requestService: RequestService,
    private localStorageService: LocalstorageService,
    private envService: EnvService) {

  }

  ionViewWillEnter(): void {
    if (this.date.getDate() >= 10) {
      this.day = (this.date.getDate() - 1).toString();
    } else {
      this.day = '0' + (this.date.getDate() - 1).toString();
    }
    if (this.date.getMonth() + 1 >= 10) {
      this.month = (this.date.getMonth() + 1).toString();
    } else {
      this.month = '0' + (this.date.getMonth() + 1).toString();
    }
    this.checkBoxLon = true;
    this.year = this.date.getFullYear();
    this.ngaychotCurrent = this.year.toString() + '-' + this.month.toString() + '-' + this.day.toString();
    this.moDelDateTime = this.year + '-' + this.month + '-' + this.day;
    this.modelDoDaiCau = 5;
    this.index = 5;
    this.arrowTuyChon = 'arrow-dropdown';
    this.onShowTuyChon = true;
    this.selectNhay = '1';
    this.onShowLoading = false;
    this.valueDateSelect = this.ngaychotCurrent;
    this.doDaiCau = 5;
    this.valueNhay = 1;
    if (this.checkBoxKhongLon === true) {
      this.lon = 0;
    }
    if (this.checkBoxLon === true) {
      this.lon = 1;
    }
    this.onLoadDataPhanTich(this.ngaychotCurrent, this.modelDoDaiCau, this.valueNhay, this.lon);
  }

  onLoadDataPhanTich(ngaychot, soNgayCau, nhay, lon) {
    const urlGetDataPhanTich = this.envService.API_URL + this.envService.URL_LOAD_DATA_PHAN_TICH;
    const params = [];
    params.push({ key: 'ngaychot', value: ngaychot });
    params.push({ key: 'limit', value: soNgayCau });
    params.push({ key: 'nhay', value: nhay });
    params.push({ key: 'lon', value: lon });
    this.requestService.getWithAuth(urlGetDataPhanTich, params, undefined,
      (response) => this.onSuccess(response),
      (error) => this.onError(error),
      () => { });
  }

  onError(error: any) {
    this.onShowLoading = false;
  }

  onReloadDataPhanTich(ngaychot, soNgayCau, nhay, lon) {
    this.arrayCauDepOrigin = '';
    this.arrayCauDep = [];
    this.onLoadDataPhanTich(ngaychot, soNgayCau, nhay, lon);
  }


  onSuccess(response) {
    this.onShowLoading = false;
    if (response.caudep !== null) {
      this.arrayCauDepOrigin = response.caudep.replace(/[^a-zA-Z0-9]/g, '');
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < this.arrayCauDepOrigin.length / 2; index++) {
        this.arrayCauDep.push(this.arrayCauDepOrigin.substr(index * 2, 2));
      }
    }
  }

  showTuyChon() {
    if (this.arrowTuyChon === 'arrow-dropdown') {
      this.arrowTuyChon = 'arrow-dropup';
      this.onShowTuyChon = false;
    } else {
      this.arrowTuyChon = 'arrow-dropdown';
      this.onShowTuyChon = true;
    }
  }

  onChangeInputNgay(event) {
    this.doDaiCau = event.target.value;
  }



  touchstartTuyChon() {
    this.colorTuyChon = 'darkseagreen';
  }

  touchendTuychon() {
    this.colorTuyChon = '#000000';
  }

  ngOnInit() {
  }

  clickCauChay(i) {
    this.index = i;
    this.doDaiCau = i;
    this.onShowLoading = true;
    this.onReloadDataPhanTich(this.valueDateSelect, this.doDaiCau, this.valueNhay, this.lon);
  }

  soiCau() {
    this.index = parseInt(this.modelDoDaiCau, 0);
    this.onShowLoading = true;
    this.onReloadDataPhanTich(this.valueDateSelect, this.doDaiCau, this.valueNhay, this.lon);
  }

  onChangeSelectNhay(event) {
    this.valueNhay = event.target.value;
  }

  onChangeDateTimeSelect(event) {
    this.valueDateSelect = this.datepipe.transform(event.target.value, 'yyyy-MM-dd');
  }

}
