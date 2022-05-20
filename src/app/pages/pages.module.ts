import { NgModule } from "@angular/core"
import { SharedModule } from "./../shared/shared.module"

const Modules = [
	SharedModule,
];

import { HomeModule } from './home/home.module';
import { AbilitiesModule } from './abilities/abilities.module';
import { ContactModule } from './contact/contact.module';
import { ExperienceModule } from './experience/experience.module';

const PagesModules = [
    HomeModule,
    AbilitiesModule,
    ContactModule,
    ExperienceModule
]

@NgModule({
  imports: [
    Modules,
    PagesModules,
  ],
  declarations: [],
  exports: [
    PagesModules
  ],
  providers: [],
})
export class PagesModule { }