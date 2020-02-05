import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reddit';
  private data: any[]
  constructor(private http: HttpClient){

  }

  getData(){
    const url ='https://www.reddit.com/r/aww/.json'
    this.http.get(url).subscribe((res : any)=>{
      this.data = res.data.children
      console.log(this.data)
    })
  }
}
