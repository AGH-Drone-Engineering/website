export {};

declare global {
    type Defined<T> = Exclude<T, undefined | null>;
}
