import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { RequestService } from 'src/app/service/request.service';
import { EnvService } from 'src/app/service/env.service';
import { DatePipe } from '@angular/common';
import { Theodoi } from 'src/app/model/theodoi';
import ValidationUtil from 'src/app/service/util/validation';

@Component({
  selector: 'app-theodoi',
  templateUrl: './theodoi.page.html',
  styleUrls: ['./theodoi.page.scss'],
})
export class TheodoiPage implements OnInit {
  currentTotal = 0;
  limit = 10;
  theodoiArrays = [];
  isFirstTimeLoading: boolean;
  noData: boolean;
  errorinfo: boolean;
  year: any;
  month: any;
  day: any;
  arrayTrendingOrigin: any;
  arrayTrending = [];
  arrayTrendingShort = [];
  arrayTrendinglong = [];
  valueDateTrending: any;
  onShowShortTrending: boolean;
  onShowLongTrending: boolean;
  ymd: any;
  date = new Date();
  dateCurrent: any;
  onLoadingTrending: boolean;
  valueSearch: any;
  isSearch: boolean;
  originDateCurrent: string;
  valueDateDsChot: any;
  constructor(
    public datepipe: DatePipe,
    private requestService: RequestService,
    private localStorageService: LocalstorageService,
    private envService: EnvService
  ) {
    this.originDateCurrent = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.dateCurrent = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    if (this.date.getDate() >= 10) {
      this.day = this.date.getDate().toString();
    } else {
      this.day = '0' + this.date.getDate().toString();
    }
    if ((this.date.getMonth() + 1) >= 10) {
      this.month = (this.date.getMonth() + 1).toString();
    } else {
      this.month = '0' + (this.date.getMonth() + 1).toString();
    }
    this.year = this.date.getFullYear();
    this.ymd = this.year.toString() + '-' + this.month.toString() + '-' + this.day.toString();
  }

  ionViewWillEnter(): void {
    this.onShowShortTrending = true;
    this.onShowLongTrending = false;
    console.log(this.ymd);
    this.reloadTheoDoi(this.ymd);
    this.onReloadTrending(this.ymd);
    this.isSearch = false;
  }

  reloadTheoDoi(ngaychot) {
    this.currentTotal = 0;
    this.theodoiArrays = [];
    this.loadDataTheoDoi(null, ngaychot);
    this.currentTotal += this.limit;
  }

  loadTrending(ngaychot) {
    const urlTrending = this.envService.API_URL + this.envService.URL_LOAD_DATA_TRENDING;
    const params = [];
    params.push({ key: 'ngaychot', value: ngaychot });
    this.requestService.get(urlTrending, params, undefined,
      (data) => this.onSuccessTrending(data),
      (error) => this.onErrorTrending(error),
      () => { });
  }
  onErrorTrending(error: any) {
    this.onLoadingTrending = false;
    console.log(error);
  }

  onSuccessTrending(data: any) {
    this.onLoadingTrending = false;
    this.arrayTrendingOrigin = data.lotto.replace(/[^a-zA-Z0-9]/g, '');
    for (let index = 0; index < this.arrayTrendingOrigin.length / 2; index++) {
      this.arrayTrending.push(this.arrayTrendingOrigin.substr(index * 2, 2));
    }
    this.arrayTrendingShort = this.arrayTrending.slice(0, 20);
  }

  onReloadTrending(ngaychot) {
    this.arrayTrending = [];
    this.arrayTrendingShort = [];
    this.loadTrending(ngaychot);
  }

  onChangeDateTimeTrending(event) {
    this.onLoadingTrending = true;
    this.valueDateTrending = this.datepipe.transform(event.target.value, 'yyyy-MM-dd');
    this.onReloadTrending(this.valueDateTrending);
  }

  onshowMore() {
    this.onShowLongTrending = true;
    this.onShowShortTrending = false;
  }

  onNoShow() {
    this.onShowLongTrending = false;
    this.onShowShortTrending = true;
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      if (ValidationUtil.isEmptyStr(this.valueDateDsChot)) {
        this.reloadTheoDoi(this.valueDateDsChot);
      } else {
        this.reloadTheoDoi(this.ymd);
      }
    }, 500);
  }

  loadDataTheoDoi(event, ngaychot) {
    const urlLoadDataTheoDoi = this.envService.API_URL + this.envService.URL_LOAD_DATA_THEO_DOI;
    const params = [];
    params.push({ key: 'ngaychot', value: ngaychot });
    params.push({ key: 'limit', value: this.limit });
    params.push({ key: 'skip', value: this.currentTotal });
    this.requestService.get(urlLoadDataTheoDoi, params, undefined,
      (response) => this.onSuccessLoadDataTheoDoi(response, event),
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

  onSuccessLoadDataTheoDoi(response, event) {
    this.isFirstTimeLoading = false;
    this.errorinfo = false;
    if (Object.keys(response).length <= 0) {
      this.noData = true;
    }
    for (let index = 0; index < Object.keys(response).length; index++) {
      this.theodoiArrays.push(response[index]);
    }
    if (event != null) {
      this.currentTotal += this.limit;
      event.target.complete();
    }
  }

  ngOnInit() {
  }

  onChangeSearchBar(event) {
    this.valueSearch = '%' + event.target.value + '%';
    if (ValidationUtil.isEmptyStr(this.valueSearch)) {
      this.isSearch = false;
      return;
    }
    this.isSearch = true;

  }

  onChangeDateDsChot(event) {
    this.valueDateDsChot = this.datepipe.transform(event.target.value, 'yyyy-MM-dd');
    this.reloadTheoDoi(this.valueDateDsChot);
  }


}
