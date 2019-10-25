import { Action } from '@ngrx/store';
import { IQuestion } from 'src/app/models/question.model';
import { QuestionsActionTypes, QuestionsActions } from 'src/app/state/actions/questions.action';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { QuestionsEffects } from '../effects/questions.effects';


export interface QuestionsState {
  list: IQuestion[];
  loading: boolean;
  error: Error;
}

//const initialState: IQuestion = {scenarioid: '',
//                                 questions: [{layer: {color: 'red', volume: ''}}] };

const initialState: QuestionsState = {
  list: [{scenarioid: '', questions: [{layer: {color: 'red', volume: ''}}] }],
  loading: false,
  error: undefined
};

export function questionReducer(state: QuestionsState = initialState, action: QuestionsActions) {

    switch (action.type) {
      case QuestionsActionTypes.ADD_QUESTIONS_SUCCESS:
        return {...state, list: action.payload, loading: false };

      case QuestionsActionTypes.DELETE_QUESTIONS_SUCCESS:
        return {...state, list: action.payload, loading: false };

      case QuestionsActionTypes.EDIT_QUESTIONS_SUCCESS:
        return {...state, list: action.payload, loading: false };

      case QuestionsActionTypes.EDIT_QUESTIONS_SUCCESS:
        return {...state, list: action.payload, loading: false };

       default:
          return state;
    }

}
