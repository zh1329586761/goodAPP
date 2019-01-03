import { SettingsPage } from './../settings/settings';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
/**
 * Generated class for the TixingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tixing',
  templateUrl: 'tixing.html',
})
export class TixingPage {
  public SettingsPage=SettingsPage;
  public isHidden=true;
  public bottomHidden=true;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,


    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TixingPage');
    
  }


  showUnder(){
    console.log("显示/隐藏下面成功")
    this.isHidden=!this.isHidden;
  }

  hiddenfour(){
    console.log("隐藏上面成功")
    this.bottomHidden=!this.bottomHidden;
  }


 
}