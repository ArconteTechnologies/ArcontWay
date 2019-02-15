import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BooktravelPage } from '../booktravel/booktravel';




/**
 * Generated class for the TripdescPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tripdesc',
  templateUrl: 'tripdesc.html',
})
export class TripdescPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripdescPage');
  }
  launchCardescription(){
    
    const cardDescModal = this.modal.create('CardescriptionModalPage');
    cardDescModal.present();

  }
  launchCompanydescrip(){
    const companyDescModal = this.modal.create('CompanydescripPage');
    companyDescModal.present();
  }

  booktrav(){
    this.navCtrl.push(BooktravelPage);
  }




}
