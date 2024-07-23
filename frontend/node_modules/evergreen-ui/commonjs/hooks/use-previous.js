"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrevious = void 0;
const react_1 = __importDefault(require("react"));
/**
 * React hook that returns the previous value
 * @param {any} value
 */
function usePrevious(value, initialValue) {
    const ref = react_1.default.useRef(initialValue);
    // Store current value in ref, only update if the value changes
    react_1.default.useEffect(() => {
        ref.current = value;
    }, [value]);
    // Return previous value (happens before update in useEffect above)
    return ref.current;
}
exports.usePrevious = usePrevious;
