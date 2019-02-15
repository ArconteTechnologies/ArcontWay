import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TripdescPage } from "../tripdesc/tripdesc";

/**
 * Generated class for the SearchtripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchtrip',
  templateUrl: 'searchtrip.html',
})
export class SearchtripPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchtripPage');
  }

  tripDetail(){
    this.navCtrl.push(TripdescPage);
  }
}
