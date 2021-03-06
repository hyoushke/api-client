import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {

  public child:string;
  public counter:number;
  public message:string;
  public navigation:string;
  public toaster:string;
  public isLoading:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
