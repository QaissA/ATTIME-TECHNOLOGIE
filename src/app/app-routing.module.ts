import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBTCComponent } from './page-btc/page-btc.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'details', component : PageBTCComponent },
  {path : '**', redirectTo : "home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
