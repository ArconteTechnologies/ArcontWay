import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EditnamePage } from '../editname/editname';
import { EditmailPage } from '../editmail/editmail';
import { EditphonePage } from '../editphone/editphone';
import { EditpasswordPage } from '../editpassword/editpassword';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public modalCtrl: ModalController) {
  }

  launchHomePage(){
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editName(){
    this.navCtrl.push(EditnamePage);
  }

  editMail(){
    this.navCtrl.push(EditmailPage);
  }

  editPhone(){
    this.navCtrl.push(EditphonePage);
  }

  editPassword(){
    this.navCtrl.push(EditpasswordPage);
  }

}
