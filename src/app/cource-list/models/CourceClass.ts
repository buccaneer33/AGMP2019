import { CourceInterface } from '../interfaces/CourceInterface';

export class CourceClass implements CourceInterface {
    public id: string | number;
    public title: string = 'Title';
    public crationDate: string = '12-12-12';
    public duration: string | number = 245;
    public description: string = 'Description';
}
