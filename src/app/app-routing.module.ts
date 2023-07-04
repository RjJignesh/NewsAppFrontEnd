import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './news/home/home.component';
import { BookmarkComponent } from './news/bookmark/bookmark.component';
// import { HeaderComponent } from './news/header/header.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bookmark', component: BookmarkComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home component by default
];

@NgModule({
  imports: [   
    RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
