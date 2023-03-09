import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './screens/download/download.component';
import { FaqComponent } from './screens/faq/faq.component';
import { FrontpageComponent } from './screens/frontpage/frontpage.component';
import { MainLayoutComponent } from './screens/main-layout/main-layout.component';
import { TeamComponent } from './screens/team/team.component';
import { NewsComponent } from './screens/news/news.component';
import { BalbinkaComponent } from './screens/balbinka/balbinka.component';
import { BalbinkaGuard } from './screens/balbinka/balbinka.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: FrontpageComponent,
        data: { animation: 'frontPage' }
      },
      {
        path: 'team',
        component: TeamComponent,
        data: { animation: 'teamPage' }
      },
      {
        path: 'download',
        component: DownloadComponent,
        data: { animation: 'downloadPage' }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: { animation: 'faqPage'}
      },
      {
        path: 'news',
        component: NewsComponent,
        data: { animation: 'newsPage'}
      },
      {
        path: 'balbinka',
        component: BalbinkaComponent,
        data: { animation: 'balbinka'},
        canActivate: [BalbinkaGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
