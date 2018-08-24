import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourCocktailPage } from './your-cocktail';

@NgModule({
  declarations: [
    YourCocktailPage,
  ],
  imports: [
    IonicPageModule.forChild(YourCocktailPage),
  ],
})
export class YourCocktailPageModule {}
