import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent test HTML', () => {
    let component: SearchBarComponent;
    let fixture: ComponentFixture<SearchBarComponent>;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ SearchBarComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('nativeElement has a div .search-bar', () => {
        expect(compiled.querySelector('div .search-bar')).toBeTruthy();
    });
    it('nativeElement has a div .search-bar__input', () => {
        expect(compiled.querySelector('div .search-bar__input')).toBeTruthy();
    });
    it('nativeElement has a div .search-bar__button', () => {
        expect(compiled.querySelector('div .search-bar__button')).toBeTruthy();
    });
});
describe('SearchBarComponent test component', () => {
    let component: SearchBarComponent;
    let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ FormsModule ],
        declarations: [ SearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('searchString is undefined', () => {
        expect(component.searchString).toBeUndefined();
    });
    it('searchClick calls console.log with undefined', () => {
        spyOn(window.console, 'log');
        component.searchClick();
        expect(window.console.log).toHaveBeenCalledWith(undefined);
    });
    it('searchClick calls console.log with qwerty', () => {
        component.searchString = 'qwerty';
        spyOn(window.console, 'log');
        component.searchClick();
        expect(window.console.log).toHaveBeenCalledWith('qwerty');
    });
});
