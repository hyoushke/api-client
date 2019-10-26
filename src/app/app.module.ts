import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './components/questions/questions/questions.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { QuestionsEffects } from './state/effects/questions.effects';
import { questionReducer } from './state/reducers/questions.reducer';
import { PostsComponent } from './components/posts/posts/posts.component';
import { postsReducer } from './state/reducers/posts.reducer';
import { PostsEffects } from './state/effects/posts.effects';
import { PostsFormComponent } from './components/posts/posts-form/posts-form.component';
import { PostsNavigationComponent } from './components/posts/posts-navigation/posts-navigation.component';
import { PostsContainerComponent } from './components/posts/posts-container/posts-container.component';
import { HeaderComponent } from './components/layouts/header/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer/footer.component';
import { NotificationsComponent } from './components/layouts/notifications/notifications/notifications.component';
import { usersReducer } from './state/reducers/users.reducer';
import { navigationsReducer } from './state/reducers/navigations.reducer';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    PostsComponent,
    PostsFormComponent,
    PostsNavigationComponent,
    PostsContainerComponent,
    HeaderComponent,
    FooterComponent,
    NotificationsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      navigations: navigationsReducer,
      posts: postsReducer,
      users: usersReducer
    }),
    EffectsModule.forRoot([QuestionsEffects, PostsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
