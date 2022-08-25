import { BrowserModule } from '@angular/platform-browser';

const AngularModules = [
  BrowserModule
]

import { PagesModule } from './pages/pages.module';

export const Modules = [
  AngularModules,
  PagesModule
]

import { AppComponent } from './app.component';

export const Bootstrap = AppComponent;