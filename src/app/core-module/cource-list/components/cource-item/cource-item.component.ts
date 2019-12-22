import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter, ChangeDetectionStrategy
} from '@angular/core';
import { Cource } from '../../models/cource';

@Component({
    selector: 'app-cource-item',
    templateUrl: './cource-item.component.html',
    styleUrls: ['./cource-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceItemComponent implements OnInit {
    @Input() courceItem: Cource;
    @Output() chooseDelete: EventEmitter<Cource> = new EventEmitter<Cource>();

    ngOnInit() {
    }

    deleteItem() {
        this.chooseDelete.emit(this.courceItem);
    }
}
