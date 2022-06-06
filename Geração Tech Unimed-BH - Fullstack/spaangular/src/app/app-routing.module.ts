import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEditComponent } from './components/card/edit/card-edit.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'edit/:id',
    component: CardEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
