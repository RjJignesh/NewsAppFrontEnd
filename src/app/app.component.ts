import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { NewsCommonService } from './news/news.common.service';
import { NewsConstnts } from './news/news.const';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  { 

  TemsOffUse : string = '';
  PriPol : string = '';
  Tredmark: string = '';
  constructor(private newsCommonService: NewsCommonService) {        
  }

  ngOnInit(): void {    
    this.TemsOffUse  =  NewsConstnts.TemsOffUse;
    this.PriPol = NewsConstnts.PriPol,
    this.Tredmark = NewsConstnts.Tredmark
  }

  searchNews(data:Event) {     
    let searchText = (data.target as HTMLInputElement).value;
    this.newsCommonService.sendMsg(searchText);   
   }



}
