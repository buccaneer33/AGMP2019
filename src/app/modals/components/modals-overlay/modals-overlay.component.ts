import {
    Component,
    OnInit,
    ComponentFactoryResolver,
    ViewChild,
    ElementRef,
    ChangeDetectorRef
} from '@angular/core';
import { ModalsServiceService } from 'src/app/modals/services/modals-service.service';
import {
    ConfirmPopupComponent
} from 'src/app/modals/components/popup-types/confirm-popup/confirm-popup.component';
import { PopupHostDirective } from 'src/app/modals/directive/popup-host.directive';
import { AbstractPopupComponent } from '../popup-types/AbstractPopupComponent';
import { PopupDisplayDataInterface } from 'src/app/modals/models/PopupDisplayDataInterface';
import {
    LoginPopupComponent
} from 'src/app/modals/components/popup-types/login-popup/login-popup.component';
import { EditPopupComponent } from '../popup-types/edit-popup/edit-popup.component';

@Component({
    selector: 'app-modals-overlay',
    templateUrl: './modals-overlay.component.html',
    styleUrls: ['./modals-overlay.component.scss']
})
export class ModalsOverlayComponent implements OnInit {

    @ViewChild (PopupHostDirective)
    popupHost: PopupHostDirective;

    public showOverlay: boolean = false;

    POPUP_TYPES: object = {
        'confirm-popup': ConfirmPopupComponent,
        'login-popup': LoginPopupComponent,
        'edit-popup': EditPopupComponent
    };

    constructor(
        private modalsService: ModalsServiceService,
        private componentFactoryResolver: ComponentFactoryResolver,
        private changeDetector: ChangeDetectorRef
        ) { }

    ngOnInit() {
        this.modalsService.newPopup.subscribe(data => {
            this.showPopup(data);
        });
    }

    showPopup(popupObj: PopupDisplayDataInterface) {
        if (this.POPUP_TYPES.hasOwnProperty(popupObj.displayComponent)) {
            popupObj.displayComponent = this.POPUP_TYPES[popupObj.displayComponent];
            this.showOverlay = true;
            this.loadPopup(popupObj);
        }
    }

    hideOverlay() {
        this.showOverlay = false;
        const viewContainerRef = this.popupHost.viewContainerRef;
        viewContainerRef.clear();
    }

    loadPopup(popupObj: PopupDisplayDataInterface) {
        if (popupObj) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
                popupObj.displayComponent
            );
            const viewContainerRef = this.popupHost.viewContainerRef;
            viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(componentFactory);
            (<AbstractPopupComponent>componentRef.instance).data
            = popupObj;
            (<AbstractPopupComponent>componentRef.instance).hideOverlay
            = this.hideOverlay.bind(this);
        }
    }
}
