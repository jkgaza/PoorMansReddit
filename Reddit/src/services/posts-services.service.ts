import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl: string = 'https://www.reddit.com/r/aww/.json';

@Injectable({
  providedIn: 'root'
})
export class PostsServicesService {

  constructor(private http: HttpClient) { }

  
}
