import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
    let component: LogoComponent;
    let fixture: ComponentFixture<LogoComponent>;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ LogoComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LogoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('nativeElement has a div .header-logo', () => {
        expect(compiled.querySelector('div .header-logo')).toBeTruthy();
    });
    it('nativeElement has a div .header-logo__image', () => {
        expect(compiled.querySelector('div .header-logo__image')).toBeTruthy();
    });
    it('nativeElement has a div .header-logo__title', () => {
        expect(compiled.querySelector('div .header-logo__title')).toBeTruthy();
    });
    it('nativeElement has a div .header-logo__title with content "VIDEO COURCE"', () => {
        expect(compiled.querySelector('div .header-logo__title').textContent)
            .toContain('VIDEO COURCE');
    });
});
