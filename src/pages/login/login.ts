import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogindefaultuserPage } from '../logindefaultuser/logindefaultuser';
import { Storage } from '@ionic/storage';
import { DataRegistryByPhonePage } from '../data-registry-by-phone/data-registry-by-phone';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  

  constructor(public nav: NavController,
    private storage: Storage) {
   
  }
  


  phonelogin(){
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
      defaultCountryCode: "MX",
      facebookNotificationsEnabled: true
    },(res)=>{
      console.log("res"+res.accountId);
      console.log("res"+res.applicationId);
      console.log("res"+res.token);
      console.log("res"+res.lastRefresh);
      console.log("res"+res.refreshInterval);
      this.storage.set("token", res.token.toString());
      this.nav.push(DataRegistryByPhonePage);
    },(err)=>{
       console.log("error",err)
    })
  }

  launchLoginDefault(){
    this.nav.push(LogindefaultuserPage);
  }


}
