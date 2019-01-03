import { CalendarModule } from 'ionic3-calendar';
import { HttpModule, JsonpModule } from '@angular/http';
import { StorageProvider } from './../providers/storage/storage';
import { HttpServicesProvider } from './../providers/http-services/http-services';
import { LoginPage } from './../pages/login/login';
import { TixingPage } from './../pages/tixing/tixing';
import { ShixiangPage } from './../pages/shixiang/shixiang';
import { SettingsPage } from './../pages/settings/settings';
import { MubanPage } from './../pages/muban/muban';
import { LianxirenPage } from './../pages/lianxiren/lianxiren';
import { DaifaPage } from './../pages/daifa/daifa';

import { TabsPage } from './../pages/tabs/tabs';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { RegisterPage } from '../pages/register/register';
import { Register2Page } from '../pages/register2/register2';
import { RegisterpasswordPage } from '../pages/registerpassword/registerpassword';
import { ConfigProvider } from '../providers/config/config';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    // 自定义页面
    DaifaPage,
    LianxirenPage,
    MubanPage,
    SettingsPage,
    ShixiangPage,
    TixingPage,
    RegisterPage,
    Register2Page,
    LoginPage,
    RegisterpasswordPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    CalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    // 自定义页面
    DaifaPage,
    LianxirenPage,
    MubanPage,
    SettingsPage,
    ShixiangPage,
    TixingPage,
    RegisterPage,
    Register2Page,
    LoginPage,
    RegisterpasswordPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConfigProvider,
    HttpServicesProvider,
    StorageProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
