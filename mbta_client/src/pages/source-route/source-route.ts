import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DestRoutePage } from '../dest-route/dest-route'; 
import { RouteServiceProvider } from '../../providers/route-service/route-service';

/**
 * Generated class for the SourceRoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-source-route',
  templateUrl: 'source-route.html',
  providers: [RouteServiceProvider]
})
export class SourceRoutePage {

  public routes = new Array();
  private destinationPage;

  constructor(public navCtrl: NavController, public routeServiceProvider: RouteServiceProvider) {
    
    routeServiceProvider.getRoutes().subscribe(routes => {
      console.log('routes', routes);
      this.routes = routes;
    })

    this.destinationPage = DestRoutePage;
  }

  loadDestination(route) {
    console.log(route);
    this.navCtrl.push(this.destinationPage,  route);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SourceRoutePage');
  }

}
