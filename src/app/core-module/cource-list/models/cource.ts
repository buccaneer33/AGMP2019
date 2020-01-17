import { Author } from './author';
export interface Cource {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: Author[];
    isTopRated: boolean;
}
