import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './screens/frontpage/frontpage.component';
import { TeamComponent } from './screens/team/team.component';
import { MainLayoutComponent } from './screens/main-layout/main-layout.component';
import { NavbarComponent } from './screens/main-layout/navbar/navbar.component';
import { LogoComponent } from './screens/main-layout/logo/logo.component';
import { FooterComponent } from './screens/main-layout/footer/footer.component';
import { OmoButtonComponent } from './components/omo-button/omo-button.component';
import { FaqComponent } from './screens/faq/faq.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItemComponent } from './screens/main-layout/navbar/menu-item/menu-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    TeamComponent,
    MainLayoutComponent,
    NavbarComponent,
    LogoComponent,
    FooterComponent,
    OmoButtonComponent,
    FaqComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
