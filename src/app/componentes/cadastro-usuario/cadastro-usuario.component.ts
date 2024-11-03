import { Store } from '@ngrx/store';
import { UsuarioModel } from './../../models/UsuarioModel';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import * as fromUsuariosAction from '../../store/usuarios/usuarios.actions';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  model: UsuarioModel = {id: 0, nome: '', idade: 0, perfil:''}

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }

  addUsuario() {
    this.store.dispatch(fromUsuariosAction.CreateUsuario({payload: this.model}));
  }

}
