import { createAction, props } from "@ngrx/store";
import { UsuarioModel } from "src/app/models/UsuarioModel";

export const enum usuarioTypeAction {
  LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD_USUARIOS',
  LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS] LOAD_USUARIOS_SUCCESS',
  LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS] LOAD_USUARIOS_FAIL',

  LOAD_USUARIO = '[LOAD_USUARIO] LOAD_USUARIO',
  LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] LOAD_USUARIO_SUCCESS',
  LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD_USUARIO_FAIL',

  CREATE_USUARIO = '[CREATE_USUARIO] CREATE_USUARIO',
  CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] CREATE_USUARIO_SUCCESS',
  CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] CREATE_USUARIO_FAIL',

  UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE_USUARIO',
  UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] UPDATE_USUARIO_SUCCESS',
  UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] UPDATE_USUARIO_FAIL',

  DELETE_USUARIO = '[DELETE_USUARIO] DELETE_USUARIO',
  DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] DELETE_USUARIO_SUCCESS',
  DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] DELETE_USUARIO_FAIL',
}

// Load Usuarios
export const LoadUsuarios = createAction(
  usuarioTypeAction.LOAD_USUARIOS
);

export const LoadUsuariosSuccess = createAction(
  usuarioTypeAction.LOAD_USUARIOS_SUCCESS,
  props<{payload: UsuarioModel[]}>()
);

export const LoadUsuariosFail = createAction(
  usuarioTypeAction.LOAD_USUARIOS_FAIL,
  props<{error: string}>()
);

// Load Usuario
export const LoadUsuario = createAction(
  usuarioTypeAction.LOAD_USUARIO,
  props<{payload: number}>()
);

export const LoadUsuarioSuccess = createAction(
  usuarioTypeAction.LOAD_USUARIO_SUCCESS,
  props<{payload: UsuarioModel}>()
);

export const LoadUsuarioFail = createAction(
  usuarioTypeAction.LOAD_USUARIO_FAIL,
  props<{error: string}>()
);

// Create Usuario
export const CreateUsuario = createAction(
  usuarioTypeAction.CREATE_USUARIO,
  props<{payload: UsuarioModel}>()
);

export const CreateUsuarioSuccess = createAction(
  usuarioTypeAction.CREATE_USUARIO_SUCCESS,
  props<{payload: UsuarioModel}>()
);

export const CreateUsuarioFail = createAction(
  usuarioTypeAction.CREATE_USUARIO_FAIL,
  props<{error: string}>()
);

//Update Usuario
export const UpdateUsuario = createAction(
  usuarioTypeAction.UPDATE_USUARIO,
  props<{payload: UsuarioModel}>()
);

export const UpdateUsuarioSuccess = createAction(
  usuarioTypeAction.UPDATE_USUARIO_SUCCESS,
  props<{payload: UsuarioModel}>()
);

export const UpdateUsuarioFail = createAction(
  usuarioTypeAction.UPDATE_USUARIO_FAIL,
  props<{error: string}>()
);

// Delete usuario
export const DeleteUsuario = createAction(
  usuarioTypeAction.DELETE_USUARIO,
  props<{payload: number}>()
);

export const DeleteUsuarioSuccess = createAction(
  usuarioTypeAction.DELETE_USUARIO_SUCCESS,
  props<{payload: number}>()
);

export const DeleteUsuarioFail = createAction(
  usuarioTypeAction.DELETE_USUARIO_FAIL,
  props<{error: string}>()
);
