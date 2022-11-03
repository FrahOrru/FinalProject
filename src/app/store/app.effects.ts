import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect} from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AppService } from '../app.service';
import * as AppAction from './app.actions'
 
@Injectable()
export class AppEffects {

  getAllUsers$ = createEffect(() => this.actions$
  .pipe(
    ofType(AppAction.getAllUsers),
    mergeMap(() => this.appService.getAllUser()
      .pipe(
        map((users: any) => (AppAction.getAllUsersSuccess({users: users}))),
        catchError(() => of(AppAction.getAllUsersFailed()))
      ))));
 
  createUser$ = createEffect(() => this.actions$
  .pipe(
    ofType(AppAction.createUser),
    mergeMap(({user}) => this.appService.createUser({
      ...user
    })
      .pipe(
        map((users: any) => (AppAction.createUserSuccess())),
        catchError(() => of(AppAction.createUserFailed()))
      ))));

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}
}