// export type Callback = <T>(d?: T) => void;
export interface Callback<T> {
    (d?: T): void;
}
