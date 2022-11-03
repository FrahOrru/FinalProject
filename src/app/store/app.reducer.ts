import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { UserI } from '../interfaces/user.interface';
import { TaskI } from '../interfaces/task.interface';

export interface State {
  users: UserI[];
  selectedUser: UserI;

  tasks: TaskI[];
  selectedTask: TaskI;
}

export const initialState: State = {
    users: [],
    selectedUser: {} as UserI,

    tasks: [],
    selectedTask: {} as TaskI
  };

  const AppReducer = createReducer(
    initialState,
    on(AppActions.login, state => ({ ...state})),
    on(AppActions.register, state => ({ ...state})),

    on(AppActions.getUser, state => ({ ...state, selectedUser: {} as UserI})),
    on(AppActions.getUserSuccess, (state, {user}) => ({ ...state, selectedUser: user})),
    on(AppActions.getUserFailed, state => ({ ...state, selectedUser: {} as UserI})),

    on(AppActions.createUser, state => ({ ...state,})),
    on(AppActions.createUserSuccess, state => ({ ...state})),
    on(AppActions.createUserFailed, state => ({ ...state})),

    on(AppActions.editUser, state => ({ ...state})),
    on(AppActions.editUserSuccess, state => ({ ...state})),
    on(AppActions.editUserFailed, state => ({ ...state})),

    on(AppActions.deleteUser, state => ({ ...state})),
    on(AppActions.deleteUserSuccess, state => ({ ...state})),
    on(AppActions.deleteUserFailed, state => ({ ...state})),

    on(AppActions.getAllUsers, state => ({ ...state, users: []})),
    on(AppActions.getAllUsersSuccess, (state, {users}) => ({ ...state, users: users})),
    on(AppActions.getAllUsersFailed, state => ({ ...state, users: []})),

    on(AppActions.getAllTaskFilter, state => ({ ...state, tasks: []})),
    on(AppActions.getAllTaskFilterSuccess, (state, {task}) => ({ ...state, tasks: task})),
    on(AppActions.getAllTaskFilterFailed, state => ({ ...state, tasks: []})),

    on(AppActions.getTask, state => ({ ...state, selectedTask: {} as TaskI})),
    on(AppActions.getTaskSuccess, (state, {task}) => ({ ...state, selectedTask: task})),
    on(AppActions.getTaskFailed, state => ({ ...state,selectedTask: {} as TaskI})),

    on(AppActions.createTask, state => ({ ...state})),
    on(AppActions.createTaskSuccess, state => ({ ...state})),
    on(AppActions.createTaskFailed, state => ({ ...state})),

    on(AppActions.editTask, state => ({ ...state})),
    on(AppActions.editTaskSuccess, state => ({ ...state})),
    on(AppActions.editTaskFailed, state => ({ ...state})),

    on(AppActions.deleteATask, state => ({ ...state})),
    on(AppActions.deleteTaskSuccess, state => ({ ...state})),
    on(AppActions.deleteTaskFailed, state => ({ ...state})),
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return AppReducer(state, action);
  }