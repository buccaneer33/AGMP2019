import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter, ChangeDetectionStrategy
} from '@angular/core';
import { CourceInterface } from 'src/app/core-module/cource-list/interfaces/CourceInterface';

@Component({
  selector: 'app-cource-item',
  templateUrl: './cource-item.component.html',
  styleUrls: ['./cource-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourceItemComponent implements OnInit {

@Input() courceItem: CourceInterface;
@Output() chooseDelete: EventEmitter<CourceInterface> = new EventEmitter<CourceInterface>();
@Output() chooseEdit: EventEmitter<CourceInterface> = new EventEmitter<CourceInterface>();

    public newCource: boolean;

    constructor() { }

    ngOnInit() {
    }
    editItem() {
        this.chooseEdit.emit(this.courceItem);
    }
    deleteItem() {
        this.chooseDelete.emit(this.courceItem);
    }
}
