import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './app.reducer';
 
export const getState = createFeatureSelector<State>('app')

export const getUserSelector = createSelector(
    getState,
    (state: State) => state.selectedUser
  );

  export const getAllUserSelector = createSelector(
    getState,
    (state: State) => state?.users
  );
  
export const getTaskSelector = createSelector(
    getState,
    (state: State) => state.selectedTask
  );

  export const getTaskFilteredSelector = createSelector(
    getState,
    (state: State) => state.tasks
  );