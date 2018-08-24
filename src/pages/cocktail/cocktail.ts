import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CocktailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cocktail',
  templateUrl: 'cocktail.html',
})
export class CocktailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CocktailPage');
  }

  yourCocktail(){
    this.navCtrl.push("YourCocktailPage");
  }

  cocktailCosting(){
    this.navCtrl.push("CocktailCostingPage");
  }

  cocktailRecipe(){
    this.navCtrl.push("CocktailRecipePage");
  }

  
}
