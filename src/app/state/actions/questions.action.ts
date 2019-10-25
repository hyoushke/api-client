import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IQuestion } from 'src/app/models/question.model';

//export const GET_QUESTIONS = '[QUESTIONS] Get';

export enum QuestionsActionTypes {
  ADD_QUESTIONS = '[QUESTIONS] Add',
  ADD_QUESTIONS_SUCCESS = '[QUESTIONS] Add Questions Success',
  ADD_QUESTIONS_FAILED = '[QUESTIONS] Add Questions Failed',

  EDIT_QUESTIONS = '[QUESTIONS] Edit',
  EDIT_QUESTIONS_SUCCESS = '[QUESTIONS] Edit Questions Success',
  EDIT_QUESTIONS_FAILED = '[QUESTIONS] Edit Questions Failed',

  DELETE_QUESTIONS = '[QUESTIONS] Delete',
  DELETE_QUESTIONS_SUCCESS = '[QUESTIONS] Delete Questions Success',
  DELETE_QUESTIONS_FAILED = '[QUESTIONS] Delete Questions Failed',


  GET_QUESTIONS = '[QUESTIONS] Get Questions',
  GET_QUESTIONS_SUCCESS = '[QUESTIONS] Get Questions Success',
  GET_QUESTIONS_FAILED = '[QUESTIONS] Get Questions Failed',
}

//add
export class AddQuestionsAction implements Action {
    readonly type = QuestionsActionTypes.ADD_QUESTIONS;
}

export class AddQuestionsSuccessAction implements Action {
  readonly type = QuestionsActionTypes.ADD_QUESTIONS_SUCCESS;
  constructor(public payload: Array<IQuestion>) {

  }
}

export class AddQuestionsFailedAction implements Action {
  readonly type = QuestionsActionTypes.ADD_QUESTIONS_FAILED;
  constructor(public payload: string) {

  }
}


//edit

export class EditQuestionsAction implements Action {
  readonly type = QuestionsActionTypes.EDIT_QUESTIONS;
}

export class EditQuestionsSuccessAction implements Action {
  readonly type = QuestionsActionTypes.EDIT_QUESTIONS_SUCCESS;
  constructor(public payload: Array<IQuestion>) {

  }
}

export class EditQuestionsFailedAction implements Action {
  readonly type = QuestionsActionTypes.EDIT_QUESTIONS_FAILED;
  constructor(public payload: string) {

  }
}

//delete
export class DeleteQuestionsAction implements Action {
  readonly type = QuestionsActionTypes.DELETE_QUESTIONS;
}

export class DeleteQuestionsSuccessAction implements Action {
  readonly type = QuestionsActionTypes.DELETE_QUESTIONS_SUCCESS;
  constructor(public payload: Array<IQuestion>) {

  }
}

export class DeleteQuestionsFailedAction implements Action {
  readonly type = QuestionsActionTypes.DELETE_QUESTIONS_FAILED;
  constructor(public payload: string) {

  }
}

//get
export class GetQuestionsAction implements Action {
  readonly type = QuestionsActionTypes.GET_QUESTIONS;
}

export class GetQuestionsSuccessAction implements Action {
  readonly type = QuestionsActionTypes.GET_QUESTIONS_SUCCESS;
  constructor(public payload: any) {

  }
}

export class GetQuestionsFailedAction implements Action {
  readonly type = QuestionsActionTypes.GET_QUESTIONS_FAILED;
  constructor(public payload: string) {

  }
}



export type QuestionsActions =
AddQuestionsAction | AddQuestionsSuccessAction | AddQuestionsFailedAction |
EditQuestionsAction | EditQuestionsSuccessAction | EditQuestionsFailedAction |
DeleteQuestionsAction | DeleteQuestionsSuccessAction | DeleteQuestionsFailedAction |
GetQuestionsAction | GetQuestionsSuccessAction | GetQuestionsFailedAction;
