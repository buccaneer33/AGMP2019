import { Injectable } from '@angular/core';
import { CourceInterface } from 'src/app/core-module/cource-list/interfaces/CourceInterface';
import { courceListStub } from 'src/assets/dev-stubs/cource-list';

@Injectable({
    providedIn: 'root'
})
export class CourceService {

    public courceList: CourceInterface[];

    constructor() {
        this.getCourceList();
     }

    getCourceList() {
        this.courceList = courceListStub.slice(0);
    }

    createCource() {
        console.log('createCource');
     }

    getCourceById( id: number | string): CourceInterface {
        if (id && id !== null && id !== '') {
            let search;
            search = this.courceList.find(obj => obj.id === id);
            return search;
        }
    }

    updateCource() {
        console.log('updateCource');
    }

    removeCource(id: number | string): CourceInterface[] {
        if (id && id !== null && id !== '') {
            const search = this.courceList.slice(0);
            this.courceList = search.filter(obj => obj.id !== id);
            return this.courceList;
        }
    }

    getCourceByTitle(name?: string): CourceInterface[] {
        if (name && name !== null && name !== '') {
            let search = this.courceList.slice(0);
            const exp = new RegExp(name, 'gi');
            search = search.filter(item => (exp.test(item.title)));
            return search;
        } else {
            return this.courceList;
        }
    }
}
