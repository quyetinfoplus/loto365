import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { RequestService } from 'src/app/service/request.service';
import { EnvService } from 'src/app/service/env.service';
import { DatePipe } from '@angular/common';
import { Theodoi } from 'src/app/model/theodoi';

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
  constructor(
    public datepipe: DatePipe,
    private requestService: RequestService,
    private localStorageService: LocalstorageService,
    private envService: EnvService
  ) {
    this.dateCurrent = this.datepipe.transform(this.date, 'yyyy-MM-dd HH:mm:ss');
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
    this.reloadTheoDoi();
    this.onReloadTrending(this.ymd);
  }

  reloadTheoDoi() {
    this.currentTotal = 0;
    this.theodoiArrays = [];
    this.loadDataTheoDoi(null);
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
      this.reloadTheoDoi();
    }, 500);
  }

  loadDataTheoDoi(event) {
    const urlLoadDataTheoDoi = this.envService.API_URL + this.envService.URL_LOAD_DATA_THEO_DOI;
    const params = [];
    params.push({ key: 'ngaychot', value: this.ymd });
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


}
