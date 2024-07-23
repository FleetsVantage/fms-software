"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_isempty_1 = __importDefault(require("lodash.isempty"));
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
const getFileDataTransferItems = dataTransferList => {
    if ((0, lodash_isempty_1.default)(dataTransferList)) {
        return [];
    }
    return [...dataTransferList].filter(dataTransferItem => dataTransferItem.kind === 'file');
};
exports.default = getFileDataTransferItems;
