import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallviewscreenComponent } from './callviewscreen/callviewscreen.component';
import { KnowledgetranferComponent } from './knowledgetranfer/knowledgetranfer.component';


const routes: Routes = [
  {
  path: 'viewuserpage',
  component: CallviewscreenComponent,
 // canActivate:[AuthGuard]
  },
  {
    path: 'knowledge',
    component: KnowledgetranferComponent,
   // canActivate:[AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
