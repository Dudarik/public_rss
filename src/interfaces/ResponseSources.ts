import { ResponseApi } from './ResponseApi';
import { SourcesDataItem } from './SourcesDataItem';

export interface ResponseSources extends ResponseApi {
    status: string;
    sources: SourcesDataItem[];
}
