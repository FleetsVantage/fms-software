export default rebaseFiles;
export type RebaseFilesOptions = {
    acceptedMimeTypes: string[] | undefined;
    maxFiles: number | undefined;
    maxSizeInBytes: number | undefined;
};
export type RebaseFilesResult = {
    accepted: File[];
    rejected: import('./get-file-rejections').FileRejection[];
};
/**
 * @typedef {object} RebaseFilesOptions
 * @property {string[] | undefined} acceptedMimeTypes
 * @property {number | undefined} maxFiles
 * @property {number | undefined} maxSizeInBytes
 */
/**
 * @typedef {object} RebaseFilesResult
 * @property {File[]} accepted
 * @property {import('./get-file-rejections').FileRejection[]} rejected
 */
/**
 * Returns separate arrays for accepted and rejected files based on the provided options, similar to
 * `splitFiles`. This function should be used for rebasing files on removal (i.e. for removing files
 * from the `rejected` array when they are no longer over maximum limit, if there is one)
 * @param {File[]} files
 * @param {RebaseFilesOptions | undefined} options
 * @returns {RebaseFilesResult}
 */
declare function rebaseFiles(files: File[], options: RebaseFilesOptions | undefined): RebaseFilesResult;
