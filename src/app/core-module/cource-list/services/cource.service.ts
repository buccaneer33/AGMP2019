import { Injectable } from '@angular/core';
import { CourceInterface } from 'src/app/core-module/cource-list/interfaces/CourceInterface';
import { courceListStub } from 'src/assets/dev-stubs/cource-list';

@Injectable({
    providedIn: 'root'
})
export class CourceService {

    private courceList: CourceInterface[] = courceListStub.slice(0);

    constructor() {
     }

    getCourceList(filter?: string): CourceInterface[] {
        if (filter) {
            const exp = new RegExp(filter, 'i');
            return this.courceList.filter(obj => exp.test(obj.title));
        }
        return this.courceList;
    }

    createCource() {
        console.log('createCource');
     }

    getCourceById( id: number | string): CourceInterface {
        return this.courceList.find(obj => obj.id === id);
    }

    updateCource() {
        console.log('updateCource');
    }

    removeCource(id: number | string) {
        const index = this.courceList.findIndex(obj => obj.id === id);
        if (index >= 0) {
            this.courceList = this.courceList.slice(0);
            this.courceList.splice(index, 1);
        }
    }
}
