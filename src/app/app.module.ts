import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page-markup/components/header/header.component';
import { FooterComponent } from './page-markup/components/footer/footer.component';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import { ItemsListComponent } from './page-markup/components/items-list/items-list.component';
import { LogoComponent } from './common/logo/logo.component';
import { LoginFormComponent } from './common/login-form/login-form.component';
import { CopyRightsComponent } from './common/copy-rights/copy-rights.component';
import { BreadcrumpsComponent } from './common/breadcrumps/breadcrumps.component';
import { CourceItemComponent } from './page-markup/components/cource-item/cource-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    ItemsListComponent,
    LogoComponent,
    LoginFormComponent,
    CopyRightsComponent,
    BreadcrumpsComponent,
    CourceItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
