import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SourceRoutePage } from '../pages/source-route/source-route';
import { DestRoutePage } from '../pages/dest-route/dest-route';
import { TicketPage } from '../pages/ticket/ticket';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { RouteServiceProvider } from '../providers/route-service/route-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SourceRoutePage,
    DestRoutePage,
    TicketPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SourceRoutePage,
    DestRoutePage,
    TicketPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    RouteServiceProvider
  ]
})
export class AppModule {}
