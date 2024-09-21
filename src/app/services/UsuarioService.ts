import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UsuarioModel } from '../models/UsuarioModel';
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class UsuarioService {

  private readonly URL = 'http://localhost:3000/usuarios';
  headers = new HttpHeaders();

  constructor(private htpp: HttpClient) {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  getUsuarios(){
    return this.htpp.get<UsuarioModel[]>(this.URL);
  }

  getUsuario(id: number){
    return this.htpp.get<UsuarioModel>(`this.URL${id}`);
  }

  addUsuario(usuario: UsuarioModel){
    return this.htpp.post<UsuarioModel>(this.URL,JSON.stringify(usuario), {headers: this.headers});
  }

  updateUsuario(usuario: UsuarioModel){
    return this.htpp.post<UsuarioModel>(`this.URL${usuario.id}`,JSON.stringify(usuario), {headers: this.headers});
  }

  deleteUsuario(id: number){
    return this.htpp.delete<UsuarioModel>(`this.URL${id}`, {headers: this.headers})
  }

}
