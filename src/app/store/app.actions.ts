import { createAction, props } from '@ngrx/store';
import { TaskI } from '../interfaces/task.interface';
import { UserI } from '../interfaces/user.interface';

export const login = createAction('[Login Page] Login', props<{ username: string; password: string }>());
export const register = createAction('[Login Page] Register', props<{ user: UserI }>());

export const getUser = createAction('[USER] get user', props<{ id: number }>());
export const getUserSuccess = createAction('[USER] get user success', props<{ user: UserI }>());
export const getUserFailed = createAction('[USER] get user failed');

export const createUser = createAction('[USER] create user', props<{ user: UserI }>());
export const createUserSuccess = createAction('[USER] create user success');
export const createUserFailed = createAction('[USER] create user failed');

export const editUser = createAction('[USER] edit user', props<{ user: UserI }>());
export const editUserSuccess = createAction('[USER] edit user Success');
export const editUserFailed = createAction('[USER] edit user Failed');

export const deleteUser = createAction('[USER] delete user', props<{ id: number }>());
export const deleteUserSuccess = createAction('[USER] delete user Success');
export const deleteUserFailed = createAction('[USER] delete user Failed');

export const getAllUsers = createAction('[USER] get all user');
export const getAllUsersSuccess = createAction('[USER] get all user success', props<{ users: UserI[]}>());
export const getAllUsersFailed = createAction('[USER] get all user failed');

export const getAllTaskFilter = createAction('[TASK] get all task', props<{ filter: any }>());
export const getAllTaskFilterSuccess = createAction('[TASK] get all task Success', props<{ task: TaskI[] }>());
export const getAllTaskFilterFailed = createAction('[TASK] get all task Failed');

export const getTask = createAction('[TASK] get Task', props<{ id: number }>());
export const getTaskSuccess = createAction('[TASK] get Task success', props<{ task: TaskI }>());
export const getTaskFailed = createAction('[TASK] get Task failed');

export const createTask = createAction('[USER] create Task', props<{ task: TaskI }>());
export const createTaskSuccess = createAction('[USER] create Task success');
export const createTaskFailed = createAction('[USER] create Task failed');

export const editTask = createAction('[TASK] edit Task', props<{ user: UserI }>());
export const editTaskSuccess = createAction('[TASK] edit Task Success');
export const editTaskFailed = createAction('[TASK] edit Task Failed');

export const deleteATask = createAction('[TASK] delete task', props<{ id: number }>());
export const deleteTaskSuccess = createAction('[TASK] delete task Success');
export const deleteTaskFailed = createAction('[TASK] delete task Failed');

