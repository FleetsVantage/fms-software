"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ui_box_1 = require("ui-box");
function extractStyles(options = {}) {
    const { cache, styles } = (0, ui_box_1.extractStyles)();
    const evergreenCache = {
        uiBoxCache: cache
    };
    const scriptProps = {
        type: 'application/json',
        id: 'evergreen-hydrate',
        dangerouslySetInnerHTML: { __html: JSON.stringify(evergreenCache) }
    };
    if (options.nonce) {
        scriptProps.nonce = options.nonce;
    }
    return {
        css: styles,
        cache: evergreenCache,
        hydrationScript: react_1.default.createElement("script", Object.assign({}, scriptProps))
    };
}
exports.default = extractStyles;
