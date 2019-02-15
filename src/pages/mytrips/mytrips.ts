import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TripconcludedPage} from "../tripconcluded/tripconcluded";
import {ReservedtripPage} from "../reservedtrip/reservedtrip";
/**
 * Generated class for the MytripsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytrips',
  templateUrl: 'mytrips.html',
})
export class MytripsPage {
  trips: string = "concluidos";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytripsPage');
  }

  tripCon(){
    this.navCtrl.push(TripconcludedPage);
  }

  resTrip(){
    this.navCtrl.push(ReservedtripPage);
  }
}
