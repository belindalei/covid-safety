import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafetyMeasuresComponent } from './safety-measures/safety-measures.component'
import { AboutComponent } from './about/about.component';

const routes = [
  { path: 'safety-measures', component: SafetyMeasuresComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'safety-measures', pathMatch: 'full' }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
