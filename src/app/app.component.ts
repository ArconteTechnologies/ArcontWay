import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PaymentPage } from '../pages/payment/payment';
import { MytripsPage } from '../pages/mytrips/mytrips';
import { LoginPage } from '../pages/login/login';
import { HelpPage } from '../pages/help/help'
import { ProfilePage } from '../pages/profile/profile'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Mi Perfil', component: ProfilePage, icon: "person" },
      { title: 'Mis Viajes', component: MytripsPage, icon: "car" },
      { title: 'Formas de Pago', component: PaymentPage, icon: "card" },
      { title: 'Ayuda', component: HelpPage, icon: "help-buoy" },
      { title: 'Cerrar Sesión', component: LoginPage, icon: "power" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
