import { NewsDataItem } from './NewsDataItem';
import { ResponseNews } from './ResponseNews';
import { ResponseSources } from './ResponseSources';
import { SourcesDataItem } from './SourcesDataItem';

export interface AbstractNews {
    draw: (data: NewsDataItem[]) => void;
}

export interface AbstractSources {
    draw: (data: SourcesDataItem[]) => void;
}

export interface AbstractAppView {
    drawNews: (data: ResponseNews) => void;
    drawSources: (data: ResponseSources) => void;
}
