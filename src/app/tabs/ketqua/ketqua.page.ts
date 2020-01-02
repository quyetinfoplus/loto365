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
  modelDateMb: any;
  valueDate: any;
  isError: boolean;
  error: boolean;
  isFirstTimeLoading: boolean;
  onShowGridMB: boolean;
  previousYdm: any;
  hour: number;
  dateCurrent: string;
  previousYmdMienNam: string;
  ymdMienNam: string;
  location1MienNam2: any;
  location1MienNam1: any;
  location1MienNam3: any;
  giaiTamLocationMn1: any;
  giaiTamLocationMn2: any;
  giaiTamLocationMn3: any;
  giaiBayLocationMn1: any;
  giaiBayLocationMn2: any;
  giaiBayLocationMn3: any;
  giaiSauLocationMn1: any;
  giaiSauLocationMn2: any;
  giaiSauLocationMn3: any;
  giaiNamLocationMn1: any;
  giaiNamLocationMn2: any;
  giaiNamLocationMn3: any;
  giaiTuLocationMn1: any;
  giaiTuLocationMn3: any;
  giaiTuLocationMn2: any;
  giaiBaLocationMn1: any;
  giaiBaLocationMn2: any;
  giaiBaLocationMn3: any;
  giaiNhiLocationMn1: any;
  giaiNhiLocationMn2: any;
  giaiNhiLocationMn3: any;
  giaiNhatLocationMn1: any;
  giaiNhatLocationMn2: any;
  giaiNhatLocationMn3: any;
  giaiDBLocationMn1: any;
  giaiDBLocationMn2: any;
  giaiDBLocationMn3: any;
  onShowGridMN: boolean;
  modelDateMnam: string;
  valueDateMnam: string;
  isErrorMn: boolean;
  errorMn: boolean;
  isFirstTimeLoadingMn: boolean;
  location1MienNam4: any;
  giaiTamLocationMn4: any;
  giaiBayLocationMn4: any;
  giaiSauLocationMn4: any;
  giaiNamLocationMn4: any;
  giaiTuLocationMn4: any;
  giaiBaLocationMn4: any;
  giaiNhiLocationMn4: any;
  giaiNhatLocationMn4: any;
  giaiDBLocationMn4: any;
  isThuBayMn: boolean;
  isThuBayMt: boolean;
  onShowGridMT: boolean;
  modelDateMtrung: string;
  ymdMienTrung: string;
  previousYmdMienTrung: string;
  valueDateMtrung: string;
  giaiTamMT2: any;
  giaiTamMT1: any;
  giaiBayMT1: any;
  giaiBayMT2: any;
  giaiSauMT11: any;
  giaiSauMT12: any;
  giaiSauMT13: any;
  giaiSauMT21: any;
  giaiSauMT22: any;
  giaiSauMT23: any;
  giaiNamMT1: any;
  giaiNamMT2: any;
  giaiTuMT11: any;
  giaiTuMT12: any;
  giaiTuMT13: any;
  giaiTuMT14: any;
  giaiTuMT15: any;
  giaiTuMT16: any;
  giaiTuMT17: any;
  giaiTuMT21: any;
  giaiTuMT22: any;
  giaiTuMT23: any;
  giaiTuMT24: any;
  giaiTuMT25: any;
  giaiTuMT26: any;
  giaiTuMT27: any;
  giaiBaMT11: any;
  giaiBaMT12: any;
  giaiBaMT21: any;
  giaiBaMT22: any;
  giaiNhiMT1: any;
  giaiNhiMT2: any;
  giaiNhatMT2: any;
  giaiNhatMT1: any;
  giaiDBMT1: any;
  giaiDBMT2: any;
  locationMienTrung1: any;
  locationMienTrung2: any;
  giaiTamMT3: any;
  giaiBayMT3: any;
  giaiSauMT31: any;
  giaiSauMT32: any;
  giaiSauMT33: any;
  giaiNamMT3: any;
  giaiTuMT31: any;
  giaiTuMT32: any;
  giaiTuMT33: any;
  giaiTuMT34: any;
  giaiTuMT35: any;
  giaiTuMT36: any;
  giaiTuMT37: any;
  giaiBaMT31: any;
  giaiBaMT32: any;
  giaiNhiMT3: any;
  giaiNhatMT3: any;
  giaiDBMT3: any;
  isErrorMt: boolean;
  isFirstTimeLoadingMt: boolean;
  onShowGridMt: boolean;
  locationMienTrung3: any;
  maxDateMB: string;
  thuMmienTrung: any;
  thuMienNam: any;
  constructor(
    public datepipe: DatePipe,
    private requestService: RequestService,
    private localStorageService: LocalstorageService,
    private envService: EnvService
  ) {
    this.isThuBayMn = false;
    this.isThuBayMt = false;
    this.dateCurrent = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.isError = true;
    this.originThu = this.date.getDay() + 1;
    this.originDay = this.date.getDate();
    this.originMonth = this.date.getMonth() + 1;
    this.originYear = this.date.getFullYear();
    this.hour = this.date.getHours();
    if (this.hour > 17) {
      this.thu = this.date.getDay() + 1;
    } else {
      this.thu = this.date.getDay();
    }
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
      this.modelDateMb = this.ymd;
      this.maxDateMB = this.ymd;
    } else {
      this.reloadDataMienBac(this.previousYdm);
      this.modelDateMb = this.previousYdm;
      this.maxDateMB = this.previousYdm;
    }
    if (this.hour > 18) {
      this.modelDateMnam = this.ymd;
      this.modelDateMtrung = this.ymd;
    } else {
      this.modelDateMnam = this.previousYdm;
      this.modelDateMtrung = this.previousYdm;
    }
  }

  loadDataMienBac(ngaychot) {
    const urlLoadDataKetQua = this.envService.API_URL + this.envService.URL_LOAD_DATA_KET_QUA_MB;
    const params = [];
    params.push({ key: 'ngaychot', value: ngaychot });
    this.requestService.getWithAuth(urlLoadDataKetQua, params, undefined,
      (response) => this.onSuccessLoadDataMienBac(response),
      (error) => this.onErrorMienBac(error),
      () => { });
  }

  onErrorMienBac(onError) {
    this.isError = true;
    this.error = true;
    this.isFirstTimeLoading = false;
  }


  onSuccessLoadDataMienBac(response) {
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

  loadDataMienNam(ngaychot) {
    const urlLoadDataKetQua = this.envService.API_URL + this.envService.URL_LOAD_DATA_KET_QUA_MN;
    const params = [];
    params.push({ key: 'ngaychot', value: ngaychot });
    this.requestService.getWithAuth(urlLoadDataKetQua, params, undefined,
      (response) => this.onSuccessLoadDataMienNam(response),
      (error) => this.onErrorMienNam(error),
      () => { });
  }

  onErrorMienNam(error) {
    this.isErrorMn = true;
    this.errorMn = true;
    this.isFirstTimeLoadingMn = false;
  }

  onSuccessLoadDataMienNam(response) {
    this.thuMienNam = response.ngaychot.split(',', 2)[0];
    this.isErrorMn = false;
    this.isFirstTimeLoadingMn = false;
    this.onShowGridMN = true;
    if (response.ngaychot.substring(0, response.ngaychot.indexOf(',')) === 'Thứ Bảy') {
      this.isThuBayMn = true;
      this.location1MienNam1 = response.lotto[0].location;
      this.location1MienNam2 = response.lotto[1].location;
      this.location1MienNam3 = response.lotto[2].location;

      this.giaiTamLocationMn1 = response.lotto[0].kq17;
      this.giaiTamLocationMn2 = response.lotto[1].kq17;
      this.giaiTamLocationMn3 = response.lotto[2].kq17;

      this.giaiBayLocationMn1 = response.lotto[0].kq16;
      this.giaiBayLocationMn2 = response.lotto[1].kq16;
      this.giaiBayLocationMn3 = response.lotto[2].kq16;

      this.giaiSauLocationMn1 = response.lotto[0].kq15;
      this.giaiSauLocationMn2 = response.lotto[1].kq15;
      this.giaiSauLocationMn3 = response.lotto[2].kq15;

      this.giaiNamLocationMn1 = response.lotto[0].kq14;
      this.giaiNamLocationMn2 = response.lotto[1].kq14;
      this.giaiNamLocationMn3 = response.lotto[2].kq14;

      this.giaiTuLocationMn1 = response.lotto[0].kq13;
      this.giaiTuLocationMn2 = response.lotto[1].kq13;
      this.giaiTuLocationMn3 = response.lotto[2].kq13;

      this.giaiBaLocationMn1 = response.lotto[0].kq12;
      this.giaiBaLocationMn2 = response.lotto[1].kq12;
      this.giaiBaLocationMn3 = response.lotto[2].kq12;

      this.giaiNhiLocationMn1 = response.lotto[0].kq11;
      this.giaiNhiLocationMn2 = response.lotto[1].kq11;
      this.giaiNhiLocationMn3 = response.lotto[2].kq11;

      this.giaiNhatLocationMn1 = response.lotto[0].kq10;
      this.giaiNhatLocationMn2 = response.lotto[1].kq10;
      this.giaiNhatLocationMn3 = response.lotto[2].kq10;

      this.giaiDBLocationMn1 = response.lotto[0].kq9;
      this.giaiDBLocationMn2 = response.lotto[1].kq9;
      this.giaiDBLocationMn3 = response.lotto[2].kq9;

      this.location1MienNam4 = response.lotto[3].location;
      this.giaiTamLocationMn4 = response.lotto[3].kq17;
      this.giaiBayLocationMn4 = response.lotto[3].kq16;
      this.giaiSauLocationMn4 = response.lotto[3].kq15;
      this.giaiNamLocationMn4 = response.lotto[3].kq14;
      this.giaiTuLocationMn4 = response.lotto[3].kq13;
      this.giaiBaLocationMn4 = response.lotto[3].kq12;
      this.giaiNhiLocationMn4 = response.lotto[3].kq11;
      this.giaiNhatLocationMn4 = response.lotto[3].kq10;
      this.giaiDBLocationMn4 = response.lotto[3].kq9;
    } else {
      this.isThuBayMn = false;
      this.location1MienNam1 = response.lotto[0].location;
      this.location1MienNam2 = response.lotto[1].location;
      this.location1MienNam3 = response.lotto[2].location;

      this.giaiTamLocationMn1 = response.lotto[0].kq17;
      this.giaiTamLocationMn2 = response.lotto[1].kq17;
      this.giaiTamLocationMn3 = response.lotto[2].kq17;

      this.giaiBayLocationMn1 = response.lotto[0].kq16;
      this.giaiBayLocationMn2 = response.lotto[1].kq16;
      this.giaiBayLocationMn3 = response.lotto[2].kq16;

      this.giaiSauLocationMn1 = response.lotto[0].kq15;
      this.giaiSauLocationMn2 = response.lotto[1].kq15;
      this.giaiSauLocationMn3 = response.lotto[2].kq15;

      this.giaiNamLocationMn1 = response.lotto[0].kq14;
      this.giaiNamLocationMn2 = response.lotto[1].kq14;
      this.giaiNamLocationMn3 = response.lotto[2].kq14;

      this.giaiTuLocationMn1 = response.lotto[0].kq13;
      this.giaiTuLocationMn2 = response.lotto[1].kq13;
      this.giaiTuLocationMn3 = response.lotto[2].kq13;

      this.giaiBaLocationMn1 = response.lotto[0].kq12;
      this.giaiBaLocationMn2 = response.lotto[1].kq12;
      this.giaiBaLocationMn3 = response.lotto[2].kq12;

      this.giaiNhiLocationMn1 = response.lotto[0].kq11;
      this.giaiNhiLocationMn2 = response.lotto[1].kq11;
      this.giaiNhiLocationMn3 = response.lotto[2].kq11;

      this.giaiNhatLocationMn1 = response.lotto[0].kq10;
      this.giaiNhatLocationMn2 = response.lotto[1].kq10;
      this.giaiNhatLocationMn3 = response.lotto[2].kq10;

      this.giaiDBLocationMn1 = response.lotto[0].kq9;
      this.giaiDBLocationMn2 = response.lotto[1].kq9;
      this.giaiDBLocationMn3 = response.lotto[2].kq9;
    }
  }

  reloadDataMienNam(ngaychot) {
    this.loadDataMienNam(ngaychot);
  }

  reloadDataMienTrung(ngaychot) {
    this.loadDataMienTrung(ngaychot);
  }

  loadDataMienTrung(ngaychot) {
    const urlLoadDataKetQua = this.envService.API_URL + this.envService.URL_LOAD_DATA_KET_QUA_MT;
    const params = [];
    params.push({ key: 'ngaychot', value: ngaychot });
    this.requestService.getWithAuth(urlLoadDataKetQua, params, undefined,
      (response) => this.onSuccessLoadDataMienTrung(response),
      (error) => this.onErrorMientrung(error),
      () => { });
  }

  onErrorMientrung(error) {
    console.log(error);
  }

  onSuccessLoadDataMienTrung(response) {
    console.log(response);
    this.thuMmienTrung = response.ngaychot.split(',', 2)[0];
    this.isErrorMt = false;
    this.isFirstTimeLoadingMt = false;
    this.onShowGridMT = true;
    if (response.ngaychot.substring(0, response.ngaychot.indexOf(',')) === 'Thứ Bảy'
      || response.ngaychot.substring(0, response.ngaychot.indexOf(',')) === 'Thứ Năm') {
      this.isThuBayMt = true;
      this.locationMienTrung1 = response.lotto[0].location;
      this.locationMienTrung2 = response.lotto[1].location;
      this.locationMienTrung3 = response.lotto[2].location;
      this.giaiTamMT1 = response.lotto[0].kq17;
      this.giaiTamMT2 = response.lotto[1].kq17;
      this.giaiTamMT3 = response.lotto[2].kq17;

      this.giaiBayMT1 = response.lotto[0].kq16;
      this.giaiBayMT2 = response.lotto[1].kq16;
      this.giaiBayMT3 = response.lotto[2].kq16;

      this.giaiSauMT11 = response.lotto[0].kq15;
      this.giaiSauMT12 = response.lotto[0].kq14;
      this.giaiSauMT13 = response.lotto[0].kq13;

      this.giaiSauMT21 = response.lotto[1].kq15;
      this.giaiSauMT22 = response.lotto[1].kq14;
      this.giaiSauMT23 = response.lotto[1].kq13;

      this.giaiSauMT31 = response.lotto[2].kq15;
      this.giaiSauMT32 = response.lotto[2].kq14;
      this.giaiSauMT33 = response.lotto[2].kq13;

      this.giaiNamMT1 = response.lotto[0].kq12;
      this.giaiNamMT2 = response.lotto[1].kq12;
      this.giaiNamMT3 = response.lotto[2].kq12;

      this.giaiTuMT11 = response.lotto[0].kq11;
      this.giaiTuMT12 = response.lotto[0].kq10;
      this.giaiTuMT13 = response.lotto[0].kq9;
      this.giaiTuMT14 = response.lotto[0].kq8;
      this.giaiTuMT15 = response.lotto[0].kq7;
      this.giaiTuMT16 = response.lotto[0].kq6;
      this.giaiTuMT17 = response.lotto[0].kq5;

      this.giaiTuMT21 = response.lotto[1].kq11;
      this.giaiTuMT22 = response.lotto[1].kq10;
      this.giaiTuMT23 = response.lotto[1].kq9;
      this.giaiTuMT24 = response.lotto[1].kq8;
      this.giaiTuMT25 = response.lotto[1].kq7;
      this.giaiTuMT26 = response.lotto[1].kq6;
      this.giaiTuMT27 = response.lotto[1].kq5;

      this.giaiTuMT31 = response.lotto[2].kq11;
      this.giaiTuMT32 = response.lotto[2].kq10;
      this.giaiTuMT33 = response.lotto[2].kq9;
      this.giaiTuMT34 = response.lotto[2].kq8;
      this.giaiTuMT35 = response.lotto[2].kq7;
      this.giaiTuMT36 = response.lotto[2].kq6;
      this.giaiTuMT37 = response.lotto[2].kq5;

      this.giaiBaMT11 = response.lotto[0].kq4;
      this.giaiBaMT12 = response.lotto[0].kq3;

      this.giaiBaMT21 = response.lotto[1].kq4;
      this.giaiBaMT22 = response.lotto[1].kq3;

      this.giaiBaMT31 = response.lotto[2].kq4;
      this.giaiBaMT32 = response.lotto[2].kq3;

      this.giaiNhiMT1 = response.lotto[0].kq2;
      this.giaiNhiMT2 = response.lotto[1].kq2;
      this.giaiNhiMT3 = response.lotto[2].kq2;

      this.giaiNhatMT1 = response.lotto[0].kq1;
      this.giaiNhatMT2 = response.lotto[1].kq1;
      this.giaiNhatMT3 = response.lotto[2].kq1;

      this.giaiDBMT1 = response.lotto[0].kq0;
      this.giaiDBMT2 = response.lotto[1].kq0;
      this.giaiDBMT3 = response.lotto[2].kq0;
    } else {
      this.isThuBayMt = false;
      this.locationMienTrung1 = response.lotto[0].location;
      this.locationMienTrung2 = response.lotto[1].location;
      this.giaiTamMT1 = response.lotto[0].kq17;
      this.giaiTamMT2 = response.lotto[1].kq17;

      this.giaiBayMT1 = response.lotto[0].kq16;
      this.giaiBayMT2 = response.lotto[1].kq16;

      this.giaiSauMT11 = response.lotto[0].kq15;
      this.giaiSauMT12 = response.lotto[0].kq14;
      this.giaiSauMT13 = response.lotto[0].kq13;

      this.giaiSauMT21 = response.lotto[1].kq15;
      this.giaiSauMT22 = response.lotto[1].kq14;
      this.giaiSauMT23 = response.lotto[1].kq13;

      this.giaiNamMT1 = response.lotto[0].kq12;
      this.giaiNamMT2 = response.lotto[1].kq12;

      this.giaiTuMT11 = response.lotto[0].kq11;
      this.giaiTuMT12 = response.lotto[0].kq10;
      this.giaiTuMT13 = response.lotto[0].kq9;
      this.giaiTuMT14 = response.lotto[0].kq8;
      this.giaiTuMT15 = response.lotto[0].kq7;
      this.giaiTuMT16 = response.lotto[0].kq6;
      this.giaiTuMT17 = response.lotto[0].kq5;

      this.giaiTuMT21 = response.lotto[1].kq11;
      this.giaiTuMT22 = response.lotto[1].kq10;
      this.giaiTuMT23 = response.lotto[1].kq9;
      this.giaiTuMT24 = response.lotto[1].kq8;
      this.giaiTuMT25 = response.lotto[1].kq7;
      this.giaiTuMT26 = response.lotto[1].kq6;
      this.giaiTuMT27 = response.lotto[1].kq5;

      this.giaiBaMT11 = response.lotto[0].kq4;
      this.giaiBaMT12 = response.lotto[0].kq3;

      this.giaiBaMT21 = response.lotto[1].kq4;
      this.giaiBaMT22 = response.lotto[1].kq3;

      this.giaiNhiMT1 = response.lotto[0].kq2;
      this.giaiNhiMT2 = response.lotto[1].kq2;

      this.giaiNhatMT1 = response.lotto[0].kq1;
      this.giaiNhatMT2 = response.lotto[1].kq1;

      this.giaiDBMT1 = response.lotto[0].kq0;
      this.giaiDBMT2 = response.lotto[1].kq0;
    }
  }

  onSegmentChanged(event) {
    this.selectedSegment = event.target.value;
    if (this.selectedSegment === 'mienbac') {
      this.isError = true;
      this.isFirstTimeLoading = true;
      this.onShowGridMB = false;
      this.mienbacShow = true;
      this.miennamShow = false;
      this.mientrungShow = false;
      if (this.hour > 19) {
        this.modelDateMb = this.ymd;
      } else {
        this.modelDateMb = this.previousYdm;
      }
      this.reloadDataMienBac(this.modelDateMb);
    }
    if (this.selectedSegment === 'mientrung') {
      this.onShowGridMT = false;
      this.isErrorMt = true;
      this.isFirstTimeLoadingMt = true;
      this.mienbacShow = false;
      this.mientrungShow = true;
      this.miennamShow = false;
      if (this.hour > 18) {
        this.modelDateMtrung = this.ymd;
        this.ymdMienTrung = this.day + '/' + this.month;
        this.reloadDataMienTrung(this.ymdMienTrung);
      } else {
        this.modelDateMtrung = this.previousYdm;
        this.previousYmdMienTrung = this.previousDay + '/' + this.month;
        this.reloadDataMienTrung(this.previousYmdMienTrung);
      }
    }
    if (this.selectedSegment === 'miennam') {
      this.isErrorMn = true;
      this.isFirstTimeLoadingMn = true;
      this.onShowGridMN = false;
      if (this.hour > 18) {
        this.modelDateMnam = this.ymd;
        this.ymdMienNam = this.day + '/' + this.month;
        this.reloadDataMienNam(this.ymdMienNam);
      } else {
        this.modelDateMnam = this.previousYdm;
        this.previousYmdMienNam = this.previousDay + '/' + this.month;
        this.reloadDataMienNam(this.previousYmdMienNam);
      }
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

  onChangeDateTimeMienNam(event) {
    this.valueDateMnam = this.datepipe.transform(event.target.value, 'dd/MM');
    this.reloadDataMienNam(this.valueDateMnam);
  }

  onChangeDateTimeMienTrung(event) {
    this.valueDateMtrung = this.datepipe.transform(event.target.value, 'dd/MM');
    this.reloadDataMienTrung(this.valueDateMtrung);
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
    this.loadDataMienBac(ngaychot);
  }
}
