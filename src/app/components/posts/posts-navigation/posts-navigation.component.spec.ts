import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsNavigationComponent } from './posts-navigation.component';

describe('PostsNavigationComponent', () => {
  let component: PostsNavigationComponent;
  let fixture: ComponentFixture<PostsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
