import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './screens/apply/apply.component';
import { FaqComponent } from './screens/faq/faq.component';
import { FrontpageComponent } from './screens/frontpage/frontpage.component';
import { MainLayoutComponent } from './screens/main-layout/main-layout.component';
import { TeamComponent } from './screens/team/team.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/frontpage',
        pathMatch: 'full'
      },
      {
        path: 'frontpage',
        component: FrontpageComponent,
        data: { animation: 'frontPage' }
      },
      {
        path: 'team',
        component: TeamComponent,
        data: { animation: 'teamPage' }
      },
      {
        path: 'apply',
        component: ApplyComponent,
        data: { animation: 'applyPage' }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: { animation: 'faqPage'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
