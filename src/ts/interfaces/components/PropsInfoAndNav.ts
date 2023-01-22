import { Store } from '../store';

export interface PropsInfoAndNav {
  countTitleText: string;
  storeField: keyof Store;
  storeFieldCurrentPage: keyof Store;
  storeFieldPages: keyof Store;
  btnPrevPageType: string;
  btnNextPageType: string;
}
