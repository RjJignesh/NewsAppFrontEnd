import { Component, Input, OnInit } from '@angular/core';
import { News } from '../News';
import{ NewsapiService } from '../newsapi.service';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import { NewsConstnts } from "../news.const";
import   Swal   from 'sweetalert2';
import { Subject } from 'rxjs';
import { NewsCommonService } from '../news.common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  newsList: News[] = []; 
  TopNews!: News;
  searchText = '';
  isNewsDataLoded : boolean = false;
  private imageBaseUrl: string = environment.imageBaseUrl;
  
  constructor(private newsCommonService:NewsCommonService , private newsService: NewsapiService,private spinner: NgxSpinnerService){
    
     this.spinner.show();
     setTimeout(() => {
       this.getNewsList();
       this.spinner.hide();
     },2000); 

  }

  ngOnInit(): void {    
    this.newsCommonService.receivedMsg().subscribe({
      next: (data: any)=> {
       if(data !== ""){
        this.searchNews(data)
       }else
       {
           this.getNewsList();
       }
      }
    });
  }
  private getNewsList(){
    this.newsService.getAllNews(NewsConstnts.AllNews).subscribe((newsRes) => {  
      this.isNewsDataLoded = true;      
      this.renderNewsList(newsRes);
    });
  }

 private searchNews(searchText:string) {  
      this.newsService.searchNews(searchText,NewsConstnts.SearchAllNews, NewsConstnts.NotSearchInBookmark).subscribe((newsRes) => { 
        this.isNewsDataLoded = true;
        this.renderNewsList(newsRes);
      });
  }
  
  private renderNewsList(newsData : News[]){    
    //Getting Top News base on last inserted news detail
    if(newsData.length > 0){
      this.TopNews = newsData.splice(0, 1)[0] as News;
      var topNewsImage = this.TopNews.imagePath.slice(this.TopNews.imagePath.indexOf('/')+1);
      this.TopNews.imagePath = this.generateImagePath(this.TopNews.date,topNewsImage);      
      this.newsList = newsData;
  
      this.newsList.forEach( (element: { imagePath: string; date: Date; }) => {
        let elImageName = element.imagePath.slice(element.imagePath.indexOf('/')+1).toString();
        element.imagePath = this.generateImagePath(element.date,elImageName)
        return element;
      });
      
      this.newsList.forEach((element : { detail : string }) => {
            let eleDetail = element.detail.length > 200 ? element.detail.slice(200) :  element.detail;
            element.detail =eleDetail;
            return element;
      });
    }


  }

  private generateImagePath(newsDate:Date, topNewsImage:string){
    let year = moment(newsDate,NewsConstnts.Year).format(NewsConstnts.Year);
    let month = moment(newsDate,NewsConstnts.UtcDate).format(NewsConstnts.Month);
    let date = moment(newsDate,NewsConstnts.UtcDate).format(NewsConstnts.LocalDate);
    return `${this.imageBaseUrl}/${year}/${month}/${date}/${topNewsImage}`;    
  }

  //Bookmark any news
  bookMarkNews(id: string){
   Swal.fire({
    title:NewsConstnts.ConfirmTitle,
    text: NewsConstnts.ConfirmText,
    icon: NewsConstnts.ConfirmIcon,
    showCancelButton: NewsConstnts.ShowCancelBtn,
    confirmButtonText:NewsConstnts.ConfirmBtnTxt,
    cancelButtonText: NewsConstnts.CancelBtnTxt
  }).then((result) => {
    if (result.value) {  
     this.newsService.bookmarkNews(id, NewsConstnts.BookMarkNews).subscribe((bookMarkRes) => { 
      if(bookMarkRes){
              Swal.fire(
                NewsConstnts.BookmarkSuccessTitle,
                NewsConstnts.BookmarkSuccessText,
                NewsConstnts.BookmarkSuccessICon
              );
              this.getNewsList();
         }
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        NewsConstnts.BookmarkCancelTitle,
        NewsConstnts.BookmarkCancelText,
        NewsConstnts.BookmarkCancelIcon
      )
    }
  })
}
}


