import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the RouteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RouteServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RouteServiceProvider Provider');
  }

  getRoutes(){
    return this.http.get('http://localhost:3000/routes')
    .map(res => res.json() );
 //   .map(res => res.results);
  }
}
