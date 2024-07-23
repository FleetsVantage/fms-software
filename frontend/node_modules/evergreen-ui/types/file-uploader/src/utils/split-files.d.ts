export default splitFiles;
export type SplitFilesOptions = {
    acceptedMimeTypes: string[] | undefined;
    /**
     * Current count of files used for validating whether the dropped files are over the `maxFiles` limit
     */
    currentFileCount: number | undefined;
    maxFiles: number | undefined;
    maxSizeInBytes: number | undefined;
};
export type SplitFilesResult = {
    accepted: File[];
    rejected: import('./get-file-rejections').FileRejection[];
};
/**
 * @typedef {object} SplitFilesOptions
 * @property {string[] | undefined} acceptedMimeTypes
 * @property {number | undefined} currentFileCount Current count of files used for validating whether the dropped files are over the `maxFiles` limit
 * @property {number | undefined} maxFiles
 * @property {number | undefined} maxSizeInBytes
 */
/**
 * @typedef {object} SplitFilesResult
 * @property {File[]} accepted
 * @property {import('./get-file-rejections').FileRejection[]} rejected
 */
/**
 * Returns separate arrays for accepted and rejected files based on the provided options.
 * This should be used for accepting and rejecting files on drop
 * @param {File[]} files
 * @param {SplitFilesOptions | undefined} options
 * @returns {SplitFilesResult}
 */
declare function splitFiles(files: File[], options: SplitFilesOptions | undefined): SplitFilesResult;
