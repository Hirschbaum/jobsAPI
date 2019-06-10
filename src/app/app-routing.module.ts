import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobsService } from './jobs.service';
import { JobsComponent } from './jobs/jobs.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'jobs/:job', component: ResultsComponent}
];

/*in the class: path:'sources', component: SourceComponent*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
