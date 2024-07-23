import { BoxPropValue } from './types/enhancers';
type CacheValue = BoxPropValue;
export declare function get(property: string, value: CacheValue, selectorHead?: string): string | undefined;
export declare function set(property: string, value: CacheValue | object, className: string, selectorHead?: string): void;
export declare function entries(): [string, string][];
type CacheEntry = [string, string];
export declare function hydrate(newEntries: CacheEntry[]): void;
export declare function clear(): void;
export {};
