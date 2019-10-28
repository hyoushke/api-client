import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostsActionTypes, PostsActions,
         GetPostsAction, GetPostsSuccessAction, GetPostsFailedAction,
         AddPostsAction, AddPostsSuccessAction, AddPostsFailedAction, DeletePostsSuccessAction, DeletePostsFailedAction, DeletePostsAction
         } from 'src/app/state/actions/posts.actions';


@Injectable()
export class PostsEffects {

  /*
  @Effect() getPosts_OLD$ = this.actions$
  .pipe(
    ofType<GetPostsAction>(PostsActionTypes.GET_POSTS),
    mergeMap(
      () => this.postsService.getPosts(500, 1, 1, 'test')
      .pipe(
        map( data => new GetPostsSuccessAction([data]) ),
        catchError(error => of(new GetPostsFailedAction(error)) )
      )
    )
  );
  */


  @Effect() getPosts$ = this.actions$
  .pipe(
    ofType<GetPostsAction>(PostsActionTypes.GET_POSTS),
    mergeMap(
      (action) => this.postsService.getPosts(action.payload.pageLimit,
                                             action.payload.pageNumber,
                                             action.payload.searchField,
                                             action.payload.searchKeyword)
      .pipe(
        map( res => new GetPostsSuccessAction(res) ),
        catchError(error => of(new GetPostsFailedAction(error)) )
      )
    )
  );


  @Effect() addPosts$ = this.actions$
  .pipe(
    ofType<AddPostsAction>(PostsActionTypes.ADD_POSTS),
    mergeMap(
      (action) => this.postsService.addPosts(action.payload.posts)
      .pipe(
        map( data => new AddPostsSuccessAction([data]) ),
        catchError(error => of(new AddPostsFailedAction(error)) )
      )
    )
  );

  @Effect() deletePosts$ = this.actions$
  .pipe(
    ofType<DeletePostsAction>(PostsActionTypes.DELETE_POSTS),
    mergeMap(
      (action) => this.postsService.deletePosts(action.payload.postId)
      .pipe(
        map( data => new DeletePostsSuccessAction([data]) ),
        catchError(error => of(new DeletePostsFailedAction(error)) )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private postsService: PostsService
    ) {

  }

}
