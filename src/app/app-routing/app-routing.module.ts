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
import { MascotaListComponent } from '../mascota/mascota-list/mascota-list.component';
import { MascotaDetailComponent } from '../mascota/mascota-detail/mascota-detail.component';
import { MascotaAdopcionListComponent } from '../mascota-adopcion/mascota-adopcion-list/mascota-adopcion-list.component';
import { MascotaAdopcionDetailComponent } from '../mascota-adopcion/mascota-adopcion-detail/mascota-adopcion-detail.component';
import {HomeComponent} from '../home/home.component';
import {MascotaCreateComponent} from '../mascota/mascota-create/mascota-create.component';
import {ListarArticuloComponent} from '../articulo/listar-articulo/listar-articulo.component';
import {ArticuloDetailComponent} from '../articulo/articulo-detail/articulo-detail.component';
import {CrearArticuloComponent} from '../articulo/crear-articulo/crear-articulo.component';
import {ListarEventoComponent} from '../evento/listar-evento/listar-evento.component';
import {EventoDetailComponent} from '../evento/evento-detail/evento-detail.component';
import { CrearEventoComponent } from '../evento/crear-evento/crear-evento.component';
import {MascotaEncontradaListComponent} from '../mascota-encontrada/mascota-encontrada-list/mascota-encontrada-list.component';
import {MascotaEncontradaDetailComponent} from '../mascota-encontrada/mascota-encontrada-detail/mascota-encontrada-detail.component';
import {MascotaEncontradaCreateComponent} from '../mascota-encontrada/mascota-encontrada-create/mascota-encontrada-create.component';
import { MascotaAdopcionCreateComponent } from '../mascota-adopcion/mascota-adopcion-create/mascota-adopcion-create.component';


import {UsuarioListaComponent} from '../usuario/usuario-lista/usuario-lista.component';
import {UsuarioDetalleComponent} from '../usuario/usuario-detalle/usuario-detalle.component';
import { CalificacionCreateComponent } from '../calificacion/calificacion-create/calificacion-create.component';
import { MascotaExtraviadaCreateComponent } from '../mascota-extraviada/mascota-extraviada-create/mascota-extraviada-create.component';
import { RecompensaCreateComponent } from '../recompensa/recompensa-create/recompensa-create.component';
import {CrearUsuarioComponent} from '../usuario/crear-usuario/crear-usuario.component';
import { EditarArticuloComponent } from '../articulo/editar-articulo/editar-articulo.component';
import { CalificacionDetailComponent } from '../calificacion/calificacion-detail/calificacion-detail.component';
import { EditarEventoComponent } from '../evento/editar-evento/editar-evento.component';
import { ClasificadoDetailComponent } from '../clasificado/clasificado-detail/clasificado-detail.component';
import { CrearClasificadoComponent } from '../clasificado/crear-clasificado/crear-clasificado.component';
import { ListarClasificadoComponent } from '../clasificado/listar-clasificado/listar-clasificado.component';
import { ListarBusquedaComponent } from '../buscar/listar-busqueda/listar-busqueda.component';
import { UsuarioLoginComponent } from '../usuario/usuario-login/usuario-login.component';

const routes: Routes = [
    
     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: UsuarioLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: CrearUsuarioComponent,
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
        component: HomeComponent
    },
    {
        path : 'login',
        component : UsuarioLoginComponent
    },
    {
        path: 'mascotas-extraviadas',
        children: [
            {
                path: 'list',
                component: MascotaExtraviadaListComponent
            },
            {
                path: 'nuevo',
                component: MascotaExtraviadaCreateComponent
            },
            {
                path: ':id',
                component: MascotaExtraviadaDetailComponent
            }

        ]
        
    },
    {
        path: 'mascotas-adopcion',
        children:
        [
            {
                path:'list',
                component: MascotaAdopcionListComponent
            },
            {
                path: 'nuevo',
                component: MascotaAdopcionCreateComponent,
                children:
                [
                {   path: 'nueva-mascota',
                    component: MascotaCreateComponent
                }
                ]
            },
            {
                path: ':id',
                component: MascotaAdopcionDetailComponent
            }
        ]
    },
    {
        path: 'calificaciones',
        children:[
            {
                path: 'create-calificacion',
                component: CalificacionCreateComponent
            },{
                path: ':id',
                component: CalificacionDetailComponent
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
              path: 'nuevo',
              component: RecompensaCreateComponent
            },
            {
                path: ':id',
                component: RecompensaDetailComponent
            }

        ]
        
    },
    {
        path : 'mascotas',
        children: [
            {
                path: 'list',
                component: MascotaListComponent
            },
            {
                path : 'nueva',
                component: MascotaCreateComponent
            },
            {
                path: ':id',
                component:MascotaDetailComponent
            }
        ]
    },
    {
        path: 'articulos',
        children: [
            {
                path: 'list',
                component: ListarArticuloComponent
            },
            {
                path : 'crear',
                component: CrearArticuloComponent
            },
            {
                path: ':id',
                component: ArticuloDetailComponent
            },
            {
                path: ':id/editar',
                component: EditarArticuloComponent
            }
        ]
        
    },{
        path: 'eventos',
        children:[
            {
                path:'list',
                component: ListarEventoComponent
            },
            {
                path : 'crear',
                component: CrearEventoComponent
            },
            {
                path: ':id',
                component: EventoDetailComponent
            }
            ,
            {
                path: ':id/editar',
                component: EditarEventoComponent
            }
        ]
    },{
        path: 'clasificados',
        children:[
            {
                path:'list',
                component: ListarClasificadoComponent
            },
            {
                path : 'crear',
                component: CrearClasificadoComponent
            },
            {
                path: ':id',
                component: ClasificadoDetailComponent
            }
        ]
    },{
        path: 'buscar',
        children:[
            {
                path: ':busq',
                component: ListarBusquedaComponent
            }
        ]
    },{
        path : 'mascotas-encontradas',
        children : [
            {
                path : 'list',
                component : MascotaEncontradaListComponent
            },
            {
                path: 'nuevo',
                component : MascotaEncontradaCreateComponent,
           //     canActivate: [NgxPermissionsGuard],
            //    data: {
            //        permissions: {
            //            only: ['CLIENT','ADMIN']
           //         }
           //     }
            },
            {
                path : ':id',
                component : MascotaEncontradaDetailComponent
            } 
        ]
    },
    {
        path:'usuario',
        children:[
            {
                path:'crear',
                component:CrearUsuarioComponent 
            },
            {
                path:'list',
                component: UsuarioListaComponent
            },
            {
                path:':id',
                component: UsuarioDetalleComponent
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
