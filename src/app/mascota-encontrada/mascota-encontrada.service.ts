import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MascotaEncontrada } from './mascota-encontrada';

const API_URL = "http://localhost:8080/s4_mascotas-api/api/procesosMascotaEncontrada"

/**
 * El proveedor de servicios de todo lo relacionado
 * con los procesos de mascota encontrada
 */
@Injectable({
  providedIn: 'root'
})
export class MascotaEncontradaService 
{

}