import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UsuarioModel } from '../models/UsuarioModel';
import { Inject } from '@angular/core';

@Inject({
  provideIn: 'root'
})
export class UsuarioService {

  private readonly URL = 'http://localhost:3000/usuarios';


  constructor(private htpp: HttpClient, private headers:HttpHeaders) {
    headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  getUsuarios(){
    return this.htpp.get(this.URL);
  }

  getUsuario(id: number){
    return this.htpp.get(`this.URL${id}`);
  }

  addUsuario(usuario: UsuarioModel){
    return this.htpp.post(this.URL,JSON.stringify(usuario), {headers: this.headers});
  }

  updateUsuario(usuario: UsuarioModel){
    return this.htpp.post(`this.URL${usuario.id}`,JSON.stringify(usuario), {headers: this.headers});
  }

  deleteUsuario(id: number){
    return this.htpp.delete(`this.URL${id}`, {headers: this.headers})
  }

}
