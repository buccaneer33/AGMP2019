import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HoursPipe } from 'src/app/cource-list/pipes/hours.pipe';
import { EventEmitter } from '@angular/core';

import { CourceItemComponent } from './cource-item.component';
import { CourceInterface } from 'src/app/cource-list/interfaces/CourceInterface';

const courceItem: CourceInterface = {
    id: 123,
    title: 'Cource Name',
    crationDate: 'Thu, 17 Oct 2019 14:27:09 GMT',
    duration: 21,
    description: 'Description'
};

describe('CourceItemComponent test HTML', () => {
    let component: CourceItemComponent;
    let fixture: ComponentFixture<CourceItemComponent>;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ CourceItemComponent, HoursPipe ],
        })
        .compileComponents();
  }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourceItemComponent);
        component = fixture.componentInstance;
        component.courceItem = courceItem;
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('nativeElement has a div .cource-item', () => {
        expect(compiled.querySelector('div .cource-item')).toBeTruthy();
    });
    it('nativeElement has a div .cource-item__infoblock', () => {
        expect(compiled.querySelector('div .cource-item__infoblock')).toBeTruthy();
    });
    it('nativeElement has a div .cource-item__header', () => {
        expect(compiled.querySelector('div .cource-item__header')).toBeTruthy();
    });
    it('nativeElement has a div .cource-item__title', () => {
        expect(compiled.querySelector('div .cource-item__title')).toBeTruthy();
    });
    it('nativeElement has a div .cource-item__info', () => {
        expect(compiled.querySelector('div .cource-item__info')).toBeTruthy();
    });
    it('nativeElement has a div .icon--clock', () => {
        expect(compiled.querySelector('div .icon--clock')).toBeTruthy();
    });
    it('nativeElement has a div .icon--date', () => {
        expect(compiled.querySelector('div .icon--date')).toBeTruthy();
    });
    it('nativeElement has a div .cource-item__actionblock', () => {
        expect(compiled.querySelector('div .cource-item__actionblock')).toBeTruthy();
    });
    it('nativeElement has a div .btn btn--edit', () => {
        expect(compiled.querySelector('div .btn--edit')).toBeTruthy();
    });
    it('nativeElement has a div .btn btn--delete', () => {
        expect(compiled.querySelector('div .btn--delete')).toBeTruthy();
    });
});
describe('CourceItemComponent test component', () => {
    let component: CourceItemComponent;
    let fixture: ComponentFixture<CourceItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ CourceItemComponent, HoursPipe ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourceItemComponent);
        component = fixture.componentInstance;
        component.courceItem = courceItem;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('courceItem is defined', () => {
        expect(component.courceItem).toBeDefined();
    });
    it('courceItem is equal courceItem', () => {
        expect(component.courceItem).toEqual(courceItem);
    });
    it('chooseDelete is defined', () => {
        expect(component.chooseDelete).toBeDefined();
    });
    it('chooseDelete equal EventEmitter', () => {
        expect(component.chooseDelete).toEqual(new EventEmitter());
    });
    it('chooseEdit is defined', () => {
        expect(component.chooseEdit).toBeDefined();
    });
    it('chooseEdit equal EventEmitter', () => {
        expect(component.chooseEdit).toEqual(new EventEmitter());
    });
    it('editItem() calls chooseEdit', () => {
        spyOn(component.chooseEdit, 'emit');
        component.editItem();
        expect(component.chooseEdit.emit).toHaveBeenCalledWith(component.courceItem.id);
    });
    it('deleteItem() calls chooseEdit', () => {
        spyOn(component.chooseDelete, 'emit');
        component.deleteItem();
        expect(component.chooseDelete.emit).toHaveBeenCalledWith(component.courceItem.id);
    });
});
