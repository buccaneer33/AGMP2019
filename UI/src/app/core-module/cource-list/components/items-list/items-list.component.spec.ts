import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HoursPipe } from 'src/app/core-module/cource-list/pipes/hours.pipe';

import { ItemsListComponent } from './items-list.component';
import { CourceItemComponent } from '../cource-item/cource-item.component';
import { courceListStub } from 'src/assets/dev-stubs/cource-list';

describe('ItemsListComponent test HTML', () => {
    let component: ItemsListComponent;
    let fixture: ComponentFixture<ItemsListComponent>;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            ItemsListComponent,
            CourceItemComponent,
            HoursPipe
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('nativeElement has a div .items-list', () => {
        expect(compiled.querySelector('div .items-list')).toBeTruthy();
    });
    it('nativeElement has a div .items-list__load-more', () => {
        expect(compiled.querySelector('div .items-list__load-more')).toBeTruthy();
    });
});
describe('ItemsListComponent test component', () => {
    let component: ItemsListComponent;
    let fixture: ComponentFixture<ItemsListComponent>;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            ItemsListComponent,
            CourceItemComponent,
            HoursPipe
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('courceList is defined', () => {
        expect(component.courceList).toBeDefined();
    });
    it('courceList is equal courceListStub', () => {
        expect(component.courceList).toEqual(courceListStub);
    });
    it('getEditItem() calls console.log', () => {
        spyOn(window.console, 'log');
        component.getEditItem('event1');
        expect(window.console.log).toHaveBeenCalledWith('event1');
    });
    it('getDeleteItem() calls console.log', () => {
        spyOn(window.console, 'log');
        component.getDeleteItem('event2');
        expect(window.console.log).toHaveBeenCalledWith('event2');
    });
});
