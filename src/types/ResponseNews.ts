import { ResponseApi } from '../interfaces/ResponseApi';

export type ResponseNews = Required<Pick<ResponseApi, 'status' | 'totalResults' | 'articles'>>;
