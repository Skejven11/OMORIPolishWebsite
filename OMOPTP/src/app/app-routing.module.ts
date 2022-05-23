import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageModule } from './screens/frontpage/frontpage.module';
import { MainLayoutComponent } from './screens/main-layout/main-layout.component';
import { TeamModule } from './screens/team/team.module';
import { ApplyModule } from './screens/apply/apply.module';
import { FaqModule } from './screens/faq/faq.module';

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
      },
      {
        path: 'apply',
        loadChildren: () => import('./screens/apply/apply.module').then(m => m.ApplyModule),
      },
      {
        path: 'faq',
        loadChildren: () => import('./screens/faq/faq.module').then(m => m.FaqModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
