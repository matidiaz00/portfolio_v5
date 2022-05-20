import { NgModule } from '@angular/core';

import { AbilitiesRouting } from './abilities.routing';
import { SharedModule } from './../../shared/shared.module';

const Modules = [
    SharedModule,
    AbilitiesRouting,
]

import { AbilitiesComponent } from './abilities.component';

const Components = [
    AbilitiesComponent
]

@NgModule({
    imports: [ Modules ],
    declarations: [ Components ],
    exports: [],
    providers: [],
})
export class AbilitiesModule { }