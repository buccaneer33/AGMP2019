import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumpsComponent } from './breadcrumps.component';

describe('BreadcrumpsComponent', () => {
    let component: BreadcrumpsComponent;
    let fixture: ComponentFixture<BreadcrumpsComponent>;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ BreadcrumpsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BreadcrumpsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(fixture).toBeTruthy();
        expect(component).toBeTruthy();
    });
    it('nativeElement has a article with content "Cources"', () => {
        expect(compiled.querySelector('article .breadcrumps').textContent).toContain('Cources');
    });
});
