import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PaymentPage } from '../pages/payment/payment';
import { AddpaymentPage } from '../pages/addpayment/addpayment';
import { MytripsPage } from '../pages/mytrips/mytrips';
import { TripconcludedPage } from '../pages/tripconcluded/tripconcluded';
import { ReservedtripPage } from '../pages/reservedtrip/reservedtrip';
import { SearchtripPage } from '../pages/searchtrip/searchtrip';
import { LoginPage } from '../pages/login/login';
import { RegistryPage } from '../pages/registry/registry';
import { TripdescPage } from '../pages/tripdesc/tripdesc';
import { ProfilePage } from '../pages/profile/profile';
import { HelpPage } from '../pages/help/help';
import { EditnamePage } from '../pages/editname/editname';
import { EditmailPage } from '../pages/editmail/editmail';
import { EditphonePage } from '../pages/editphone/editphone';
import { EditpasswordPage } from '../pages/editpassword/editpassword';
import { BooktravelPage } from '../pages/booktravel/booktravel';
import { LogindefaultuserPage } from '../pages/logindefaultuser/logindefaultuser'
import { DataRegistryByPhonePage } from '../pages/data-registry-by-phone/data-registry-by-phone'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TravelerProvider } from '../providers/traveler/traveler';
import { Authentication } from '../providers/authentification/authentication'
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PaymentPage,
    AddpaymentPage,
    MytripsPage,
    TripconcludedPage,
    ReservedtripPage,
    SearchtripPage,
    LoginPage,
    RegistryPage,
    TripdescPage,
    ProfilePage,
    HelpPage,
    EditnamePage,
    EditmailPage,
    EditphonePage,
    EditpasswordPage,
    BooktravelPage,
    LogindefaultuserPage,
    DataRegistryByPhonePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaymentPage,
    AddpaymentPage,
    MytripsPage,
    TripconcludedPage,
    ReservedtripPage,
    LoginPage,
    RegistryPage,
    TripdescPage,
    ProfilePage,
    SearchtripPage,
    HelpPage,
    EditnamePage,
    EditmailPage,
    EditphonePage,
    EditpasswordPage,
    BooktravelPage,
    LogindefaultuserPage,
    DataRegistryByPhonePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TravelerProvider,
    Authentication,
    UserProvider
  ]
})
export class AppModule {}
