import { Component, OnInit } from '@angular/core';
import { props, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { AppState } from 'src/app/store/app.state';
import * as fromUsuariosSelector from '../../store/usuarios/usuarios.reducer';


@Component({
  selector: 'app-lista-usuarios-admin',
  templateUrl: './lista-usuarios-admin.component.html',
  styleUrls: ['./lista-usuarios-admin.component.scss']
})
export class ListaUsuariosAdminComponent implements OnInit {

  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuariosAdministradores);

  listaUsuariosByPerfil$ :Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarioByPerfil, {perfil: 'Dona'});


  constructor(
    private store: Store<AppState>)
  {}


  ngOnInit(): void {

  }

}
