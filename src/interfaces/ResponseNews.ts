import { NewsDataItem } from './NewsDataItem';

export interface ResponseNews {
    status: string;
    totalResults: number;
    articles: NewsDataItem[];
}
