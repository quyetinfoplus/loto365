import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://1.55.215.217:8081/';
  URL_LOAD_DATA_THEO_DOI = 'kqxs/chotkq';
  constructor() { }
}
