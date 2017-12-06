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

  registerCredentials = { email: '', password: '' };
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, private auth: AuthServiceProvider) {
  }

  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }
 
  public login() {
    
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {  
        //todo: make this redirect to select start route page
        this.navCtrl.setRoot(SourceRoutePage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showError(text) {
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
