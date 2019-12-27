import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/service/localstorage.service';

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
  userName: any;

  constructor(
    private router: Router,
    private localStorageService: LocalstorageService
    ) {
    this.colorKQ = 'burlywood';
    this.colorTD = '#FFFFFF';
    this.colorPT = '#FFFFFF';
    this.colorChat = '#FFFFFF';
    this.userName = this.localStorageService.get(this.localStorageService.USER_NAME);
  }
  ngOnInit() {
  }

  clickKQ() {
    this.colorKQ = 'burlywood';
    this.colorTD = '#FFFFFF';
    this.colorPT = '#FFFFFF';
    this.colorChat = '#FFFFFF';
  }

  clickTD() {
    this.colorKQ = '#FFFFFF';
    this.colorTD = 'burlywood';
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
