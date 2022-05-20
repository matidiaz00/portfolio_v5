import { NgModule } from '@angular/core';

import { ContactRouting } from './contact.routing';
import { SharedModule } from './../../shared/shared.module';

const Modules = [
    SharedModule,
    ContactRouting,
]

import { ContactComponent } from './contact.component';

const Components = [
    ContactComponent
]

@NgModule({
    imports: [ Modules ],
    declarations: [ Components ],
    exports: [],
    providers: [],
})
export class ContactModule { }