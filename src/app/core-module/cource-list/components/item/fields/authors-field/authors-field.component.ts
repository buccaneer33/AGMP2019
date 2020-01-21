import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
import { Author } from '../../../../models/author';
import { CourceService } from '../../../../services/cource.service';
import { Observable } from 'rxjs';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
    selector: 'app-authors-field',
    templateUrl: './authors-field.component.html',
    styleUrls: ['./authors-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AuthorsFieldComponent),
            multi: true
        }
    ]
})
export class AuthorsFieldComponent extends FormFieldComponent implements OnInit {

    authors$: Observable<Author[]>;

    constructor(
        private courceSrv: CourceService,
        private config: NgSelectConfig
        ) {
            super();
         }

    ngOnInit() {
        this.authors$ = this.courceSrv.getAuthors();
        this.config.notFoundText = 'Custom not found';
        this.config.loadingText = 'loading...';
        this.config.placeholder = 'Enter author';
    }
}
