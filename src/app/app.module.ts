import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { navBar } from './nav-bar/nav-bar.component';
import { error404Component } from './error-404/error-404.component';
import { courseModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    navBar,
    error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    courseModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch:'full'
      },
      {
        path: '**', component: error404Component
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
