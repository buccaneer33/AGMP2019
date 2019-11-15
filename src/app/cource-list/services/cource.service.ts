import { Injectable } from '@angular/core';
import { CourceInterface } from 'src/app/cource-list/interfaces/CourceInterface';
import { courceListStub } from 'src/assets/dev-stubs/cource-list';

@Injectable({
    providedIn: 'root'
})
export class CourceService {

    constructor() { }

    getCourceList(): CourceInterface[] {
        return courceListStub;
    }

    createCource() {
        console.log('createCource');
     }

    getCourceById(list: CourceInterface[], id: number | string): CourceInterface {
        if (id && id !== null ) {
            let search;
            search = list.find(obj => obj.id === id);
            return search;
        } else {
            return list[0];
        }
    }

    updateCource() {
        console.log('updateCource');
    }

    removeCource(list: CourceInterface[], id: number): CourceInterface[] {
        if (id && id !== null ) {
            let search = list.slice(0);
            search = search.filter(obj => obj.id !== id);
            return search;
        } else {
            return list;
        }
    }

    getCourceByTitle(list: CourceInterface[], name: string): CourceInterface[] {
        if (name && name !== null && name !== '') {
            let search = list;
            const exp = new RegExp(name, 'gi');
            search = search.filter(item => (exp.test(item.title)));
            return search;
        } else {
            return list;
        }
    }
}
