import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { courseListComponent } from './courses/course-list.component';
import { starComponent } from './courses/star/star.component';
import { replacePipe } from './pipe/pipe.replace';
import { navBar } from './nav-bar/nav-bar.component';
import { error404Component } from './error-404/error-404.component';
import { infoComponent } from './courses/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    courseListComponent,
    starComponent,
    replacePipe,
    navBar,
    error404Component,
    infoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch:'full'
      },
      {
        path: 'courses', component: courseListComponent
      },
      {
        path: 'courses/info/:id', component:infoComponent
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
