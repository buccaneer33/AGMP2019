import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
    let component: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ LoginFormComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('nativeElement has a div .header-login-form', () => {
        expect(compiled.querySelector('div .header-login-form')).toBeTruthy();
    });
    it('nativeElement has a div .header-login-form__input-block', () => {
        expect(compiled.querySelector('div .header-login-form__input-block')).toBeTruthy();
    });
    it('nativeElement has a input .header-login-form__input', () => {
        expect(compiled.querySelector('.header-login-form__input')).toBeTruthy();
    });
    it('nativeElement has a div .header-login-form__button-block', () => {
        expect(compiled.querySelector('div .header-login-form__button-block')).toBeTruthy();
    });
    it('nativeElement has a div header-login-form__button with content', () => {
        expect(compiled.querySelector('div .header-login-form__button').textContent)
        .toContain('Log Off');
    });
});
