import { Action } from '@ngrx/store';
import { IPosts } from 'src/app/models/posts.model';
import { PostsActionTypes, PostsActions } from 'src/app/state/actions/posts.actions';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostsEffects } from '../effects/posts.effects';


export interface NavigationsState {
  list: any;
  loading: boolean;
  error: Error;
}


const initialState: NavigationsState = {
  list: undefined,
  loading: false,
  error: undefined
};

export function navigationsReducer(state: NavigationsState = initialState, action: PostsActions) {


    switch (action.type) {
      //case PostsActionTypes.ADD_POSTS_SUCCESS:
      //  return {...state, postResponse: action.payload, loading: false };

      //case PostsActionTypes.DELETE_POSTS_SUCCESS:
      //  return {...state, list: action.payload, loading: false };

      //case PostsActionTypes.EDIT_POSTS_SUCCESS:
      //  return {...state, list: action.payload, loading: false };

      //case PostsActionTypes.GET_POSTS_SUCCESS:
      //  return {...state, list: action.payload, loading: false };

       default:
          return state;
    }

}
