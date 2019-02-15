import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CardescriptionModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardescription-modal',
  templateUrl: 'cardescription-modal.html',
})
export class CardescriptionModalPage {

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardescriptionModalPage');
  }

}
