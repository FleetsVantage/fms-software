"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const noop = () => { };
const style = {
    position: 'fixed',
    top: -500,
    left: -500,
    width: 100,
    overflowY: 'scroll'
};
const ScrollbarSize = (0, react_1.memo)(function ScrollbarSize({ handleScrollbarSize = noop }) {
    const innerRef = (0, react_1.useRef)();
    const outerRef = (0, react_1.useRef)();
    const [widths, setWidths] = (0, react_1.useState)({ innerWidth: null, outerWidth: null });
    (0, react_1.useEffect)(() => {
        const newWidths = { innerWidth: null, outerWidth: null };
        if (innerRef.current) {
            newWidths.innerWidth = innerRef.current.getBoundingClientRect().width;
        }
        if (outerRef.current) {
            newWidths.outerWidth = outerRef.current.getBoundingClientRect().width;
        }
        setWidths(newWidths);
    }, []);
    (0, react_1.useEffect)(() => {
        if (widths.innerWidth && widths.outerWidth) {
            handleScrollbarSize(widths.outerWidth - widths.innerWidth);
        }
    }, [widths, handleScrollbarSize]);
    return (react_1.default.createElement("div", { ref: outerRef, "aria-hidden": true, style: style },
        react_1.default.createElement("div", { ref: innerRef })));
});
ScrollbarSize.propTypes = {
    /**
     * Returns the size of the scrollbar by creating a hidden fixed div.
     */
    handleScrollbarSize: prop_types_1.default.func
};
exports.default = ScrollbarSize;
