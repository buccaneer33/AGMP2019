import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// COMPONENTS
import { HeaderComponent } from './page-markup/components/header/header.component';
import { FooterComponent } from './page-markup/components/footer/footer.component';
import { SearchBarComponent } from './common/components/search-bar/search-bar.component';
import { ItemsListComponent } from './cource-list/components/items-list/items-list.component';
import { LogoComponent } from './common/components/logo/logo.component';
import { LoginFormComponent } from './common/components/login-form/login-form.component';
import { CopyRightsComponent } from './common/components/copy-rights/copy-rights.component';
import { BreadcrumpsComponent } from './common/components/breadcrumps/breadcrumps.component';
import { CourceItemComponent } from './cource-list/components/cource-item/cource-item.component';
import { NotFoundComponent } from 'src/app/cource-list/components/not-found/not-found.component';
import {
    ModalsOverlayComponent
} from './modals/components/modals-overlay/modals-overlay.component';
import {
    ConfirmPopupComponent
} from './modals/components/popup-types/confirm-popup/confirm-popup.component';
import {
    LoginPopupComponent
} from './modals/components/popup-types/login-popup/login-popup.component';

// PIPES
import { HoursPipe } from './cource-list/pipes/hours.pipe';
import { OrderByPipe } from './cource-list/pipes/order-by.pipe';
import { SearchTitlePipe } from './cource-list/pipes/search-title.pipe';

// DIRECTIVES
import { CourceDateDirective } from './cource-list/directives/cource-date.directive';
import { PopupHostDirective } from './modals/directive/popup-host.directive';



const MODALS_TYPES = [
    ConfirmPopupComponent,
    LoginPopupComponent
  ];

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
    SearchTitlePipe,
    ModalsOverlayComponent,
    PopupHostDirective,
    ...MODALS_TYPES,
    LoginPopupComponent
  ],
  entryComponents: [ ...MODALS_TYPES ],
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
