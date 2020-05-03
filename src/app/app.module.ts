import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';


import { NavbarComponent } from './shared/navbar/navbar.component';
import { SafetyMeasuresComponent } from './safety-measures/safety-measures.component';
import { AboutComponent } from './about/about.component';
import { ShopLocatorComponent } from './shop-locator/shop-locator.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { ContributeComponent } from './contribute/contribute.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SafetyMeasuresComponent,
    AboutComponent,
    ShopLocatorComponent,
    CompanyListComponent,
    ContributeComponent,
    CompanyInfoComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
