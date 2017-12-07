
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// export class User {
//   name: string;
  
 
//   constructor(name: string) {
//     this.name = name;
    
//   }
// }

@Injectable()
export class AuthServiceProvider {

  public currentUser ;

  constructor(public http: Http) {
     console.log('Hello AuthServiceProvider Provider');
  }

  //this didn't work because the AuthServiceProvider is reinstantiated 
  //causing currentUser to get obliterated
  public getUserInfo()  {
    return this.currentUser;
  }

  public login(credentials) {
       //be optimistic that this will be our new user
       //this.currentUser = new User(credentials.email);
       this.currentUser = credentials.email;
    
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      
      return Observable.create(observer => {
     
        // At this point make a request to your backend to make a real check!
        let body = JSON.stringify(credentials);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON

        let options       = new RequestOptions({ headers: headers }); // Create 
        
        //todo move the url out to config
         this.http.post('http://localhost:3000/login', body, options) // ...using post request
                           .map(res => res.json()) // ...and calling .json() on the response to return data
                          // .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
                           .subscribe (data =>{
                               
                                observer.next(data.allowed);
                                observer.complete();      
                           });            
      });
    }
  }

  public register(credentials) {
     //be optimistic that this will be our new user
     this.currentUser = credentials.email;
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
     
      return Observable.create(observer => {

        let body = JSON.stringify(credentials);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON

        let options       = new RequestOptions({ headers: headers }); // Create 
        
        //todo move the url out to config
         this.http.post('http://localhost:3000/register', body, options) // ...using post request
                           .map(res => res.json()) // ...and calling .json() on the response to return data
                          // .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
                           .subscribe (data =>{
                                
                                observer.next(data.success);
                                observer.complete();      
                           });           
                           
                           
      });
    }
  }

 
 
}
