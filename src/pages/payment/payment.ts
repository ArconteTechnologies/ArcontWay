import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddpaymentPage} from "../addpayment/addpayment";

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  items = [
    'Agregar Método de Pago'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  addPayment(){
    this.navCtrl.push(AddpaymentPage);
  }

}
