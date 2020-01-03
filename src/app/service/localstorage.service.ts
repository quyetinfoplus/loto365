import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  DATA = 'data';
  ACCESS_TOKEN = 'access_token';
  USER_EMAIL = 'user_email';
  USER_ID = 'user_id';
  USER_NAME = 'user_name';

  constructor(
  ) { }

  set(key: any, value: any) {
    localStorage.setItem(key, value);
  }

  get(key: any) {
    return localStorage[key];
  }

  remove(key: any) {
    localStorage.removeItem(key);
  }

}
