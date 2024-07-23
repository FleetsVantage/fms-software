"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForceUpdate = void 0;
const react_1 = require("react");
function useForceUpdate() {
    // eslint-disable-next-line no-unused-vars
    const [_, setValue] = (0, react_1.useState)();
    return (0, react_1.useCallback)(() => setValue({}), [setValue]);
}
exports.useForceUpdate = useForceUpdate;
