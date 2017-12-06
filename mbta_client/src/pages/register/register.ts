import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {SourceRoutePage} from '../../pages/source-route/source-route';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerCredentials = { email: '', password: '' };
  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public navParams: NavParams, private auth: AuthServiceProvider) {
  }

  public register() {
    
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {  
        //registration success, pick mbta routes
        this.navCtrl.setRoot(SourceRoutePage);
      } else {
        this.showError("That email may already be taken.");
      }
    });
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
    console.log('ionViewDidLoad RegisterPage');
  }

}
