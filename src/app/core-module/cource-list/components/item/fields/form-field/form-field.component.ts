import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements ControlValueAccessor {

    @Input() control: FormControl;
    @Input() placeholder: string;

    private _value;

    public onChange: any = () => {};
    public onTouched: any = () => {};

    get value() {
        return this._value;
    }

    @Input()
    set value(val) {
        this._value = val;
        this.onChange(this._value);
    }

    public writeValue(val): void {
        this._value = val;
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}
