import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page-markup/components/header/header.component';
import { FooterComponent } from './page-markup/components/footer/footer.component';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import { ItemsListComponent } from './cource-list/components/items-list/items-list.component';
import { LogoComponent } from './common/logo/logo.component';
import { LoginFormComponent } from './common/login-form/login-form.component';
import { CopyRightsComponent } from './common/copy-rights/copy-rights.component';
import { BreadcrumpsComponent } from './common/breadcrumps/breadcrumps.component';
import { CourceItemComponent } from './cource-list/components/cource-item/cource-item.component';
import { NotFoundComponent } from 'src/app/cource-list/components/not-found/not-found.component';

import { HoursPipe } from './cource-list/pipes/hours.pipe';
import { OrderByPipe } from './cource-list/pipes/order-by.pipe';
import { CourceDateDirective } from './cource-list/directives/cource-date.directive';
import { SearchTitlePipe } from './cource-list/pipes/search-title.pipe';

const appRoutes: Routes = [
    { path: 'courses', component: ItemsListComponent },
    {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full'
    },
    { path: '**', component: NotFoundComponent }
];

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
    CourceItemComponent,
    HoursPipe,
    OrderByPipe,
    CourceDateDirective,
    NotFoundComponent,
    SearchTitlePipe
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
