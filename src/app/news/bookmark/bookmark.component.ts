import { Component, OnInit } from '@angular/core';
import { News } from '../News';
import { NewsapiService } from '../newsapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsConstnts } from '../news.const';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { NewsCommonService } from '../news.common.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  searchText = '';
  bookmarkList: News[] = []; 
  isNewsDataLoded : boolean = false;
  private imageBaseUrl: string = environment.imageBaseUrl;
  constructor(private newsCommonService:NewsCommonService , private newsService: NewsapiService,private spinner: NgxSpinnerService){
    this.spinner.show();
    setTimeout(() => {      
      this.getBookMarkNewsList();
      this.spinner.hide();
    },2000); 
  }
  ngOnInit(): void {

    this.newsCommonService.receivedMsg().subscribe({
      next: (data: any)=> {
       if(data !== ""){
        this.searchNews(data)
       }else{
        this.getBookMarkNewsList();
       }
      }
    })


  }

  private searchNews(searchText:string) {   
      this.newsService.searchNews(searchText,NewsConstnts.SearchAllNews,NewsConstnts.SearchInBookmark).subscribe((newsRes) => { 
        this.isNewsDataLoded = true;
        this.renderNewsList(newsRes);
      });
  

  }

  private getBookMarkNewsList(){

    this.newsService.getAllNews(NewsConstnts.BookMarkList).subscribe((newsRes) => {  
      this.isNewsDataLoded = true;      
      this.renderNewsList(newsRes);
    });
   }

   private renderNewsList(newsData : News[]){
    if(newsData !== null){
      if(newsData.length > 0){
        this.bookmarkList = newsData;
        this.bookmarkList.forEach( (element: { imagePath: string; date: Date; }) => {
          let elImageName = element.imagePath.slice(element.imagePath.indexOf('/')+1).toString();
          element.imagePath = this.generateImagePath(element.date,elImageName)
          return element;
        });
        
        this.bookmarkList.forEach((element : { detail : string }) => {
              let eleDetail = element.detail.length > 200 ? element.detail.slice(200) :  element.detail;
              element.detail =eleDetail;
              return element;
        });
      }
    }
  }

  private generateImagePath(newsDate:Date, topNewsImage:string){
    let year = moment(newsDate,NewsConstnts.Year).format(NewsConstnts.Year);
    let month = moment(newsDate,NewsConstnts.UtcDate).format(NewsConstnts.Month);
    let date = moment(newsDate,NewsConstnts.UtcDate).format(NewsConstnts.LocalDate);
    return `${this.imageBaseUrl}/${year}/${month}/${date}/${topNewsImage}`;    
  }

}
