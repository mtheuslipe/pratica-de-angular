import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { courseListComponent } from './courses/course-list.component';
import { starComponent } from './courses/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    courseListComponent,
    starComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
