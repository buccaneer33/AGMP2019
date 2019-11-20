import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appCourceDate]'
})
export class CourceDateDirective implements OnInit {

    @Input('appCourceDate') inputDate: any;

    constructor(private elRef: ElementRef) { }

    ngOnInit() {
        if ( this.inputDate ) {

            let crationDate;
            let currentDate;
            let limitDate;

            crationDate = new Date(this.inputDate);
            crationDate = crationDate.getTime();

            currentDate = new Date();
            currentDate = currentDate.getTime();

            limitDate = new Date();
            limitDate = limitDate.getTime();
            limitDate = limitDate - ((3600 * 24 * 1000) * 14);

            if (crationDate < currentDate && crationDate >= limitDate) {
                this.elRef.nativeElement.style.borderColor = 'green';
                this.elRef.nativeElement.style.borderWidth = 'medium';
            }
            if (crationDate > currentDate) {
                this.elRef.nativeElement.style.borderColor = 'blue';
                this.elRef.nativeElement.style.borderWidth = 'medium';
            }
        }
    }
}
