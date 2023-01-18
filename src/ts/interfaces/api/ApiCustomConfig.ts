import { ApiMethod } from '../../enums/api/ApiMethod';
import { ApiHeaders } from './ApiHeaders';
import { ApiRequestBody } from './ApiRequestBody';

export interface ApiCustomConfig {
  method?: ApiMethod;
  body?: ApiRequestBody;
  headers?: ApiHeaders;
}
