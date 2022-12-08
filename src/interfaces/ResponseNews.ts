import { NewsDataItem } from './NewsDataItem';
import { ResponseApi } from './ResponseApi';

export interface ResponseNews extends ResponseApi {
    status: string;
    totalResults: number;
    articles: NewsDataItem[];
}
