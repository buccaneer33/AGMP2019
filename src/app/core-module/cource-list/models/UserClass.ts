import { UserInterface } from '../interfaces/UserInterface';

export class UserClass implements UserInterface {
    public id: string | number;
    public firstName: string;
    public lastName: string;
}
