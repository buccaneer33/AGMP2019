import { Component, OnInit } from '@angular/core';
import { AutorisationService } from 'src/app/commons/services/autorisation.service';

@Component({
    selector: 'app-breadcrumps',
    templateUrl: './breadcrumps.component.html',
    styleUrls: ['./breadcrumps.component.scss']
})
export class BreadcrumpsComponent implements OnInit {

    constructor(private autorisation: AutorisationService) { }

    ngOnInit() {
    }

}
