import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';



import { AppState } from 'src/app/state/app.state';
import { IPosts } from 'src/app/models/posts.model';
import { PostsService } from 'src/app/services/posts/posts.service';
import { GetPostsAction, DeletePostsAction } from 'src/app/state/actions/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    public posts$: Observable<any>;
    public state$: Observable<any>;
    public docs$: Observable<any>;


    public totalRows$: Observable<any>;
    public pageSize$: Observable<any>;
    public pageTotal$: Observable<any>;
    public pageNumber$: Observable<any>;

    public pagination$: Observable<any>;
    public pages: any;

    public pageSize = 2;

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {

      this.state$ = this.store.select( store => store );
      this.posts$ = this.store.select( store => store.posts );
    }

    onChange(event) {
      //alert(event.target.value);
      this.pageSize = event.target.value;
      this.onClickBtnGetPosts(0);
    }

    onClickBtnGetPosts(pageNumber: number): void {
      pageNumber = pageNumber + 1;

      this.store.dispatch(new GetPostsAction({pageLimit: this.pageSize, pageNumber: pageNumber, searchField: '1', searchKeyword: '1'}));
      this.state$ = this.store.select( store => store );
      this.posts$ = this.store.select( store => store.posts );
      //this.docs$ = this.store.select( store => store.posts.list[0].details.docs );

      this.docs$ = this.store.select( store => store.posts.get.data );
      this.totalRows$ = this.store.select( store => store.posts.get.pagination.totalRows );
      this.pageSize$ = this.store.select( store => store.posts.get.pagination.pageSize );
      this.pageTotal$ = this.store.select( store => store.posts.get.pagination.pageTotal );
      this.pageNumber$ = this.store.select( store => store.posts.get.pagination.pageNumber );

      this.pagination$ = this.store.select( store => store.posts.get.pagination );
    }

    onClickBtnPagination(pageNumber: number): void {

      this.onClickBtnGetPosts(pageNumber);
    }




    onClickBtnDeletePosts(post: any): void {
        //alert(post.id);
        this.store.dispatch(new DeletePostsAction({postId: post.id}));
        this.onClickBtnGetPosts(0);
    }

    onClickBtnEditPosts(post: any): void {
      alert(post.id);
    }

    onClickBtnDetailsPosts(post: any): void {
      alert(post.id);
    }


}
