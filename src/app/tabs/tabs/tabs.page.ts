import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router) { }
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

  onLichSu() {
    this.router.navigateByUrl('lichsu');
  }

}
