import { NewsDataItem } from './NewsDataItem';
import { SourcesDataItem } from './SourcesDataItem';

export interface ResponseApi {
    status: string;
    totalResults?: number;
    sources?: SourcesDataItem[];
    articles?: NewsDataItem[];
}
