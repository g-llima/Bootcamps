import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Error404NotFound } from './404/error-404.component';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { ReplacePipe } from './custom-pipes/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404NotFound,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: '**',
        component: Error404NotFound,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
