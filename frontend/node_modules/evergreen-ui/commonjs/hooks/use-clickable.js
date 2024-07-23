"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickable = void 0;
const react_1 = require("react");
const safe_invoke_1 = __importDefault(require("../lib/safe-invoke"));
const use_latest_1 = require("./use-latest");
/**
 * React hook that returns bind props for a clickable component.
 * When the component has focus, Enter and space activate it
 */
function useClickable({ disabled = false, onKeyDown: onKeyDownHandler, tabIndex = 0 } = {}) {
    const onKeyDownRef = (0, use_latest_1.useLatest)(onKeyDownHandler);
    const onKeyDown = (0, react_1.useCallback)(event => {
        (0, safe_invoke_1.default)(onKeyDownRef.current, event);
        if (event.defaultPrevented)
            return;
        if (disabled)
            return;
        if (event.metaKey)
            return;
        if (event.target !== event.currentTarget)
            return;
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
            // "Spacebar" for IE11 support
            // Prevent the default action to stop scrolling when space is pressed
            event.preventDefault();
            event.currentTarget.click();
        }
    }, 
    // onKeyDownRef is a ref, but eslint can't figure that out
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled]);
    return {
        // TODO import useFocusable as well (needs to be focusable)
        tabIndex: disabled ? -1 : tabIndex,
        onKeyDown
    };
}
exports.useClickable = useClickable;
