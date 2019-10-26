import { Action } from '@ngrx/store';
import { IPosts } from 'src/app/models/posts.model';
import { PostsActionTypes, PostsActions } from 'src/app/state/actions/posts.actions';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostsEffects } from '../effects/posts.effects';


export interface UsersState {
  list: any;
  loading: boolean;
  error: Error;
}


const initialState: UsersState = {
  list: undefined,
  loading: false,
  error: undefined
};

export function usersReducer(state: UsersState = initialState, action: PostsActions) {


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
