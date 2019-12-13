import { Injectable } from '@angular/core';
import {
    CourceInterface,
    AuthorInterface
} from 'src/app/core-module/cource-list/interfaces/CourceInterface';

interface CourceApiInterface {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: AuthorInterface[];
    isTopRated: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class ConverterService {

    constructor() { }

    courceListApi2App(list: CourceApiInterface[]): CourceInterface[] {
        const cources: CourceInterface[] = [];
        list.forEach(item => {
            const cource: CourceInterface = {
                id: item.id,
                title: item.name,
                crationDate: item.date,
                duration: item.length,
                topRated: item.isTopRated,
                description: item.description,
                author: item.authors
            };
            cources.push(cource);
        });
        return cources;
    }

    convertApi2App(item: CourceApiInterface): CourceInterface {
        const cource: CourceInterface = {
            id: item.id,
            title: item.name,
            crationDate: item.date,
            duration: item.length,
            topRated: item.isTopRated,
            description: item.description,
            author: item.authors
        };
        return cource;
    }

    convertApp2Api(item: CourceInterface): CourceApiInterface {
        const cource: CourceApiInterface = {
            id: Number(item.id),
            name: item.title,
            date: item.crationDate,
            length: Number(item.duration),
            description: item.description,
            authors: item.author,
            isTopRated: item.topRated,
        };
        return cource;
    }
}
