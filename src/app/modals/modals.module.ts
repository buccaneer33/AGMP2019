import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModuleModule } from '../core-module/core-module.module';

import { ModalsOverlayComponent } from './components/modals-overlay/modals-overlay.component';
import {
    ConfirmPopupComponent
} from './components/popup-types/confirm-popup/confirm-popup.component';
import { LoginPopupComponent } from './components/popup-types/login-popup/login-popup.component';
import { PopupHostDirective } from './directive/popup-host.directive';
import { EditPopupComponent } from './components/popup-types/edit-popup/edit-popup.component';

const COMPONENTS = [
    ModalsOverlayComponent
  ];
  const MODALS_TYPES = [
    ConfirmPopupComponent,
    LoginPopupComponent,
    EditPopupComponent
  ];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...MODALS_TYPES,
    PopupHostDirective
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
