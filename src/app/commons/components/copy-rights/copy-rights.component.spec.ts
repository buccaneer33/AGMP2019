import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyRightsComponent } from './copy-rights.component';

describe('CopyRightsComponent', () => {
    let component: CopyRightsComponent;
    let fixture: ComponentFixture<CopyRightsComponent>;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ CopyRightsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CopyRightsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('nativeElement has a div with content', () => {
        expect(compiled.querySelector('div').textContent)
        .toContain('Copyrights Videocources. All rights reserved.');
    });
});
