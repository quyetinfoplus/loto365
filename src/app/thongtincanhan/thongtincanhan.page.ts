import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../service/localstorage.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-thongtincanhan',
  templateUrl: './thongtincanhan.page.html',
  styleUrls: ['./thongtincanhan.page.scss'],
})
export class ThongtincanhanPage implements OnInit {

  userId: any;
  userName: any;
  userEmail: any;
  constructor(
    private localStorageServie: LocalstorageService,
    private modalController: ModalController) {
    this.getInfoUser();
  }

  getInfoUser() {
    this.userId = this.localStorageServie.get(this.localStorageServie.USER_ID);
    this.userName = this.localStorageServie.get(this.localStorageServie.USER_NAME);
    this.userEmail = this.localStorageServie.get(this.localStorageServie.USER_EMAIL);
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
