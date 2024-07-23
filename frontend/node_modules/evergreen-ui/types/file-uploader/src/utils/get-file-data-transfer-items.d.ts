export default getFileDataTransferItems;
/**
 * Converts `DataTransferItemList` to an array of `DataTransferItem` objects filtered by the 'file' `kind`
 *
 * The other possible `kind` is 'string', but we don't really care about text being dragged onto
 * the dropzone
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/kind
 *
 * @param {DataTransferItemList} dataTransferList
 * @returns {DataTransferItem[]}
 */
declare function getFileDataTransferItems(dataTransferList: DataTransferItemList): DataTransferItem[];
