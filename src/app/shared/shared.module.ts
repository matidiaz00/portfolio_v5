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
import { MainBoxComponent } from './components/main-box/main-box.component';
import { MobileModalComponent } from './components/mobile-modal/mobile-modal.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';

const Components = [
    HeaderComponent,
    MainBoxComponent,
    MobileModalComponent,
    MobileNavComponent
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
