import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../usuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private route:ActivatedRoute,private usuarioService: UsuarioService) { }

  usuarioDetalle:Usuario;

  idUsuario: number;

  /**
   * 
   * @param id 
   */
  getUsuarioDetalle(id:number):void{
    this.usuarioService.getUsuarioDetail(id).subscribe(
      usr => this.usuarioDetalle=usr)
  }




  ngOnInit() {
    const usuarioId= parseInt(this.route.snapshot.paramMap.get('id'))
    this.getUsuarioDetalle(usuarioId);
    console.log(this.usuarioDetalle);
    
  
  }
}
