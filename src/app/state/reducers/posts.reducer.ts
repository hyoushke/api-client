import { Action } from '@ngrx/store';
import { IPosts } from 'src/app/models/posts.model';
import { PostsActionTypes, PostsActions } from 'src/app/state/actions/posts.actions';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostsEffects } from '../effects/posts.effects';


export interface PostsState {
  get: any;
  added: any;
  deleted: any;
  updated: any;
  selected: any;

  loading: boolean;
  error: Error;
}


const initialState: PostsState = {
  get: undefined,
  added: undefined,
  deleted: undefined,
  updated: undefined,
  selected: undefined,
  loading: false,
  error: undefined
};

export function postsReducer(state: PostsState = initialState, action: PostsActions) {


    switch (action.type) {
      case PostsActionTypes.ADD_POSTS_SUCCESS:
        return {...state, added: action.payload, loading: false };

      case PostsActionTypes.DELETE_POSTS_SUCCESS:
        return {...state, deleted: action.payload, loading: false };

      case PostsActionTypes.EDIT_POSTS_SUCCESS:
        return {...state, updated: action.payload, loading: false };

      case PostsActionTypes.GET_POSTS_SUCCESS:
        const details = action.payload.details;
        const get = {
          data: details.docs,
          searchText: '',
          pagination : { totalRows: details.totalDocs,
                         pageNumber: 0,
                         pageSize: details.limit,
                         pageTotal: details.totalpages
                         },
          response: undefined,
        }
        return {...state, get: get, loading: false };

       default:
          return state;
    }

}
