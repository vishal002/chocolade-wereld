import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChocolateOverviewComponent } from './chocolate-overview/chocolate-overview/chocolate-overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'ChocolateOverviewComponent', pathMatch: 'full' },
  { path: '', component: ChocolateOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
