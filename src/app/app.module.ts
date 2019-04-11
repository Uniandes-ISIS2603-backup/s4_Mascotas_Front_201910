import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import { MascotaExtraviadaModule } from './mascota-extraviada/mascota-extraviada.module';
import { RecompensaModule } from './recompensa/recompensa.module';
import {MascotaModule} from './mascota/mascota.module';
import { MascotaAdopcionModule } from './mascota-adopcion/mascota-adopcion.module';
import { HomeComponent } from './home/home.component';
import { ArticuloModule } from './articulo/articulo.module';
import { EventoModule } from './evento/evento.module';
import {MascotaEncontradaModule} from './mascota-encontrada/mascota-encontrada.module';
import {CalificacionModule} from  './calificacion/calificacion.module';

import {UsuarioModule} from './usuario/usuario.module'
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        MascotaExtraviadaModule,
        RecompensaModule,
        MascotaModule,
        MascotaAdopcionModule,
        RecompensaModule,
        ArticuloModule,
        EventoModule,
        MascotaEncontradaModule,
        UsuarioModule,
        CalificacionModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
