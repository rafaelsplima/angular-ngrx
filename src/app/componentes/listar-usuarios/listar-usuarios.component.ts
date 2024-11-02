import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './../../models/UsuarioModel';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import * as fromUsuariosAction from '../../store/usuarios/usuarios.actions';
import * as fromUsuariosSelector from '../../store/usuarios/usuarios.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent {

  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarios);

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());
  }



}
