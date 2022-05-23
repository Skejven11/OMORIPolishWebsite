import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageModule } from './screens/frontpage/frontpage.module';
import { MainLayoutComponent } from './screens/main-layout/main-layout.component';
import { TeamModule } from './screens/team/team.module';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./screens/frontpage/frontpage.module').then(m => m.FrontpageModule),
      },
      {
        path: 'team',
        loadChildren: () => import('./screens/team/team.module').then(m => m.TeamModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
