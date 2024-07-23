"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const __1 = require("../");
const buttons_1 = require("../../buttons");
const layers_1 = require("../../layers");
const text_input_1 = require("../../text-input");
function PopoverWithTextInputChild(props) {
    return (react_1.default.createElement(__1.Popover, Object.assign({ content: react_1.default.createElement(layers_1.Pane, { "data-testid": "popover-container", width: 320, height: 320, paddingX: 40, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" },
            react_1.default.createElement(text_input_1.TextInput, { "data-testid": "popover-input", width: "100%" })) }, props),
        react_1.default.createElement(buttons_1.Button, { "data-testid": "popover-trigger" }, "Trigger Popover")));
}
exports.default = PopoverWithTextInputChild;
