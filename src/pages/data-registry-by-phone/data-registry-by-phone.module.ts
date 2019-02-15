import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataRegistryByPhonePage } from './data-registry-by-phone';

@NgModule({
  declarations: [
    DataRegistryByPhonePage,
  ],
  imports: [
    IonicPageModule.forChild(DataRegistryByPhonePage),
  ],
})
export class DataRegistryByPhonePageModule {}
