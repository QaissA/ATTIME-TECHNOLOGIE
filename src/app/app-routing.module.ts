import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBTCComponent } from './page-btc/page-btc.component';
import { HomeComponent } from './home/home.component';
import { PageDdfComponent } from './page-ddf/page-ddf.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'pagebtc', component : PageBTCComponent },
  {path : 'pageddf', component : PageDdfComponent },
  {path : '**', redirectTo : "home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
