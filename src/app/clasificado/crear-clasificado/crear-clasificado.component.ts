import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Clasificado } from '../clasificado';
import { ClasificadoService } from '../clasificado.service';
import {ToastrService} from 'ngx-toastr';
import { UsuarioService } from '../../usuario/usuario.service';
import {Usuario} from '../../usuario/usuario';
import {Router} from '@angular/router'

@Component({
  selector: 'app-crear-clasificado',
  templateUrl: './crear-clasificado.component.html',
  styleUrls: ['./crear-clasificado.component.css']
})
export class CrearClasificadoComponent implements OnInit {

  constructor(private clasificadoService:ClasificadoService, private toastrService: ToastrService,
    private usuarioService:UsuarioService, private router: Router) { }

  /**
   * Nuevo clasificado a crear
   */
  clasificado : Clasificado;

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
  * Output que le dice al componente que el usuario ha creado un nuevo evento
  */
 @Output() create = new EventEmitter();
 
  /**
   * Output que le dice al componente que el usuario no desea continuar creando un evento
   */
  @Output() cancel = new EventEmitter();

/**
   * Crear un clasificado
   */
  crearClasificado() : Clasificado
  {
      console.log(this.clasificado);

      this.clasificadoService.crearClasificado(this.clasificado)
          .subscribe((m)=>{
          this.clasificado = m;
          this.create.emit();
          this.router.navigate(['/clasificados/' + this.clasificado.id]);
          this.toastrService.success("El clasificado ha sido creado", "Clasificado Creado");
         });
      return this.clasificado;
  }


  cancelCreation() : void
  {
      this.cancel.emit();
      this.toastrService.warning('No se creó el clasificado', 'Creación Cancelada');
  }

  changeListener($clasificado) : void 
  {
      this.readThis($clasificado.target);
  }

     /**
     * Lee el archivo pasado por parámetro 
     * @param inputValue 
     */
    readThis(inputValue: any): void 
    {
        var file:File = inputValue.files[0];
        var myReader:FileReader = new FileReader();
    
        myReader.readAsDataURL(file);
    }

  ngOnInit() {
    this.clasificado = new Clasificado();
    this.clasificado.autor = new Usuario();
    this.getUsuarios();
  }

}
