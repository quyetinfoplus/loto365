import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  colorKQ: any;
  colorTD: any;
  colorPT: any;
  colorChat: any;
  constructor() {
    this.colorKQ = '#b8860b';
    this.colorTD = '#FFFFFF';
    this.colorPT = '#FFFFFF';
    this.colorChat = '#FFFFFF';
  }

  ngOnInit() {
  }

  clickKQ() {
    this.colorKQ = '#b8860b';
    this.colorTD = '#FFFFFF';
    this.colorPT = '#FFFFFF';
    this.colorChat = '#FFFFFF';
  }

  clickTD() {
    this.colorKQ = '#FFFFFF';
    this.colorTD = '#b8860b';
    this.colorPT = '#FFFFFF';
    this.colorChat = '#FFFFFF';
  }

  clickChat() {
    this.colorKQ = '#FFFFFF';
    this.colorTD = '#FFFFFF';
    this.colorPT = '#FFFFFF';
    this.colorChat = '#b8860b';
  }

  clickPT() {
    this.colorKQ = '#FFFFFF';
    this.colorTD = '#FFFFFF';
    this.colorPT = '#b8860b';
    this.colorChat = '#FFFFFF';
  }



}
