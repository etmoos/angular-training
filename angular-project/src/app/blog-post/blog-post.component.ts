import { Component, OnInit, Input } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {


  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: Promise<any>;
  @Input() postLoveIts: number;

  getColor(){

    if(this.postLoveIts>0){

      return 'green';

    }else if(this.postLoveIts<0){

      return 'red';

    }

  }

  onLoveIt(){

    this.postLoveIts++;

  }

  onDontLoveIt(){

    this.postLoveIts--;

  }

  constructor() { }

  ngOnInit() {
  }

}
