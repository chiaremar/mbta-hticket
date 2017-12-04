import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthServiceProvider {

  currentUser: User;

  constructor(public http: Http) {
     console.log('Hello AuthServiceProvider Provider');
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let body = JSON.stringify(credentials);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create 
        let access =true;
        //todo move the url out to config
        this.http.post('http://localhost:3000/login', body, options) // ...using post request
                           .map((res:Response) => res.json()); // ...and calling .json() on the response to return data
 //                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
              
        console.log('login response : ', Response)
        observer.next(access);
        observer.complete();
      });
    }
  }

//   // Add a new comment
//   addComment (body: Object): Observable<Comment[]> {
//     let bodyString = JSON.stringify(body); // Stringify payload
//     let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
//     let options       = new RequestOptions({ headers: headers }); // Create a request option

//     return this.http.post(this.commentsUrl, body, options) // ...using post request
//                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
//                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
// }   

 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }


  public getUserInfo() : User {
    return this.currentUser;
  }
 
}
