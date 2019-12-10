import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { RequestService } from '../service/request.service';
import { NavController } from '@ionic/angular';
import { AlertService } from '../service/alert.service';
import { LocalstorageService } from '../service/localstorage.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  imgUser: any;
  info: any;
  constructor(
    private fb: Facebook,
    private requestService: RequestService,
    private alertService: AlertService,
    private localStorageSerivce: LocalstorageService,
    private googlePlus: GooglePlus,
    private navCrt: NavController) { }

  ngOnInit() {
  }

  loginFb() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        if (res.status === 'connected') {
          this.imgUser = 'https://graph.facebook.com/' + res.authResponse.userID + '/picture?type=square';
          this.getData(res.authResponse.accessToken);
          this.localStorageSerivce.set(this.localStorageSerivce.ACCESS_TOKEN, res.authResponse.accessToken);
          this.alertService.presentToast('Đăng nhập thành công');
          this.navCrt.navigateRoot('/tabs/navi');
        } else {
          this.alertService.presentToast('Đăng nhập thất bại');
        }
        console.log('Logged into Facebook!', res);
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }


  loginGoogle() {
    this.googlePlus.login({})
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  }

  getData(accessToken: any) {
    const url = 'https://graph.facebook.com/me?fields=id,name,first_name,last_name,email&access_token=' + accessToken;
    this.requestService.get(url, undefined, undefined,
      (data) => this.onSuccess(data),
      (error) => this.onError(error),
      () => { });
  }

  onError(error) {
    console.log(error);
  }

  onSuccess(data) {
    this.info = data;
    this.localStorageSerivce.set(this.localStorageSerivce.DATA, data);

  }

}
