import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RequestService } from 'src/app/service/request.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { EnvService } from 'src/app/service/env.service';
import ValidationUtil from '../../service/util/validation';
@Component({
  selector: 'app-ketqua',
  templateUrl: './ketqua.page.html',
  styleUrls: ['./ketqua.page.scss'],
})
export class KetquaPage implements OnInit {
  selectedSegment: any;
  mienbacShow: boolean;
  mientrungShow: boolean;
  miennamShow: boolean;
  thu: any;
  originThu: any;
  day: any;
  originDay: any;
  month: any;
  originMonth: any;
  year: any;
  originYear: any;
  date = new Date();
  ymd: string;
  previousDay: string;
  kqDB: any;
  kqNhat: any;
  kqNhi1: any;
  kqNhi2: any;
  kqBa1: any;
  kqBa2: any;
  kqBa3: any;
  kqBa4: any;
  kqBa5: any;
  kqBa6: any;
  kqTu1: any;
  kqTu2: any;
  kqTu3: any;
  kqTu4: any;
  kqNam1: any;
  kqNam2: any;
  kqNam3: any;
  kqNam5: any;
  kqNam4: any;
  kqNam6: any;
  kqSau1: any;
  kqSau2: any;
  kqSau3: any;
  kqBay1: any;
  kqBay2: any;
  kqBay3: any;
  kqBay4: any;
  arrayKqOrigin: any;
  arrayDau0 = [];
  arrayDau1 = [];
  arrayDau2 = [];
  arrayDau3 = [];
  arrayDau4 = [];
  arrayDau5 = [];
  arrayDau6 = [];
  arrayDau7 = [];
  arrayDau8 = [];
  arrayDau9 = [];
  arrayDit0 = [];
  arrayDit1 = [];
  arrayDit2 = [];
  arrayDit3 = [];
  arrayDit4 = [];
  arrayDit5 = [];
  arrayDit6 = [];
  arrayDit7 = [];
  arrayDit8 = [];
  arrayDit9 = [];
  arrayKq = [];
  modelDate: any;
  valueDate: any;
  isError: boolean;
  error: boolean;
  isFirstTimeLoading: boolean;
  onShowGridMB: boolean;
  previousYdm: any;
  hour: number;
  dateCurrent: string;
  constructor(
    public datepipe: DatePipe,
    private requestService: RequestService,
    private localStorageService: LocalstorageService,
    private envService: EnvService
  ) {
    this.dateCurrent = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.isError = true;
    this.originThu = this.date.getDay() + 1;
    this.originDay = this.date.getDate();
    this.originMonth = this.date.getMonth() + 1;
    this.originYear = this.date.getFullYear();
    this.thu = this.date.getDay() + 1;
    switch (this.thu) {
      case 2:
        this.thu = 'Thứ Hai';
        break;
      case 3:
        this.thu = 'Thứ Ba';
        break;
      case 4:
        this.thu = 'Thứ Tư';
        break;
      case 5:
        this.thu = 'Thứ Năm';
        break;
      case 6:
        this.thu = 'Thứ Sáu';
        break;
      case 7:
        this.thu = 'Thứ Bảy';
        break;
      case 8:
        this.thu = 'Chủ Nhật';
        break;
    }
    if (this.date.getDate() >= 10) {
      this.day = this.date.getDate().toString();
    } else {
      this.day = '0' + (this.date.getDate()).toString();
    }
    if ((this.date.getDate() - 1) >= 10) {
      this.previousDay = (this.date.getDate() - 1).toString();
    } else {
      this.previousDay = '0' + (this.date.getDate() - 1).toString();
    }
    if (this.date.getMonth() + 1 >= 10) {
      this.month = (this.date.getMonth() + 1).toString();
    } else {
      this.month = '0' + (this.date.getMonth() + 1).toString();
    }
    this.year = this.date.getFullYear();
    this.ymd = this.year + '-' + this.month + '-' + this.day;
    this.previousYdm = this.year + '-' + this.month + '-' + this.previousDay;
    this.hour = this.date.getHours();
  }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    this.onShowGridMB = false;
    this.isError = true;
    this.isFirstTimeLoading = true;
    this.selectedSegment = 'mienbac';
    if (this.hour > 19) {
      this.reloadDataMienBac(this.ymd);
      this.modelDate = this.ymd;
    } else {
      this.reloadDataMienBac(this.previousYdm);
      this.modelDate = this.previousYdm;
    }
  }

  loadData(ngaychot) {
    const urlLoadDataKetQua = this.envService.API_URL + this.envService.URL_LOAD_DATA_KET_QUA;
    const params = [];
    params.push({ key: 'ngaychot', value: ngaychot });
    this.requestService.get(urlLoadDataKetQua, params, undefined,
      (response) => this.onSuccessLoadData(response),
      (error) => this.onError(error),
      () => { });
  }

  onError(onError) {
    this.isError = true;
    this.error = true;
    this.isFirstTimeLoading = false;
  }


  onSuccessLoadData(response) {
    this.onShowGridMB = true;
    this.isError = false;
    this.isFirstTimeLoading = false;
    this.error = false;
    this.kqDB = response[0].kq0;
    this.kqNhat = response[0].kq1;
    this.kqNhi1 = response[0].kq2;
    this.kqNhi2 = response[0].kq3;
    this.kqBa1 = response[0].kq4;
    this.kqBa2 = response[0].kq5;
    this.kqBa3 = response[0].kq6;
    this.kqBa4 = response[0].kq7;
    this.kqBa5 = response[0].kq8;
    this.kqBa6 = response[0].kq9;
    this.kqTu1 = response[0].kq10;
    this.kqTu2 = response[0].kq11;
    this.kqTu3 = response[0].kq12;
    this.kqTu4 = response[0].kq13;
    this.kqNam1 = response[0].kq14;
    this.kqNam2 = response[0].kq15;
    this.kqNam3 = response[0].kq16;
    this.kqNam4 = response[0].kq17;
    this.kqNam5 = response[0].kq18;
    this.kqNam6 = response[0].kq19;
    this.kqSau1 = response[0].kq20;
    this.kqSau2 = response[0].kq21;
    this.kqSau3 = response[0].kq22;
    this.kqBay1 = response[0].kq23;
    this.kqBay2 = response[0].kq24;
    this.kqBay3 = response[0].kq25;
    this.kqBay4 = response[0].kq26;
    this.arrayDau0 = response[0].dau0;
    this.arrayDau1 = response[0].dau1;
    this.arrayDau2 = response[0].dau2;
    this.arrayDau3 = response[0].dau3;
    this.arrayDau4 = response[0].dau4;
    this.arrayDau5 = response[0].dau5;
    this.arrayDau6 = response[0].dau6;
    this.arrayDau7 = response[0].dau7;
    this.arrayDau8 = response[0].dau8;
    this.arrayDau9 = response[0].dau9;
    this.arrayDit0 = response[0].dit0;
    this.arrayDit1 = response[0].dit1;
    this.arrayDit2 = response[0].dit2;
    this.arrayDit3 = response[0].dit3;
    this.arrayDit4 = response[0].dit4;
    this.arrayDit5 = response[0].dit5;
    this.arrayDit6 = response[0].dit6;
    this.arrayDit7 = response[0].dit7;
    this.arrayDit8 = response[0].dit8;
    this.arrayDit9 = response[0].dit9;
  }

  onSegmentChanged(event) {
    this.selectedSegment = event.target.value;
    if (this.selectedSegment === 'mienbac') {
      this.mienbacShow = true;
      this.miennamShow = false;
      this.mientrungShow = false;
    }
    if (this.selectedSegment === 'mientrung') {
      this.mienbacShow = false;
      this.mientrungShow = true;
      this.miennamShow = false;
    }
    if (this.selectedSegment === 'miennam') {
      this.mienbacShow = false;
      this.mientrungShow = false;
      this.miennamShow = true;
    }
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      if (ValidationUtil.isEmptyStr(this.valueDate)) {
        if (this.hour > 19) {
          this.reloadDataMienBac(this.ymd);
          this.valueDate = this.ymd;
        } else {
          this.reloadDataMienBac(this.previousYdm);
          this.valueDate = this.previousYdm;
        }
      } else {
        this.reloadDataMienBac(this.valueDate);
      }
    }, 500);
  }

  onClickArrowBack() {
    if (this.originThu === 2) {
      this.originThu = 8;
    } else {
      this.originThu = this.originThu - 1;
    }
    switch (this.originThu) {
      case 2:
        this.thu = 'Thứ Hai';
        break;
      case 3:
        this.thu = 'Thứ Ba';
        break;
      case 4:
        this.thu = 'Thứ Tư';
        break;
      case 5:
        this.thu = 'Thứ Năm';
        break;
      case 6:
        this.thu = 'Thứ Sáu';
        break;
      case 7:
        this.thu = 'Thứ Bảy';
        break;
      case 8:
        this.thu = 'Chủ Nhật';
        break;
    }
  }

  onClickArrowForward() {
    if (parseInt(this.day, 0) === this.date.getDate()) {
      return false;
    }
  }

  onChangeDateTime(event) {
    this.valueDate = this.datepipe.transform(event.target.value, 'yyyy-MM-dd');
    this.reloadDataMienBac(this.valueDate);
  }

  reloadDataMienBac(ngaychot) {
    this.kqDB = '';
    this.kqNhat = '';
    this.kqNhi1 = '';
    this.kqNhi2 = '';
    this.kqBa1 = '';
    this.kqBa2 = '';
    this.kqBa3 = '';
    this.kqBa4 = '';
    this.kqBa5 = '';
    this.kqBa6 = '';
    this.kqTu1 = '';
    this.kqTu2 = '';
    this.kqTu3 = '';
    this.kqTu4 = '';
    this.kqNam1 = '';
    this.kqNam2 = '';
    this.kqNam3 = '';
    this.kqNam4 = '';
    this.kqNam5 = '';
    this.kqNam6 = '';
    this.kqSau1 = '';
    this.kqSau2 = '';
    this.kqSau3 = '';
    this.kqBay1 = '';
    this.kqBay2 = '';
    this.kqBay3 = '';
    this.kqBay4 = '';
    this.arrayKq = [];
    this.arrayDau0 = [];
    this.arrayDau1 = [];
    this.arrayDau2 = [];
    this.arrayDau3 = [];
    this.arrayDau4 = [];
    this.arrayDau5 = [];
    this.arrayDau6 = [];
    this.arrayDau7 = [];
    this.arrayDau8 = [];
    this.arrayDau9 = [];
    this.arrayDit0 = [];
    this.arrayDit1 = [];
    this.arrayDit2 = [];
    this.arrayDit3 = [];
    this.arrayDit4 = [];
    this.arrayDit5 = [];
    this.arrayDit6 = [];
    this.arrayDit7 = [];
    this.arrayDit8 = [];
    this.arrayDit9 = [];
    this.loadData(ngaychot);
  }
}
