import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { RequestService } from '../service/request.service';
import { NavController } from '@ionic/angular';
import { AlertService } from '../service/alert.service';
import { LocalstorageService } from '../service/localstorage.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { EnvService } from '../service/env.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  imgUser: any;
  info: any;
  nameUser: any;
  emailUser: any;
  idUser: any;
  accessToken: any;
  constructor(
    private fb: Facebook,
    private requestService: RequestService,
    private alertService: AlertService,
    private envService: EnvService,
    private localStorageSerivce: LocalstorageService,
    private googlePlus: GooglePlus,
    private navCrt: NavController) {
  }

  ngOnInit() {
  }


  postToken() {
    const urlPostToken = this.envService.API_URL + this.envService.URL_POST_TOKEN;
    const body = {
      accessToken: this.localStorageSerivce.get(this.localStorageSerivce.ACCESS_TOKEN),
      displayName: this.localStorageSerivce.get(this.localStorageSerivce.USER_NAME),
      email: this.localStorageSerivce.get(this.localStorageSerivce.USER_EMAIL),
      userId: this.localStorageSerivce.get(this.localStorageSerivce.USER_ID)
    };
    this.requestService.post(urlPostToken, body, undefined, undefined,
      (reponse) => this.onSuccessPostToken(reponse),
      (error) => this.onErrorPostToken(error),
      () => { });
  }

  onErrorPostToken(error: any) {
    console.log(error);
    this.alertService.presentToast('Đăng nhập thất bại');
  }

  onSuccessPostToken(reponse: any) {
    this.alertService.presentToast('Đăng nhập thành công');
    this.navCrt.navigateRoot('/tabs/navi');
  }


  loginGoogle() {
    this.googlePlus.login({})
      .then(res => {
        this.accessToken = res.accessToken;
        this.nameUser = res.displayName,
          this.emailUser = res.email;
        this.idUser = res.userId;
        this.localStorageSerivce.set(this.localStorageSerivce.ACCESS_TOKEN, this.accessToken);
        this.localStorageSerivce.set(this.localStorageSerivce.USER_EMAIL, this.emailUser);
        this.localStorageSerivce.set(this.localStorageSerivce.USER_ID, this.idUser);
        this.localStorageSerivce.set(this.localStorageSerivce.USER_NAME, this.nameUser);
        this.postToken();
      })
      .catch(err => {
        console.error(err);
      });
  }

  loginFb() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        this.getData(res.authResponse.accessToken);
        this.accessToken = res.authResponse.accessToken;
      })
      .catch(e => {
        this.fb.logout();
      });
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
    this.emailUser = data.email;
    this.idUser = data.id;
    this.nameUser = data.name;
    this.localStorageSerivce.set(this.localStorageSerivce.ACCESS_TOKEN, this.accessToken);
    this.localStorageSerivce.set(this.localStorageSerivce.USER_EMAIL, this.emailUser);
    this.localStorageSerivce.set(this.localStorageSerivce.USER_ID, this.idUser);
    this.localStorageSerivce.set(this.localStorageSerivce.USER_NAME, this.nameUser);
    this.postToken();
  }
}
