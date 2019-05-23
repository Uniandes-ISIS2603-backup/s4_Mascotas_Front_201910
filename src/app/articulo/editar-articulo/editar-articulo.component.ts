import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {ArticuloService} from '../articulo.service';
import {UsuarioService} from '../../usuario/usuario.service';
import {Articulo} from '../articulo';
import {Usuario} from '../../usuario/usuario';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit {

  constructor(
    private articuloService: ArticuloService,
    private usuarioService: UsuarioService,
    private router: Router,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

    /**
    * El articulo que se va a actualizar
    */
  articulo: Articulo


  /**
    * Lista de todos los usuarios
    */
   usuarios: Usuario[];

   /**
    * Id para editar articulo
    * This is passed as a parameter by the parent component
    */
   @Input() articulo_id: number;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create an editorial
   */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new editorial
   */
   @Output() update = new EventEmitter();

 /**
    * Informacion del articulo que se va a actualizar
    */
   getArticulo(): void {
    this.articuloService.getArticuloDetail(this.articulo_id)
    .subscribe(articulo => {
        this.articulo = articulo;
    });
}

  /**
    * Recupera la lista de todos los usuarios
    */
   getUsuarios(): void {
    this.usuarioService.getUsuarios()
        .subscribe(u => {
            this.usuarios = u;
        });
}

  /**
    * Cancela edicion del articulo
    */
   cancelEdition(): void {
    this.cancel.emit();
    this.toastrService.warning('El articulo no se edito', 'Edicion de articulo');
    this.router.navigate(['/articulos/list']);
}

/**
    * Actualizar el articulo
    */
   updateArticulo(): void {
    this.articuloService.updateArticulo(this.articulo)
        .subscribe(() => {
            this.update.emit();
            this.router.navigate(['/articulos/' + this.articulo.id]);
            this.toastrService.success("Se actualizo satisfactoriamente el articulo", 'Articulo actualizado');
        });
}

/**
* Método que inicializa el componente
*/
  ngOnInit() {
    this.articulo_id = +this.route.snapshot.paramMap.get('id');
    this.getArticulo();
    this.getUsuarios();
  }

   /**
    * The function which is called every time the user chooses to edit
    */
   ngOnChanges() {
    this.ngOnInit();
}

}
