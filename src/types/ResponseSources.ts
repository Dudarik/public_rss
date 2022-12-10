import { ResponseApi } from '../interfaces/ResponseApi';
// import { SourcesDataItem } from './SourcesDataItem';

// export interface ResponseSources extends ResponseApi {
//     status: string;
//     sources: SourcesDataItem[];
// }

export type ResponseSources = Pick<ResponseApi, 'status' | 'sources'>;
