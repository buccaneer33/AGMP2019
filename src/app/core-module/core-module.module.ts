import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

// COMPONENTS
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
import { ItemComponent } from './cource-list/components/item/item.component';
import { NewComponent } from './cource-list/components/new/new.component';
import { ListComponent } from './cource-list/components/list/list.component';


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
    ItemComponent,
    NewComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonsModule,
    AppRoutingModule
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES
  ]
})
export class CoreModuleModule { }
