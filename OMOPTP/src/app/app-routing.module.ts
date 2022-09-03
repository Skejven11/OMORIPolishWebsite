import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './screens/download/download.component';
import { FaqComponent } from './screens/faq/faq.component';
import { FrontpageComponent } from './screens/frontpage/frontpage.component';
import { MainLayoutComponent } from './screens/main-layout/main-layout.component';
import { TeamComponent } from './screens/team/team.component';
import { DialogueParserComponent } from './screens/dialogue-parser/dialogue-parser.component';

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
        path: 'download',
        component: DownloadComponent,
        data: { animation: 'downloadPage' }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: { animation: 'faqPage'}
      }
    ]
  },
  {
    path: 'parser',
    component: DialogueParserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
