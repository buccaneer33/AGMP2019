import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterComponent } from './page-markup/components/footer/footer.component';
import { HeaderComponent } from './page-markup/components/header/header.component';
import { CourceItemComponent } from './cource-list/components/cource-item/cource-item.component';
import { ItemsListComponent } from './cource-list/components/items-list/items-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

// DIRECTIVES
import { CourceDateDirective } from './cource-list/directives/cource-date.directive';

// PIPES
import { HoursPipe } from './cource-list/pipes/hours.pipe';
import { OrderByPipe } from './cource-list/pipes/order-by.pipe';


const COMPONENTS = [
    LoginPageComponent,
    FooterComponent,
    HeaderComponent,
    CourceItemComponent,
    ItemsListComponent,
    NotFoundComponent,
  ];
const PIPES = [
    HoursPipe,
    OrderByPipe
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    CourceDateDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonsModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class CoreModuleModule { }
