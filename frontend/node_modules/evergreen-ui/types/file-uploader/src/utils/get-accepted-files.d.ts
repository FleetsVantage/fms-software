export default getAcceptedFiles;
/**
 * Returns a list of accepted files based on the provided options
 * @param {File[]} files
 * @param {import('./split-files').SplitFilesOptions | undefined} options
 * @returns {File[]}
 */
declare function getAcceptedFiles(files: File[], options: import('./split-files').SplitFilesOptions | undefined): File[];
