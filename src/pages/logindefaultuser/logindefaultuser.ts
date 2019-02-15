import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import { RegistryPage } from '../registry/registry';
import { HomePage } from '../home/home';

/**
 * Generated class for the LogindefaultuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logindefaultuser',
  templateUrl: 'logindefaultuser.html',
})
export class LogindefaultuserPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl : ToastController,
    public forgotCtrl: AlertController,) {
  }

  ///--------------Codigo login con usuario----------------------------------////////////
  // go to register page
  launchRegistryPage(){
    this.navCtrl.push(RegistryPage);
  }

  // login and go to home page
  launchPrincipalPage(){
    this.navCtrl.setRoot(HomePage);
  }


  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
