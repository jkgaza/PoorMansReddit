import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private data: any[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // getData(){
  //   const url ='https://www.reddit.com/r/aww/.json'
  //   this.http.get(url).subscribe((res)=>{
  //     this.data = res
  //     console.log(this.data)
  //   })
  // }

}
