"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMergedRef = void 0;
const react_1 = __importDefault(require("react"));
function setRef(ref, node) {
    if (typeof ref === 'function') {
        ref(node);
    }
    else if (ref && 'current' in ref) {
        ref.current = node;
    }
}
/**
 * React hook that merges up to two React refs into a single memoized function React Ref
 * @param {import('react').Ref<any>} refA
 * @param {import('react').Ref<any>} [refB]
 */
function useMergedRef(refA, refB) {
    return react_1.default.useMemo(() => {
        if (!refA && !refB) {
            return null;
        }
        return node => {
            setRef(refA, node);
            setRef(refB, node);
        };
    }, [refA, refB]);
}
exports.useMergedRef = useMergedRef;
