import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TripdescPage } from '../tripdesc/tripdesc';
import { SearchtripPage } from '../searchtrip/searchtrip';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
 trips = 
    [{date:1,desc:"fecha numero 1"},
    {date:1,desc:"fecha numero 1.1"},
    {date:2,desc:"fecha numero 2"},
    {date:2,desc:"fecha numero 2"},
    {date:3,desc:"fecha numero 3"}];
    //trips = Array(10).fill({date:1,desc:"fecha numero 1"});
    listaMap;
    dateFilter;
    

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.listaMap = this.trips.map((item,index,array)=>{
      return item.date;
    });
    this.dateFilter = this.listaMap.filter((item,index,array) => {
      return array.indexOf(item) === index});
     
  }

  advancedSearch(){
    this.navCtrl.push(SearchtripPage);
    
  }

  launchTripdescPage(){
    this.navCtrl.push(TripdescPage);
  }

}
