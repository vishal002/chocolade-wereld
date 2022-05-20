import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChocolateOverviewComponent } from './chocolate-overview/chocolate-overview/chocolate-overview.component';
import { ChocolateDetailsComponent } from './chocolate-details/chocolate-details/chocolate-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'ChocolateOverviewComponent', pathMatch: 'full' },
  { path: '', component: ChocolateOverviewComponent },
  { path: 'details', component: ChocolateDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
