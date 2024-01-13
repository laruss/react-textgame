export type PossibleTypes = string | number | boolean | null | [] | string[] | undefined | CallableFunction;

export interface Variables { [key: string]: PossibleTypes | Variables }
