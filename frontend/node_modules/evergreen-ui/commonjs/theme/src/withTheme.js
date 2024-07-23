"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ThemeContext_1 = require("./ThemeContext");
/**
 * HOC that uses ThemeConsumer.
 * @param {React.Component} WrappedComponent - Component that gets theme.
 */
function withTheme(WrappedComponent) {
    var _a;
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    return _a = class extends react_1.default.Component {
            render() {
                return react_1.default.createElement(ThemeContext_1.ThemeConsumer, null, theme => react_1.default.createElement(WrappedComponent, Object.assign({ theme: theme }, this.props)));
            }
        },
        _a.displayName = `withTheme(${displayName})`,
        _a;
}
exports.default = withTheme;
