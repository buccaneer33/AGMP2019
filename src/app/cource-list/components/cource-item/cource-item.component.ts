import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourceInterface } from 'src/app/cource-list/interfaces/CourceInterface';

@Component({
  selector: 'app-cource-item',
  templateUrl: './cource-item.component.html',
  styleUrls: ['./cource-item.component.scss']
})
export class CourceItemComponent implements OnInit {

@Input() courceItem: CourceInterface;
@Output() chooseDelete: EventEmitter<number|string> = new EventEmitter<number|string>();
@Output() chooseEdit: EventEmitter<number|string> = new EventEmitter<number|string>();


  constructor() { }

  ngOnInit() {
  }
    editItem() {
        this.chooseEdit.emit(this.courceItem.id);
    }
    deleteItem() {
        this.chooseDelete.emit(this.courceItem.id);
    }
}
