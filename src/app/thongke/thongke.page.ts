import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RequestService } from '../service/request.service';
import { LocalstorageService } from '../service/localstorage.service';
import { EnvService } from '../service/env.service';

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.page.html',
  styleUrls: ['./thongke.page.scss'],
})
export class ThongkePage implements OnInit {
  currentTotal = 0;
  limit = 10;
  arrayNumber1 = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  arrayNumber2 = [];
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 10,
    speed: 400
  };
  arrayKqByDate = [];
  constructor(
    private datepipe: DatePipe,
    private requestService: RequestService,
    private localStorageService: LocalstorageService,
    private envService: EnvService
  ) {
    this.initArrayNumber();
    this.reloadData();
  }

  reloadData() {
    this.currentTotal = 0;
    this.arrayKqByDate = [];
    this.loadData();
    this.currentTotal += this.limit;
  }
  initArrayNumber() {
    for (let index = 0; index < Object.keys(this.arrayNumber1).length; index++) {
      this.arrayNumber2.push(this.arrayNumber1[index]);
    }
    for (let index = 10; index < 100; index++) {
      this.arrayNumber2.push(index.toString());
    }
    console.log(this.arrayNumber2);
  }

  loadData() {
    const urlLoadThongKe = this.envService.API_URL + this.envService.URL_LOAD_DATA_KET_QUA;
    const params = [];
    params.push({ key: 'limit', value: this.limit });
    params.push({ key: 'skip', value: this.currentTotal });
    this.requestService.get(urlLoadThongKe, params, undefined,
      (response) => this.onSuccess(response),
      (error) => this.onError(error),
      () => { });
  }

  onError(error: any) {
  }

  onSuccess(response: any) {
   console.log(response);
   for (let index = 0; index < Object.keys(response).length; index++) {
      this.arrayKqByDate.push(index);
   }

  }

  ngOnInit() {
  }

}
