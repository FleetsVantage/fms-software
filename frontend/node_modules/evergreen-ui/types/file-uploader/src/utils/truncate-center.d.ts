export default truncateCenter;
/**
 * Truncates a string in the center with ellipsis, if needed
 * @param {string} value Value to truncate
 * @param {number | undefined} maximumChars Maximum number of characters (including the ellipsis) to show
 * @returns {string}
 */
declare function truncateCenter(value: string, maximumChars?: number | undefined): string;
