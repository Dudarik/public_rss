import { ResponseApi } from '../interfaces/ResponseApi';

export type ResponseSources = Required<Pick<ResponseApi, 'status' | 'sources'>>;
