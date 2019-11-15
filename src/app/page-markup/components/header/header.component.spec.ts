import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LogoComponent } from 'src/app/common/components/logo/logo.component';
import { LoginFormComponent } from 'src/app/common/components/login-form/login-form.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            HeaderComponent,
            LogoComponent,
            LoginFormComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('nativeElement has a div .header', () => {
        expect(compiled.querySelector('div .header')).toBeTruthy();
    });
});
