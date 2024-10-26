import { LoadUsuarios, UpdateUsuarioFail } from './usuarios.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { UsuarioService } from 'src/app/services/UsuarioService';
import * as fromUsuariosAction from "./usuarios.actions";
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

  constructor(private actions$: Actions, private usuariosService: UsuarioService) {

  }

  loadUsuarios$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(fromUsuariosAction.usuarioTypeAction.LOAD_USUARIOS),
          exhaustMap(() => this.usuariosService.getUsuarios()
            .pipe(
              map(payload =>
                fromUsuariosAction.LoadUsuariosSuccess({payload}),
                catchError(error => of(fromUsuariosAction.LoadUsuariosFail({error})))
              )
            )
          )
        )
  )

  loadUsuario$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosAction.usuarioTypeAction.LOAD_USUARIO),
        exhaustMap((record: any) => this.usuariosService.getUsuario(record.payload)
          .pipe(
            map(payload =>
              fromUsuariosAction.LoadUsuarioSuccess({payload}),
              catchError(error => of(fromUsuariosAction.LoadUsuarioFail({error})))
            )
          )
        )
      )
  )


  createUsuario$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosAction.usuarioTypeAction.CREATE_USUARIO),
        exhaustMap((record: any) => this.usuariosService.addUsuario(record.payload)
          .pipe(
            map(payload =>
              fromUsuariosAction.CreateUsuarioSuccess({payload}),
              catchError(error => of(fromUsuariosAction.CreateUsuarioFail({error})))
            )
          )
        )
      )
  )


  updateUsuario$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosAction.usuarioTypeAction.UPDATE_USUARIO),
        exhaustMap((record: any) => this.usuariosService.updateUsuario(record.payload)
          .pipe(
            map(payload =>
              fromUsuariosAction.UpdateUsuarioSuccess({payload}),
              catchError(error => of(fromUsuariosAction.UpdateUsuarioFail({error})))
            )
          )
        )
      )
  )

  deleteUsuario$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosAction.usuarioTypeAction.DELETE_USUARIO),
        exhaustMap((record: any) => this.usuariosService.deleteUsuario(record.payload)
          .pipe(
            map(() =>
              fromUsuariosAction.DeleteUsuarioSuccess({ payload: record.payload }),
              catchError(error => of(fromUsuariosAction.DeleteUsuarioFail({error})))
            )
          )
        )
      )
  )

}
