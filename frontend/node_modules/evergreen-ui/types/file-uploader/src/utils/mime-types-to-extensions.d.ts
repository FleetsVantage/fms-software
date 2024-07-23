export default mimeTypesToExtensions;
/**
 * Returns the corresponding file extensions from the provided MimeTypes.
 *
 * Unlike `mimeTypeToExtension`, this will never return `undefined` values. MimeTypes
 * that aren't found are discarded.
 *
 * @param {string[]} mimeTypes
 * @returns {string[]} Mapped file extensions each MimeType
 */
declare function mimeTypesToExtensions(mimeTypes: string[]): string[];
