import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full"
    },
    {
        path: "inicio",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'contacto',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'habilidades',
        loadChildren: () => import('./abilities/abilities.module').then(m => m.AbilitiesModule)
    },
    {
        path: 'experiencia',
        loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
    },
    {
        path: '**',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            initialNavigation: 'enabled',
            relativeLinkResolution: 'legacy'
        })
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
