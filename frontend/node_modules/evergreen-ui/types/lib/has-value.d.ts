export default hasValue;
/**
 * Returns whether or not the value is non-nil and non-empty
 * @param {string | any[] | null | undefined} value Value to check
 * @returns {value is string | any[]}
 */
declare function hasValue(value: string | any[] | null | undefined): value is string | any[];
