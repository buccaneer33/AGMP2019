import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumpsComponent } from './components/breadcrumps/breadcrumps.component';
import { CopyRightsComponent } from './components/copy-rights/copy-rights.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { RouterModule } from '@angular/router';
import { LangToggleComponent } from './components/lang-toggle/lang-toggle.component';
import { I18nModule } from '../i18n/i18n.module';

const COMPONENTS = [
    BreadcrumpsComponent,
    CopyRightsComponent,
    LoginFormComponent,
    LogoComponent,
    SearchBarComponent,
    LoadingOverlayComponent,
    LangToggleComponent
  ];

@NgModule({
    declarations: [
        ...COMPONENTS,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        I18nModule
    ],
    exports: [
        ...COMPONENTS,
    ],
})
export class CommonsModule { }
