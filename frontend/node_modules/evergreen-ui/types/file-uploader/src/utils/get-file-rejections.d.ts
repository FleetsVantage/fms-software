export default getFileRejections;
export type FileRejection = {
    file: File;
    /**
     * Informative message to display to the user for why the file was rejected
     */
    message: string;
    /**
     * Error code/enum to denote why the file was rejected
     */
    reason: string;
};
/**
 * @typedef {object} FileRejection
 * @property {File} file
 * @property {string} message Informative message to display to the user for why the file was rejected
 * @property {string} reason Error code/enum to denote why the file was rejected
 */
/**
 * Returns a list of objects containing rejected files and why they were rejected based on the provided options
 * @param {File[]} files
 * @param {import('./split-files').SplitFilesOptions | undefined} options
 * @returns {FileRejection[]}
 */
declare function getFileRejections(files: File[], options: import('./split-files').SplitFilesOptions | undefined): FileRejection[];
