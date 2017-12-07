import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketPage } from '../ticket/ticket'; 
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
  private ticketPage;
  private currentUser;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public routeServiceProvider: RouteServiceProvider) {
  
    //this.selectedStartRoute = navParams.data.route;
    this.selectedStartRoute = navParams.get('route');
    this.currentUser = navParams.get('username');
    this.ticketPage = TicketPage;
    
    routeServiceProvider.getFilteredRoutes(this.selectedStartRoute.route).subscribe(routes => {
      console.log('filtered routes', routes);
      this.filteredRoutes = routes;
    })

  }

  saveTicketRoute(data) {
    //todo add a confirmation dialog before saving the ticket
    console.log('save ticket to history for current user :', this.currentUser);
    
    let body = {username:  this.currentUser ,startroute:this.selectedStartRoute.route, 
                  endroute:data.destroute.route };
              
    console.log('body to ticket post', body );
    this.routeServiceProvider.postTicketRoute(body).subscribe(success => {
      console.log('posted ticket', success);   
    })  
  }

  loadTicketHistory() {
    console.log('current user for history on destination page :', this.currentUser);
    this.navCtrl.push(this.ticketPage,  {'username' :this.currentUser});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestRoutePage');
  }

}
