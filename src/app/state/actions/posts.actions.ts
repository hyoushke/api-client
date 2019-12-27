import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { IPosts } from 'src/app/models/posts.model';


export enum PostsActionTypes {
  ADD_POSTS = '[POSTS] Add',
  ADD_POSTS_SUCCESS = '[POSTS] Add Posts Success',
  ADD_POSTS_FAILED = '[POSTS] Add Posts Failed',

  EDIT_POSTS = '[POSTS] Edit',
  EDIT_POSTS_SUCCESS = '[POSTS] Edit Posts Success',
  EDIT_POSTS_FAILED = '[POSTS] Edit Posts Failed',

  DELETE_POSTS = '[POSTS] Delete',
  DELETE_POSTS_SUCCESS = '[POSTS] Delete Posts Success',
  DELETE_POSTS_FAILED = '[POSTS] Delete Posts Failed',


  GET_POSTS = '[POSTS] Get Questions',
  GET_POSTS_SUCCESS = '[POSTS] Get Posts Success',
  GET_POSTS_FAILED = '[POSTS] Get Posts Failed',

  SELECT_POSTS = '[POSTS] Select Posts',
}

//add
export class AddPostsAction implements Action {
    readonly type = PostsActionTypes.ADD_POSTS;
    constructor(public payload: any) {
      console.log('AddPostsAction');
      console.log(payload);
    }

}

export class AddPostsSuccessAction implements Action {
  readonly type = PostsActionTypes.ADD_POSTS_SUCCESS;
  constructor(public payload: any) {
    console.log('success');
  }
}

export class AddPostsFailedAction implements Action {
  readonly type = PostsActionTypes.ADD_POSTS_FAILED;
  constructor(public payload: any) {

  }
}


//edit

export class EditPostsAction implements Action {
  readonly type = PostsActionTypes.EDIT_POSTS;
  constructor(public payload: any) {

  }
}

export class EditPostsSuccessAction implements Action {
  readonly type = PostsActionTypes.EDIT_POSTS_SUCCESS;
  constructor(public payload: any) {

  }
}

export class EditPostsFailedAction implements Action {
  readonly type = PostsActionTypes.EDIT_POSTS_FAILED;
  constructor(public payload: string) {

  }
}

//delete
export class DeletePostsAction implements Action {
  readonly type = PostsActionTypes.DELETE_POSTS;
  constructor(public payload: any) {
    console.log('DeletePostsAction GOT ');
    console.log(payload);
  }
}

export class DeletePostsSuccessAction implements Action {
  readonly type = PostsActionTypes.DELETE_POSTS_SUCCESS;
  constructor(public payload: any) {

  }
}

export class DeletePostsFailedAction implements Action {
  readonly type = PostsActionTypes.DELETE_POSTS_FAILED;
  constructor(public payload: string) {

  }
}

//get
export class GetPostsAction implements Action {
  readonly type = PostsActionTypes.GET_POSTS;
  constructor(public payload: any) {

  }
}

export class GetPostsSuccessAction implements Action {
  readonly type = PostsActionTypes.GET_POSTS_SUCCESS;
  constructor(public payload: any) {

  }
}

export class GetPostsFailedAction implements Action {
  readonly type = PostsActionTypes.GET_POSTS_FAILED;
  constructor(public payload: string) {

  }
}

//select
export class SelectPostsAction implements Action {
  readonly type = PostsActionTypes.SELECT_POSTS;
  constructor(public payload: any) {

  }
}



export type PostsActions =
AddPostsAction | AddPostsSuccessAction | AddPostsFailedAction |
EditPostsAction | EditPostsSuccessAction | EditPostsFailedAction |
DeletePostsAction | DeletePostsSuccessAction | DeletePostsFailedAction |
GetPostsAction | GetPostsSuccessAction | GetPostsFailedAction | SelectPostsAction;
