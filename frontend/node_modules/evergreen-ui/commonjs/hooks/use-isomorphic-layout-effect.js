"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsomorphicLayoutEffect = void 0;
const react_1 = require("react");
/**
 * A hook for scheduling a layout effect with a fallback to a regular effect for non-browser environments (ssr)
 */
exports.useIsomorphicLayoutEffect = typeof document !== 'undefined' ? react_1.useLayoutEffect : react_1.useEffect;
