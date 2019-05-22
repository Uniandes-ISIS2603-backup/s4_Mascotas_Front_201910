import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ArticuloService} from '../articulo.service';
import {ToastrService} from 'ngx-toastr';
import { Articulo } from '../articulo';
import { UsuarioService } from '../../usuario/usuario.service';
import {Usuario} from '../../usuario/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

  constructor(private articuloService:ArticuloService, 
              private toastrService: ToastrService, 
              private usuarioService:UsuarioService, 
              private router: Router
  )  {}

  /**
   * Nuevo articulo a crear
   */
  articulo : Articulo;

  /**
   * Todos los usuarios 
   */
  usuarios : Usuario[];

  /**
    * Recupera la lista de todos los usuarios
    */
   getUsuarios(): void {
    this.usuarioService.getUsuarios()
        .subscribe(u => {
            this.usuarios = u;
        }, err => {
          this.toastrService.error(err, 'Error');
      });
}

  /**
  * Output que le dice al componente que el usuario ha creado un nuevo articulo
  */
 @Output() create = new EventEmitter();


  /**
   * Output que le dice al componente que el usuario no desea continuar creando un articulo
   */
  @Output() cancel = new EventEmitter();


  crearArticulo() : Articulo
  {
      this.articuloService.crearArticulo(this.articulo)
          .subscribe((m) => {
          this.articulo = m;
          this.create.emit();
          this.router.navigate(['/articulos/' + this.articulo.id]);
          this.toastrService.success("El artículo ha sido creado", "Artículo Creado");
    });
      console.log(this.articulo);
      return this.articulo;
  }

  cancelCreation() : void
  {
      this.cancel.emit();
  }

  ngOnInit(): void 
  { 
      this.articulo = new Articulo();
      this.articulo.autor = new Usuario();
      this.getUsuarios();
  }
}
