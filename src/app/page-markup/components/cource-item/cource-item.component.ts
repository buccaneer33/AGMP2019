import { Component, OnInit, Input } from '@angular/core';
import { CourceInterface } from 'src/app/page-markup/interfaces/cource.interface';

@Component({
  selector: 'app-cource-item',
  templateUrl: './cource-item.component.html',
  styleUrls: ['./cource-item.component.scss']
})
export class CourceItemComponent implements OnInit {

@Input()
    courceItem: CourceInterface;

  constructor() { }

  ngOnInit() {
  }

}
