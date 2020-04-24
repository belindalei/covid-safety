import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafetyMeasuresComponent } from './safety-measures/safety-measures.component'
import { AboutComponent } from './about/about.component';
import { ShopLocatorComponent } from './shop-locator/shop-locator.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { ContributeComponent } from './contribute/contribute.component';
import { CompanyInfoComponent } from './company-info/company-info.component';

const routes = [
  { path: 'compare', component: SafetyMeasuresComponent },
  { path: 'about', component: AboutComponent },
  { path: 'company-info', component: CompanyInfoComponent },
  { path: 'shop-locator', component: ShopLocatorComponent },
  { path: 'company-list', component: CompanyListComponent },
  { path: 'contribute', component: ContributeComponent},
  { path: '', redirectTo: 'company-list', pathMatch: 'full' }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
