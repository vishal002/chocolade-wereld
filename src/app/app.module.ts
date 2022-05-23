import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonSharedModulesModule } from './common-shared-modules/common-shared-modules.module';
import { ChocolateOverviewComponent } from './chocolate-overview/chocolate-overview/chocolate-overview.component';
import { ChocolateDetailsComponent } from './chocolate-details/chocolate-details/chocolate-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ChocolateOverviewComponent,
    ChocolateDetailsComponent,
    HeaderComponent
  ],
  imports: [
    CommonSharedModulesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
