import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appCourceDate]'
})
export class CourceDateDirective implements OnInit {

    @Input() inputDate;

    private crationDate;
    private currentDate;
    private limitDate;

    constructor(private elRef: ElementRef) { }

    ngOnInit() {
        if ( this.inputDate ) {

            this.crationDate = new Date(this.inputDate);
            this.crationDate = this.crationDate.getTime();

            this.currentDate = new Date();
            this.currentDate = this.currentDate.getTime();

            this.limitDate = new Date();
            this.limitDate = this.limitDate.getTime();
            this.limitDate = this.limitDate - ((3600 * 24 * 1000) * 14);

            if (this.crationDate < this.currentDate && this.crationDate >= this.limitDate) {
                this.elRef.nativeElement.style.borderColor = 'green';
                this.elRef.nativeElement.style.borderWidth = 'medium';
            }
            if (this.crationDate > this.currentDate) {
                this.elRef.nativeElement.style.borderColor = 'blue';
                this.elRef.nativeElement.style.borderWidth = 'medium';
            }
        }
    }
}
