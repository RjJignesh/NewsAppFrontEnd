import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule  } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [
    AppComponent,
    // NewsComponent,
    // BookmarkComponent
  ],
  imports: [
    NewsModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }) 
  ],
  schemas: [
     CUSTOM_ELEMENTS_SCHEMA
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
