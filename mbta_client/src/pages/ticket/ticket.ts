import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RouteServiceProvider} from '../../providers/route-service/route-service';


/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
  providers: [RouteServiceProvider]
})
export class TicketPage {
  public tickets = new Array();
  private currentUser;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private routeServiceProvider: RouteServiceProvider) {
    this.currentUser = navParams.get('username');

    routeServiceProvider.getTicketRoutes(this.currentUser).subscribe(routes => {
      console.log('ticketed routes', routes);
      this.tickets = routes;
    })

      //this.tickets.push({startroute: "South Station", endroute: "Newmarket"});
      //this.tickets.push({startroute: "South Station", endroute: "Back Bay"});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

}
