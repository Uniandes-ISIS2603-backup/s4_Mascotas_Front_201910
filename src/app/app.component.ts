import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import {UsuarioService} from './usuario/usuario.service';
import { Router } from '@angular/router';
/**
 * The app component. This component is the base of s4_mascotas-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;
    usr:String;
    
    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "HELPET";
        this.authService.start();
    }

       /**
     * @ignore
     */
    constructor(private authService: UsuarioService, private router: Router ) { }

    logout(): void {
        this.authService.logout()
    }

    usuarAc():void{
       this.usr = localStorage.getItem('idUsr');
         this.router.navigateByUrl(`/usuario/${this.usr}`);
    }

    
}





