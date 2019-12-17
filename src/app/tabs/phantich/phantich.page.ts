import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phantich',
  templateUrl: './phantich.page.html',
  styleUrls: ['./phantich.page.scss'],
})
export class PhantichPage implements OnInit {
  selectDodai: any;
  selectDateTime: any;
  date = new Date();
  year: any;
  selectNhay: any;
  month: any;
  day: any;
  onShowTuyChon: boolean;
  arrowTuyChon: any;
  colorTuyChon = '#000000';
  index: any;
  valueNgay: any;
  arrayNumber = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
  modelNgay: any;
  valueNhay: any;
  checkBoxDB: any;
  checkBoxLon: any;
  checkBoxKhongLon: any;
  constructor() {
    if (this.date.getDate() >= 10) {
      this.day = this.date.getDate().toString();
    } else {
      this.day = '0' + (this.date.getDate()).toString();
    }
    if (this.date.getMonth() + 1 >= 10) {
      this.month = (this.date.getMonth() + 1).toString();
    } else {
      this.month = '0' + (this.date.getMonth() + 1).toString();
    }
    this.year = this.date.getFullYear();
    this.selectDateTime = this.day + '-' + this.month + '-' + this.year;
  }

  ionViewWillEnter(): void {
    this.arrowTuyChon = 'arrow-dropdown';
    this.onShowTuyChon = true;
    this.selectDodai = 'bangHoacHon';
    this.selectNhay = '1nhay';
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
    this.valueNgay = i;
  }

  soiCau() {
    this.index = parseInt(this.modelNgay, 0);
  }

  onChangeSelectNhay(event) {
    this.valueNhay = event.target.value;
  }



}
