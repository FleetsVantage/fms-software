"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const canUseDom_1 = __importDefault(require("../../lib/canUseDom"));
const getMajorVersion_1 = __importDefault(require("../../lib/getMajorVersion"));
const ToastManager_1 = __importDefault(require("./ToastManager"));
/**
 * The Toaster manages the interactions between
 * the ToasterManger and the toast API.
 */
class Toaster {
    constructor() {
        this._bindNotify = handler => {
            this.notifyHandler = handler;
        };
        this._bindRemove = handler => {
            this.removeHandler = handler;
        };
        this._bindGetToasts = handler => {
            this.getToastsHandler = handler;
        };
        this._bindCloseAll = handler => {
            this.closeAllHandler = handler;
        };
        this.getToasts = () => {
            return this.getToastsHandler();
        };
        this.closeAll = () => {
            return this.closeAllHandler();
        };
        this.notify = (title, settings = {}) => {
            return this.notifyHandler(title, Object.assign(Object.assign({}, settings), { intent: 'none' }));
        };
        this.success = (title, settings = {}) => {
            return this.notifyHandler(title, Object.assign(Object.assign({}, settings), { intent: 'success' }));
        };
        this.warning = (title, settings = {}) => {
            return this.notifyHandler(title, Object.assign(Object.assign({}, settings), { intent: 'warning' }));
        };
        this.danger = (title, settings = {}) => {
            return this.notifyHandler(title, Object.assign(Object.assign({}, settings), { intent: 'danger' }));
        };
        this.remove = id => {
            return this.removeHandler(id);
        };
        if (!canUseDom_1.default)
            return;
        const container = document.createElement('div');
        container.setAttribute('data-evergreen-toaster-container', '');
        document.body.appendChild(container);
        const toastManager = () => (react_1.default.createElement(ToastManager_1.default, { bindNotify: this._bindNotify, bindRemove: this._bindRemove, bindGetToasts: this._bindGetToasts, bindCloseAll: this._bindCloseAll }));
        if ((0, getMajorVersion_1.default)(react_dom_1.default.version) >= 18) {
            try {
                const { createRoot } = require('react-dom/client');
                const root = createRoot(container);
                root.render(toastManager());
            }
            catch (e) {
                react_dom_1.default.render(toastManager(), container);
            }
            return;
        }
        react_dom_1.default.render(toastManager(), container);
    }
}
exports.default = Toaster;
