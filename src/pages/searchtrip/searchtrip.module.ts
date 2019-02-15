import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchtripPage } from './searchtrip';

@NgModule({
  declarations: [
    SearchtripPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchtripPage),
  ],
})
export class SearchtripPageModule {}
