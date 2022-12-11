export type Options = { [optName: string]: string | null };

// Если нужно протестировать использование Partial,
// можно закоментировать первую строку и раскоментировать шестую и седьмую

// type nonPartialOptions = { [optName: string]: string };
// export type Options = Partial<Options>
