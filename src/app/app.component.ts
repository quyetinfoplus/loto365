import { Component } from '@angular/core';

import { Platform, MenuController, AlertController, NavController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LocalstorageService } from './service/localstorage.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { ThongtincanhanPage } from './thongtincanhan/thongtincanhan.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private statusBar: StatusBar,
    private router: Router,
    private navControl: NavController,
    private alertController: AlertController,
    private googlePlus: GooglePlus,
    private modalController: ModalController,
    private localStorageservice: LocalstorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (this.localStorageservice.get(this.localStorageservice.ACCESS_TOKEN) !== undefined) {
        this.router.navigateByUrl('/tabs/navi');
      }
    });
  }

  onSideMenuClick(page) {
    if (page === 'thongke') {
      this.router.navigateByUrl('thongke');
      this.menuCtrl.close();
    }
    if (page === 'logout') {
      this.menuCtrl.close();
      this.logout();
    }
    if (page === 'thongtincanhan') {
      this.menuCtrl.close();
      this.onShowThongTin();
    }
  }

  async onShowThongTin() {
    const modal = await this.modalController.create({
      component: ThongtincanhanPage,
      cssClass: 'modalThongTinCaNhan'
    });
    return await modal.present();
  }

  logout() {
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    this.menuCtrl.close();
    const alert = await this.alertController.create({
      header: 'Đăng Xuất',
      mode: 'ios',
      message: 'Bạn có muốn đăng xuất không ?',
      buttons: [
        {
          text: 'Không',
          handler: (blah) => {
            alert.dismiss();
          }
        }, {
          text: 'Có',
          handler: () => {
            this.localStorageRemove();
            this.googlePlus.disconnect();
            this.navControl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }

  localStorageRemove() {
    this.localStorageservice.remove(this.localStorageservice.ACCESS_TOKEN);
    this.localStorageservice.remove(this.localStorageservice.USER_NAME);
    this.localStorageservice.remove(this.localStorageservice.USER_ID);
    this.localStorageservice.remove(this.localStorageservice.USER_EMAIL);
  }
}
