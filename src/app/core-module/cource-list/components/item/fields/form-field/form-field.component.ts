import { Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export class FormFieldComponent implements ControlValueAccessor {

    @Input() control;
    @Input() placeholder: string;

    protected value;

    constructor() { }

    public onChange: any = () => {};
    public onTouched: any = () => {};

    @Input()
    public writeValue(val): void {
        this.value = val;
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    updateValue(val) {
        this.value = val;
        this.onChange(val);
        this.onTouched();
    }
}
