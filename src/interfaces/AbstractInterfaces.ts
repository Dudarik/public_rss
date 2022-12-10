import { Callback } from './Callback';

export interface IAbstractAppController<T, U> {
    getSources(callback: Callback<T>): void;
    getNews(e: Event, callback: Callback<U>): void;
}
