import { Options, RequestApi } from '../types';
import { NewsDataItem } from './NewsDataItem';
import { ResponseApi } from './ResponseApi';
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

export interface AbstractLoader {
    getResp: (request: RequestApi, cb: () => void) => void;
    errorHandler: (res: Response) => Response;
    makeUrl: (options: Options, endpoint: string) => string;
    load: (method: string, endpoint: string, callback: (data: ResponseApi) => void, options: Options) => void;
}
