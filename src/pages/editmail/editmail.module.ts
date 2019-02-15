import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditmailPage } from './editmail';

@NgModule({
  declarations: [
    EditmailPage,
  ],
  imports: [
    IonicPageModule.forChild(EditmailPage),
  ],
})
export class EditmailPageModule {}
