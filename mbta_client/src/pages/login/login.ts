import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {SourceRoutePage} from '../../pages/source-route/source-route';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginCredentials = { email: '', password: '' };
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, private auth: AuthServiceProvider) {
  }

  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }
 
  public login() {
    
    this.auth.login(this.loginCredentials).subscribe(allowed => {
      if (allowed) {  
        //login success, pick mbta routes
        this.navCtrl.setRoot(SourceRoutePage);
      } else {
        this.showError("Have you created an account?");
      }
    });
    // },
    //   error => {
    //     this.showError(error);
    //   });
  }
 
  showError(text) {
 
    let alert = this.alertCtrl.create({
      title: 'Something\'s not right',
      subTitle: text,
      buttons: ['x']
    });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
