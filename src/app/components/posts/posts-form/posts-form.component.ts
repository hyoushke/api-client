import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';



import { AppState } from 'src/app/state/app.state';
import { IPosts } from 'src/app/models/posts.model';
import { PostsService } from 'src/app/services/posts/posts.service';
import { GetPostsAction, AddPostsAction } from 'src/app/state/actions/posts.actions';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {

  public author: string = '';
  public title: string = '';
  public content: string = '';
  public categories: string = '';
  public tags: string = '';
  public likes: string = '';
  public subscribers: string = '';
  public shares: string = '';
  public views: string = '';
  public imageurl: string = '';
  public datecreated: string = '';
  public datemodified: string = '';

  public posts$: Observable<any>;
  public state$: Observable<any>;

  constructor(
              private store: Store<AppState>
              ) {

  }

  ngOnInit() {

    this.state$ = this.store.select( store => store );

  }

  onClickBtnAddPost() {
    this.validateForm();
    this.addPost();
  }


  validateForm(): void {
      console.log('validate form');
  }

  addPost(): void {

    console.log( this.author );
    console.log( this.title );
    console.log( this.content );
    console.log( this.categories );
    console.log( this.tags );
    console.log( this.likes );
    console.log( this.subscribers );
    console.log( this.shares );
    console.log( this.views );
    console.log( this.imageurl );
    console.log( this.datecreated );
    console.log( this.datemodified );

    const post = {
                id: '1',
                status: 'Active',
                authorid: '1',
                author: this.author,
                title: this.title,
                content: this.content,
                categories: this.categories,
                tags: this.tags,
                likes: this.likes,
                subscribers: this.subscribers,
                shares: this.shares,
                views: this.views,
                imageurl: this.imageurl,
                datecreated: this.datecreated,
                datemodified: this.datemodified
    };

    this.store.dispatch(new AddPostsAction({posts: post}));
    this.state$ = this.store.select( store => store );
    this.posts$ = this.store.select( store => store.posts );

    //re call get posts.. because
    //right now we are still update AppState.list with the API response
    //so we must call this again..

    //or we can call a side effect .. for the action.. GetPostAction

    //this.store.dispatch(new GetPostsAction({pageLimit: 600, pageStart: 1, pageNumber: 1, searchKeyword: 'bbbbb'}));
    //this.state$ = this.store.select( store => store );
    //this.posts$ = this.store.select( store => store.posts );

}

}
