import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './screens/frontpage/frontpage.component';
import { TeamComponent } from './screens/team/team.component';
import { MainLayoutComponent } from './screens/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    TeamComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
