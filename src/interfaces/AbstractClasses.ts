import { NewsDataItem } from './NewsDataItem';
import { SourcesDataItem } from './SourcesDataItem';

export interface AbstractNews {
    draw: (data: NewsDataItem[]) => void;
}

export interface AbstractSources {
    draw: (data: SourcesDataItem[]) => void;
}
