import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

@NgModule({
  declarations: [
    HomeComponent,
    BookmarkComponent   
  ],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
