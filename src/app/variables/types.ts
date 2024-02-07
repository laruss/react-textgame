type SimpleValueType = string | number | boolean;
type SimpleArrayType = SimpleValueType[];
type SimpleObjectType = { [key: string]: SimpleValueType | SimpleArrayType | SimpleObjectType };

export interface Variables { [key: string]: SimpleObjectType | SimpleArrayType | SimpleValueType | CallableFunction }
