import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoozeListPage } from './booze-list';

@NgModule({
  declarations: [
    BoozeListPage,
  ],
  imports: [
    IonicPageModule.forChild(BoozeListPage),
  ],
})
export class BoozeListPageModule {}
