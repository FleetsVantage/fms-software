"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const react_dom_1 = require("react-dom");
const hooks_1 = require("../../hooks");
// Based on https://github.com/mantinedev/mantine/blob/master/src/mantine-core/src/Portal/Portal.tsx
const Portal = props => {
    const { children } = props;
    const [mounted, setMounted] = (0, react_1.useState)(false);
    const ref = (0, react_1.useRef)();
    (0, hooks_1.useIsomorphicLayoutEffect)(() => {
        setMounted(true);
        ref.current = document.createElement('div');
        ref.current.setAttribute('evergreen-portal-container', '');
        document.body.appendChild(ref.current);
        return () => {
            document.body.removeChild(ref.current);
        };
    }, []);
    if (!mounted) {
        return null;
    }
    return (0, react_dom_1.createPortal)(children, ref.current);
};
Portal.propTypes = {
    children: prop_types_1.default.node.isRequired
};
exports.default = Portal;
