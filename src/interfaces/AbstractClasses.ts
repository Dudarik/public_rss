import { NewsDataItem } from './NewsDataItem';

export interface AbstractNews {
    draw: (data: NewsDataItem[]) => void;
}
