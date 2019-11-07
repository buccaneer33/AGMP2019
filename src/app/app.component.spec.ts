import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_DECLARATIONS } from 'src/app/app.declarations';
import { FormsModule } from '@angular/forms';
import { HoursPipe } from 'src/app/cource-list/pipes/hours.pipe';

describe('AppComponent test HTML', () => {

    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;
    let compiled;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [
                AppComponent,
                APP_DECLARATIONS,
                HoursPipe
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });
    it(`should have as title 'AGMP2019'`, () => {
        expect(app.title).toEqual('AGMP2019');
    });
    it('nativeElement has a div .root-wrapper', () => {
        expect(compiled.querySelector('div .root-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .header', () => {
        expect(compiled.querySelector('div .header')).toBeTruthy();
    });
    it('nativeElement has a div .header__wrapper', () => {
        expect(compiled.querySelector('div .header__wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .main', () => {
        expect(compiled.querySelector('div .main')).toBeTruthy();
    });
    it('nativeElement has a div .main__breadcrumps', () => {
        expect(compiled.querySelector('div .main__breadcrumps')).toBeTruthy();
    });
    it('nativeElement has a div .main__breadcrumps-wrapper', () => {
        expect(compiled.querySelector('div .main__breadcrumps-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .main__content', () => {
        expect(compiled.querySelector('div .main__content')).toBeTruthy();
    });
    it('nativeElement has a div .main__content-wrapper', () => {
        expect(compiled.querySelector('div .main__content-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .main__tool-block', () => {
        expect(compiled.querySelector('div .main__tool-block')).toBeTruthy();
    });
    it('nativeElement has a div .main__tool-wrapper', () => {
        expect(compiled.querySelector('div .main__tool-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .main__tool-wrapper', () => {
        expect(compiled.querySelector('div .main__tool-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .main__tool-button', () => {
        expect(compiled.querySelector('div .main__tool-button')).toBeTruthy();
    });
    it('nativeElement has a div .main__content-block', () => {
        expect(compiled.querySelector('div .main__content-block')).toBeTruthy();
    });
    it('nativeElement has a div .footer', () => {
        expect(compiled.querySelector('div .footer')).toBeTruthy();
    });
    it('nativeElement has a div .footer__wrapper', () => {
        expect(compiled.querySelector('div .footer__wrapper')).toBeTruthy();
    });
});
