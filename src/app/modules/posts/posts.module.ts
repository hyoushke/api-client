import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';





import { navigationsReducer } from 'src/app/state/reducers/navigations.reducer';
import { PostsComponent } from 'src/app/components/posts/posts/posts.component';
import { postsReducer } from 'src/app/state/reducers/posts.reducer';
import { PostsEffects } from 'src/app/state/effects/posts.effects';


import { PostsFormComponent } from 'src/app/components/posts/posts-form/posts-form.component';
import { PostsNavigationComponent } from 'src/app/components/posts/posts-navigation/posts-navigation.component';
import { PostsContainerComponent } from 'src/app/components/posts/posts-container/posts-container.component';
import { RouterModule, Routes } from '@angular/router';

const postsRoutes: Routes = [{
  path: '', children: [
    {path: '', component: PostsContainerComponent}
  ]
}]

@NgModule({
  declarations: [PostsContainerComponent,PostsComponent,PostsNavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(postsRoutes),
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
  exports: [RouterModule,PostsContainerComponent,PostsComponent,PostsNavigationComponent],
})
export class PostsModule { }
