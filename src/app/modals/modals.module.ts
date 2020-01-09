import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModuleModule } from '../core-module/core-module.module';

import { ModalsOverlayComponent } from './components/modals-overlay/modals-overlay.component';
import {
    ConfirmPopupComponent
} from './components/popup-types/confirm-popup/confirm-popup.component';
import { PopupHostDirective } from './directive/popup-host.directive';

const COMPONENTS = [
    ModalsOverlayComponent
  ];
  const MODALS_TYPES = [
    ConfirmPopupComponent,
  ];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...MODALS_TYPES,
    PopupHostDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModuleModule
  ],
  exports: [
    ...COMPONENTS
  ],
  entryComponents: [ ...MODALS_TYPES ],
})
export class ModalsModule { }
