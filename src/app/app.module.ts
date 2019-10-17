import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page-markup/header/header.component';
import { BreadcrumpsComponent } from './page-markup/breadcrumps/breadcrumps.component';
import { MainComponent } from './page-markup/main/main.component';
import { FooterComponent } from './page-markup/footer/footer.component';
import { SearchBarComponent } from './page-markup/search-bar/search-bar.component';
import { ItemsListComponent } from './page-markup/items-list/items-list.component';
import { LogoComponent } from './common/logo/logo.component';
import { LoginFormComponent } from './common/login-form/login-form.component';
import { CopyRightsComponent } from './common/copy-rights/copy-rights.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumpsComponent,
    MainComponent,
    FooterComponent,
    SearchBarComponent,
    ItemsListComponent,
    LogoComponent,
    LoginFormComponent,
    CopyRightsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
