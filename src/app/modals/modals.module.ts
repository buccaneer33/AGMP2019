import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalsOverlayComponent } from './components/modals-overlay/modals-overlay.component';
import {
    ConfirmPopupComponent
} from './components/popup-types/confirm-popup/confirm-popup.component';
import { LoginPopupComponent } from './components/popup-types/login-popup/login-popup.component';
import { PopupHostDirective } from './directive/popup-host.directive';

const COMPONENTS = [
    ModalsOverlayComponent
  ];
  const MODALS_TYPES = [
    ConfirmPopupComponent,
    LoginPopupComponent
  ];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...MODALS_TYPES,
    PopupHostDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ...COMPONENTS
  ],
  entryComponents: [ ...MODALS_TYPES ],
})
export class ModalsModule { }
