import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumpsComponent } from './components/breadcrumps/breadcrumps.component';
import { CopyRightsComponent } from './components/copy-rights/copy-rights.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AppRoutingModule } from '../app-routing.module';

const COMPONENTS = [
    BreadcrumpsComponent,
    CopyRightsComponent,
    LoginFormComponent,
    LogoComponent,
    SearchBarComponent
  ];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class CommonsModule { }
