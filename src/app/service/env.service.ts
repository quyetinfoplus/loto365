import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://1.55.215.217:8081/';
  URL_POST_ACCESS_TOKEN = 'ums/login';
  URL_LOAD_DATA_THEO_DOI = 'kqxs/chotkq';
  URL_LOAD_DATA_KET_QUA = 'kqxs/ketqua';
  URL_LOAD_DATA_KET_QUA_MB = 'kqxs/ketqua';
  URL_LOAD_DATA_KET_QUA_MN = 'kqxs/ketquamn';
  URL_LOAD_DATA_KET_QUA_MT = 'kqxs/ketquamt';
  URL_LOAD_DATA_TRENDING = 'kqxs/trending';
  URL_LOAD_DATA_PHAN_TICH = 'kqxs/caudep';
  URL_GET_MAX_DO_DAI_CAU = 'kqxs/limitday';
  AUTH_PARAM = 'Authorization';
  AUTH_PREFIX = 'Bearer ';
  constructor() { }
}
