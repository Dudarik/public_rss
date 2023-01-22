export interface Handlers {
  [s: string]: (event: Event) => void;
}
