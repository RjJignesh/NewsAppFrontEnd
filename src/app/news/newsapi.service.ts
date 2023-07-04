import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  private baseUrl: string = environment.apiUrl;
  
  constructor(private httpClient: HttpClient) {
   }

  getAllNews(endpoint: string): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.httpClient.get(url);
   }

   getAllBookmarkNews(endpoint: string): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.httpClient.get(url);
   }

   bookmarkNews(newsId: string,endpoint: string):Observable<any> {     

    const url = `${this.baseUrl}/${endpoint}=${newsId}`;
    return this.httpClient.get(url); 
   }

  searchNews(param:string,endpoint: string,isbookmarksearch:string):Observable<any> {          
          const url = `${this.baseUrl}/${endpoint}=${param+isbookmarksearch}`;          
          return this.httpClient.get(url); 
      }

}
