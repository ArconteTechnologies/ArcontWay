import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardescriptionModalPage } from './cardescription-modal';

@NgModule({
  declarations: [
    CardescriptionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CardescriptionModalPage),
  ],
})
export class CardescriptionModalPageModule {}
