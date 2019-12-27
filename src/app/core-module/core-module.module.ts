import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { FooterComponent } from './page-markup/components/footer/footer.component';
import { HeaderComponent } from './page-markup/components/header/header.component';
import { CourceItemComponent } from './cource-list/components/cource-item/cource-item.component';
import { ItemsListComponent } from './cource-list/components/items-list/items-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

// DIRECTIVES
import { CourceDateDirective } from './cource-list/directives/cource-date.directive';

// PIPES
import { HoursPipe } from './cource-list/pipes/hours.pipe';
import { ItemComponent } from './cource-list/components/item/item.component';
import { ListComponent } from './cource-list/components/list/list.component';



const COMPONENTS = [
    FooterComponent,
    HeaderComponent,
    CourceItemComponent,
    ItemsListComponent,
    NotFoundComponent,
  ];
const PIPES = [
    HoursPipe,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    CourceDateDirective,
    ItemComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonsModule,
      RouterModule,
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES
  ]
})
export class CoreModuleModule { }
