import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  DATA = 'data';
  ACCESS_TOKEN = 'access_token';

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
