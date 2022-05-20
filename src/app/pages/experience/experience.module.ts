import { NgModule } from '@angular/core';

import { ExperienceRouting } from './experience.routing';
import { SharedModule } from './../../shared/shared.module';

const Modules = [
    SharedModule,
    ExperienceRouting,
]

import { ExperienceComponent } from './experience.component';

const Components = [
    ExperienceComponent
]

@NgModule({
    imports: [ Modules ],
    declarations: [ Components ],
    exports: [],
    providers: [],
})
export class ExperienceModule { }