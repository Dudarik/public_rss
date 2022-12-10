import { ResponseApi } from '../interfaces/ResponseApi';

// export interface ResponseNews extends ResponseApi {
//     status: string;
//     totalResults: number;
//     articles: NewsDataItem[];
// }
export type ResponseNews = Pick<ResponseApi, 'status' | 'totalResults' | 'articles'>;
