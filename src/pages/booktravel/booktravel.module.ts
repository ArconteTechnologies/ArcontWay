import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BooktravelPage } from './booktravel';

@NgModule({
  declarations: [
    BooktravelPage,
  ],
  imports: [
    IonicPageModule.forChild(BooktravelPage),
  ],
})
export class BooktravelPageModule {}
