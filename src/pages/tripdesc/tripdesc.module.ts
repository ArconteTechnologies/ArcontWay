import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripdescPage } from './tripdesc';
import { AlertController } from 'ionic-angular';

@NgModule({
  declarations: [
    TripdescPage
  ],
  imports: [
    IonicPageModule.forChild(TripdescPage),
  ],
})
export class TripdescPageModule {

}
export class companydescrip {

 constructor(public alertCtrl: AlertController) { }

 showConfirm() {
   const confirm = this.alertCtrl.create({
     title: 'Use this lightsaber?',
     message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
     buttons: [
       {
         text: 'Disagree',
         handler: () => {
           console.log('Disagree clicked');
         }
       },
       {
         text: 'Agree',
         handler: () => {
           console.log('Agree clicked');
         }
       }
     ]
   });
   confirm.present();
 }
}
