import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';



import { AppState } from 'src/app/state/app.state';
import { IPosts } from 'src/app/models/posts.model';
import { PostsService } from 'src/app/services/posts/posts.service';
import { GetPostsAction } from 'src/app/state/actions/posts.actions';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  public posts$: Observable<any>;
  public state$: Observable<any>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {

    this.state$ = this.store.select( store => store );
    this.posts$ = this.store.select( store => store.posts );
  }
}
