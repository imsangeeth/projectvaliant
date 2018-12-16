import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallviewscreenComponent } from './callviewscreen/callviewscreen.component';
import { KnowledgetranferComponent } from './knowledgetranfer/knowledgetranfer.component';
import { ReportsComponent } from './reports/reports.component';
import { MasterpagecallnoteComponent } from './masterpagecallnote/masterpagecallnote.component';
import { MasterpagektComponent } from './masterpagekt/masterpagekt.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
   // canActivate:[AuthGuard]
    },
  {
  path: 'viewuserpage',
  component: CallviewscreenComponent,
 // canActivate:[AuthGuard]
  },
  {
    path: 'knowledge',
    component: KnowledgetranferComponent,
   // canActivate:[AuthGuard]
  },
  {
    path: 'reports',
    component: ReportsComponent,
   // canActivate:[AuthGuard]
  },
  {
    path: 'masterpagecallnote',
    component: MasterpagecallnoteComponent,
   // canActivate:[AuthGuard]
  },
  {
    path: 'masterpagekt',
    component: MasterpagektComponent,
   // canActivate:[AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
