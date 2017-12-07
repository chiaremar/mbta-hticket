import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DestRoutePage } from '../dest-route/dest-route'; 
import { TicketPage } from '../ticket/ticket'; 
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
  private ticketPage;
  private currentUser;

  constructor(public navCtrl: NavController, public navParams: NavParams, public routeServiceProvider: RouteServiceProvider) {
    
    routeServiceProvider.getRoutes().subscribe(routes => {
      console.log('routes', routes);
      this.routes = routes;
    })

    
    this.destinationPage = DestRoutePage;
    this.ticketPage = TicketPage;
    this.currentUser = navParams.data.username;

  }

  loadDestination(route) {
    console.log(route);
    this.navCtrl.push(this.destinationPage,  {'route': route, 'username':this.currentUser});
  }

  loadTicketHistory() {
    console.log(this.currentUser);
    this.navCtrl.push(this.ticketPage,  {'username': this.currentUser});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SourceRoutePage');
  }

}
