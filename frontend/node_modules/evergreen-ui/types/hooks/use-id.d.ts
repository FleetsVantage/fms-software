/**
 * React hook that always returns an id value that is stable across re-renders
 * @param {string} prefix - a prefix to apply to id
 * @param {string} [explicitId] - an optional explicit value that takes precedence over the generated id
 * @returns {string}
 */
export function useId(prefix: string, explicitId?: string | undefined): string;
