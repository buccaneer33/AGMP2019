import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

// COMPONENTS
import { FooterComponent } from './page-markup/components/footer/footer.component';
import { HeaderComponent } from './page-markup/components/header/header.component';
import { CourceItemComponent } from './cource-list/components/cource-item/cource-item.component';
import { ItemsListComponent } from './cource-list/components/items-list/items-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemComponent } from './cource-list/components/item/item.component';
import { ListComponent } from './cource-list/components/list/list.component';
import {
    DateFieldComponent
} from './cource-list/components/item/fields/date-field/date-field.component';
import {
    AuthorsFieldComponent
} from './cource-list/components/item/fields/authors-field/authors-field.component';
import {
    DurationFieldComponent
} from './cource-list/components/item/fields/duration-field/duration-field.component';

// DIRECTIVES
import { CourceDateDirective } from './cource-list/directives/cource-date.directive';

// PIPES
import { HoursPipe } from './cource-list/pipes/hours.pipe';


const COMPONENTS = [
    FooterComponent,
    HeaderComponent,
    CourceItemComponent,
    ItemsListComponent,
    NotFoundComponent,
    ItemComponent,
    ListComponent,
    DateFieldComponent,
    AuthorsFieldComponent,
    DurationFieldComponent,
  ];
const PIPES = [
    HoursPipe,
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
    CommonsModule,
    RouterModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES,
    ReactiveFormsModule
  ]
})
export class CoreModuleModule { }
