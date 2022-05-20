import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

const AngularModules = [
  CommonModule,
  RouterModule
];

const Modules = [
  AngularModules,
];

import { HeaderComponent } from './components/header/header.component';


const Components = [
    HeaderComponent
];

@NgModule({
  imports: [
    Modules,
  ],
  declarations: [
    Components,
  ],
  exports: [
    Modules,
    Components,
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
