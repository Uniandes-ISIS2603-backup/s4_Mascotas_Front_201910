import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { MascotaExtraviadaListComponent } from '../mascota-extraviada/mascota-extraviada-list/mascota-extraviada-list.component';
import { MascotaExtraviadaDetailComponent } from '../mascota-extraviada/mascota-extraviada-detail/mascota-extraviada-detail.component';
import { RecompensaListComponent } from '../recompensa/recompensa-list/recompensa-list.component';
import { RecompensaDetailComponent } from '../recompensa/recompensa-detail/recompensa-detail.component';
import { MascotaAdopcionListComponent } from '../mascota-adopcion/mascota-adopcion-list/mascota-adopcion-list.component';
import { MascotaAdopcionDetailComponent } from '../mascota-adopcion/mascota-adopcion-detail/mascota-adopcion-detail.component';

const routes: Routes = [
    
     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: 'mascotas-extraviadas',
        children: [
            {
                path: 'list',
                component: MascotaExtraviadaListComponent
            },
            {
                path: ':id',
                component: MascotaExtraviadaDetailComponent
            }

        ]
        
    },{
        path: 'mascotas-adopcion',
        children:[
            {
                path:'list',
                component: MascotaAdopcionListComponent
            },{
                path: 'id',
                component: MascotaAdopcionDetailComponent
            }
        ]

    },
    {
        path: 'recompensas',
        children: [
            {
                path: 'list',
                component: RecompensaListComponent
            },
            {
                path: ':id',
                component: RecompensaDetailComponent
            }

        ]
        
    },
    {
        path: '**',
        redirectTo: 'home',
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
