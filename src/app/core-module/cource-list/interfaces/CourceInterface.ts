export interface CourceInterface {
    id: string | number;
    title: string;
    crationDate: string;
    duration: string | number;
    topRated: boolean;
    description: string;
    author: AuthorInterface[];
}
export interface AuthorInterface {
    id: number;
    name: string;
}
