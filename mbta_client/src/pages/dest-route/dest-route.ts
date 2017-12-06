import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RouteServiceProvider } from '../../providers/route-service/route-service';

/**
 * Generated class for the DestRoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dest-route',
  templateUrl: 'dest-route.html',
  providers: [RouteServiceProvider]
})
export class DestRoutePage {
  public selectedStartRoute;
  public filteredRoutes = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, public routeServiceProvider: RouteServiceProvider) {
  
    this.selectedStartRoute = navParams.data.route;
    
    routeServiceProvider.getFilteredRoutes(this.selectedStartRoute).subscribe(routes => {
      console.log('filtered routes', routes);
      this.filteredRoutes = routes;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestRoutePage');
  }

}
