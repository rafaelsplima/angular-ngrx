import { Action, createReducer, on } from "@ngrx/store";
import { UsuarioModel } from "src/app/models/UsuarioModel";
import * as fromUsuariosAction from "../usuarios/usuarios.actions"

export interface UsuariosState {
  usuarios: UsuarioModel[];
  usuario: UsuarioModel | null,
  error: string | ''
}

export const initialState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: ''
}

const _usuariosReducer = createReducer(
  initialState,
  on(fromUsuariosAction.LoadUsuariosSuccess, (state, { payload }) => ({...state, usuarios: payload, erro: ''})),
  on(fromUsuariosAction.LoadUsuariosFail, (state, { error }) => ({...state, erro: error})),

  on(fromUsuariosAction.LoadUsuarioSuccess, (state, { payload }) => ({...state, usuario: payload, erro: ''})),
  on(fromUsuariosAction.LoadUsuarioFail, (state, { error }) => ({...state, erro: error})),

  on(fromUsuariosAction.CreateUsuarioSuccess, (state, { payload }) => ({...state, usuarios: [...state.usuarios, payload], erro: ''})),
  on(fromUsuariosAction.CreateUsuarioFail, (state, { error }) => ({...state, erro: error})),

  on(fromUsuariosAction.UpdateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].map((row) => {
      if(row.id == payload.id) {
        return payload;
      } else {
        return row
      }
    }),
    erro: ''})),
  on(fromUsuariosAction.UpdateUsuarioFail, (state, { error }) => ({...state, erro: error})),


  on(fromUsuariosAction.DeleteUsuario, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((filter) => filter.id != payload),
    erro: ''})),
  on(fromUsuariosAction.DeleteUsuarioFail, (state, { error }) => ({...state, erro: error})),
 )


export function usuariosReducer(state = initialState, action: Action) {
  return _usuariosReducer(state, action)
}
