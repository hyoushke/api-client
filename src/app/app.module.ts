import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HeaderComponent } from './components/layouts/header/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer/footer.component';
import { NotificationsComponent } from './components/layouts/notifications/notifications/notifications.component';


import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from 'src/app/state/effects/posts.effects';
import { usersReducer } from './state/reducers/users.reducer';
import { navigationsReducer } from './state/reducers/navigations.reducer';
import { postsReducer } from './state/reducers/posts.reducer';
import { PostsEditComponent } from './components/posts/posts-edit/posts-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotificationsComponent,
    PostsEditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([PostsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
