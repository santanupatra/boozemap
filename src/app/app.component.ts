import { Component ,ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any;
  public id:any;
 public loguser:any;
 //public type:any;
  public istype:any;

  public path:any;
  constructor(platform: Platform,
    private storage: Storage, statusBar: StatusBar, 
    splashScreen: SplashScreen) {

      platform.ready().then(()=>{
       
    
      
      this.storage.get('uid').then(val => {
        this.id =val;   
       
        if(this.id){
              this.nav.setRoot('HomePage');             
        }else{          
          this.nav.setRoot('AfterSplashPage');
        }

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
  // });
  });



})
  }

  public logout(){
      this.storage.ready().then(() => {
        //const data=localStorage.getItem("userData");
      localStorage.removeItem('userData');
      localStorage.setItem('userData',"");
      this.storage.set("uid","");

    this.nav.setRoot('SigninPage');
    });
  }

    public boozeList(){
      this.nav.push('BoozeListPage');
    }

    public cocktailList(){
      this.nav.push('CocktailPage');
    }

    public wineList(){
      this.nav.push('HomeWinePage');
    }

    public profile(){
      this.nav.push('ProfilePage');
    }
    
    public login(){       
        this.nav.push('SigninPage');        
    }
    public orders(){
      this.nav.push('OrdersPage');
    }

    public back(){
      this.nav.pop(); 
    }
    
    
    
    
    


}