import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadComponent } from './screens/download/download.component';
import { FaqComponent } from './screens/faq/faq.component';
import { FrontpageComponent } from './screens/frontpage/frontpage.component';
import { MainLayoutComponent } from './screens/main-layout/main-layout.component';
import { TeamComponent } from './screens/team/team.component';
import { NavbarComponent } from './screens/main-layout/navbar/navbar.component';
import { LogoComponent } from './screens/main-layout/logo/logo.component';
import { FooterComponent } from './screens/main-layout/footer/footer.component';
import { OmoButtonComponent } from './components/omo-button/omo-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItemComponent } from './screens/main-layout/navbar/menu-item/menu-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamItemComponent } from './screens/team/team-item/team-item.component';
import { CanvastarComponent } from './components/canvastar/canvastar.component';
import { NewsComponent } from './screens/news/news.component';
import { NewsarticleComponent } from './components/newsarticle/newsarticle.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { themeReducer } from './state/theme.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    DownloadComponent,
    FaqComponent,
    FrontpageComponent,
    TeamComponent,
    NavbarComponent,
    LogoComponent,
    FooterComponent,
    OmoButtonComponent,
    MenuItemComponent,
    TeamItemComponent,
    CanvastarComponent,
    NewsComponent,
    NewsarticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    StoreModule.forRoot({ theme: themeReducer })
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
