import { Action } from '@ngrx/store';
import { IPosts } from 'src/app/models/posts.model';
import { PostsActionTypes, PostsActions } from 'src/app/state/actions/posts.actions';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostsEffects } from '../effects/posts.effects';


export interface PostsState {
  list: any;
  loading: boolean;
  error: Error;
}


const initialState: PostsState = {
  list: undefined,
  loading: false,
  error: undefined
};

export function postsReducer(state: PostsState = initialState, action: PostsActions) {

    console.log(action);

    switch (action.type) {
      case PostsActionTypes.ADD_POSTS_SUCCESS:
        return {...state, list: action.payload, loading: false };

      case PostsActionTypes.DELETE_POSTS_SUCCESS:
        return {...state, list: action.payload, loading: false };

      case PostsActionTypes.EDIT_POSTS_SUCCESS:
        return {...state, list: action.payload, loading: false };

      case PostsActionTypes.GET_POSTS_SUCCESS:
        return {...state, list: action.payload, loading: false };

       default:
          return state;
    }

}
