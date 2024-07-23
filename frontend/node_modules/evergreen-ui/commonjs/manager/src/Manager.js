"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
/**
 * This component is a utility component to manage state in stories and examples.
 */
class Manager extends react_1.default.Component {
    constructor(props) {
        super(props);
        this._setState = (...args) => {
            this.setState(...args);
        };
        this.state = Object.assign({}, props);
    }
    render() {
        return this.props.children({
            setState: this._setState,
            state: this.state
        });
    }
}
exports.default = Manager;
Manager.propTypes = {
    children: prop_types_1.default.func
};
