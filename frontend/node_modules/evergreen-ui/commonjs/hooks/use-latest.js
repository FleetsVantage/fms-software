"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLatest = void 0;
const react_1 = __importDefault(require("react"));
/**
 * A React Ref that stores the latest value it is given (updated in useEffect's callback).
 * @return {{ readonly current: any }}
 */
function useLatest(value) {
    const ref = react_1.default.useRef(value);
    ref.current = value;
    return ref;
}
exports.useLatest = useLatest;
