import { HttpClient, HttpParams } from '@angular/common/http';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
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

  }

  getFilteredRoutes(startRoute){
    console.log('getFilteredRoutes: ', 'http://localhost:3000/routes/\"' + startRoute +'\"');
    //use source route name to filter destination routes
    return this.http.get('http://localhost:3000/routes/\"' + encodeURIComponent(startRoute) +'\"')
    .map(res => res.json() );
 
  }

  getTicketRoutes(username){
    console.log('getTicketRoutes: ', 'http://localhost:3000/ticketroutes/\"' + username +'\"');
    //use source route name to filter destination routes
    return this.http.get('http://localhost:3000/ticketroutes/\"' + encodeURIComponent(username) +'\"')
    .map(res => res.json() );
 
  }

  postTicketRoute(ticketinfo){
    //console.log('Post Ticket Route: ',   ticketinfo );
    
    let body = JSON.stringify(ticketinfo );
    console.log('Post Ticket Route: ',   body );
    console.log('json body to ticket post',  JSON.stringify(ticketinfo ) );
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    
    let options       = new RequestOptions({ headers: headers }); // Create 
    return this.http.post('http://localhost:3000/ticketroute/', body, options)
    .map(res => res.json() );
 
  }
}
