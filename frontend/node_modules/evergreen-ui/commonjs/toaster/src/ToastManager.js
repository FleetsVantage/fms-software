"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const ui_box_1 = __importDefault(require("ui-box"));
const constants_1 = require("../../constants");
const Toast_1 = __importDefault(require("./Toast"));
const hasCustomId = settings => Object.hasOwnProperty.call(settings, 'id');
const ToastManager = (0, react_1.memo)(function ToastManager(props) {
    const { bindCloseAll, bindGetToasts, bindNotify, bindRemove } = props;
    const [toasts, setToasts] = (0, react_1.useState)([]);
    const [idCounter, setIdCounter] = (0, react_1.useState)(0);
    const getToasts = () => toasts;
    const closeAll = () => {
        setToasts(toasts.map(toast => (Object.assign(Object.assign({}, toast), { isShown: false }))));
    };
    /**
     * This will set isShown on the Toast which will close the toast.
     * It won't remove the toast until onExited triggers onRemove.
     */
    const closeToast = id => {
        setToasts(toasts.map(toast => {
            if (toast.id === id) {
                return Object.assign(Object.assign({}, toast), { isShown: false });
            }
            return toast;
        }));
    };
    const safeCloseToast = id => {
        const toastToRemove = toasts.find(toast => String(toast.id).startsWith(id));
        if (toastToRemove) {
            closeToast(toastToRemove.id);
        }
    };
    const removeToast = id => {
        const updatedToasts = toasts.filter(toast => !String(toast.id).startsWith(id));
        setToasts(updatedToasts);
        return updatedToasts;
    };
    const createToastInstance = (title, settings) => {
        var _a;
        const uniqueId = idCounter;
        setIdCounter(idCounter + 1);
        const id = hasCustomId(settings) ? `${settings.id}-${uniqueId}` : uniqueId;
        return {
            id,
            title,
            description: settings.description,
            hasCloseButton: (_a = settings.hasCloseButton) !== null && _a !== void 0 ? _a : true,
            duration: settings.duration || 5,
            close: () => safeCloseToast(id),
            intent: settings.intent
        };
    };
    const notify = (title, settings) => {
        let tempToasts = toasts;
        if (hasCustomId(settings)) {
            tempToasts = removeToast(settings.id);
        }
        const instance = createToastInstance(title, settings);
        setToasts([instance, ...tempToasts]);
    };
    bindNotify(notify);
    bindRemove(safeCloseToast);
    bindGetToasts(getToasts);
    bindCloseAll(closeAll);
    return (react_1.default.createElement(ui_box_1.default, { is: "span", maxWidth: 560, marginY: 0, marginX: "auto", top: 0, left: 0, right: 0, position: "fixed", zIndex: constants_1.StackingOrder.TOASTER, pointerEvents: "none" }, toasts.map((_a) => {
        var { description, id } = _a, rest = __rest(_a, ["description", "id"]);
        return (react_1.default.createElement(Toast_1.default, Object.assign({ key: id, onRemove: () => removeToast(id) }, rest), description));
    })));
});
ToastManager.propTypes = {
    /**
     * Function called with the `this.notify` function.
     */
    bindNotify: prop_types_1.default.func.isRequired,
    /**
     * Function called with the `this.remove` function.
     */
    bindRemove: prop_types_1.default.func.isRequired,
    /**
     * Function called with the `this.getToasts` function.
     */
    bindGetToasts: prop_types_1.default.func.isRequired,
    /**
     * Function called with the `this.closeAll` function.
     */
    bindCloseAll: prop_types_1.default.func.isRequired
};
exports.default = ToastManager;
