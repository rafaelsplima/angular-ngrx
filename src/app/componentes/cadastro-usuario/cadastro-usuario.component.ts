import { UsuarioModel } from './../../models/UsuarioModel';
import { UsuarioService } from './../../services/UsuarioService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  model: UsuarioModel = {id: 0, nome: '', idade: 0, perfil:''}

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
  }

  addUsuario() {
    this.usuarioService.addUsuario(this.model).subscribe();
  }

}
