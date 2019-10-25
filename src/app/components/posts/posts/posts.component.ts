import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';



import { AppState } from 'src/app/state/app.state';
import { IPosts } from 'src/app/models/posts.model';
import { PostsService } from 'src/app/services/posts/posts.service';
import { GetPostsAction } from 'src/app/state/actions/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    public posts$: Observable<any>;
    public state$: Observable<any>;
    public docs$: Observable<any>;

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {

      this.state$ = this.store.select( store => store );
      this.posts$ = this.store.select( store => store.posts );
    }

    onClickBtnGetPosts(): void {

      this.store.dispatch(new GetPostsAction({pageLimit: 600, pageStart: 1, pageNumber: 1, searchKeyword: 'bbbbb'}));
      this.state$ = this.store.select( store => store );
      this.posts$ = this.store.select( store => store.posts );
      this.docs$ = this.store.select( store => store.posts.list[0].details.docs );
    }
}
