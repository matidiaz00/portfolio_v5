import { NgModule, Provider } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';

const AngularModules = [
  BrowserModule
]

import { SharedModule } from './shared/shared.module';
import { PagesRoutingModule } from './pages/pages.routing';
import { PagesModule } from './pages/pages.module';

const Modules = [
  AngularModules,
  SharedModule,
  PagesRoutingModule,
  PagesModule
]

const Services: Provider = [
  /*
  {
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true
  },
  */
];

@NgModule({
  declarations:     [ AppComponent ],
  imports:          [ Modules ],
  providers:        [ Services ],
  bootstrap:        [ AppComponent ]
})
export class AppModule { }
