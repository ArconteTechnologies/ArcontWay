import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController} from 'ionic-angular';

/**
 * Generated class for the EditnamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editname',
  templateUrl: 'editname.html',
})
export class EditnamePage {

  constructor(public navParams: NavParams,
              public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditnamePage');
  }
  
}
