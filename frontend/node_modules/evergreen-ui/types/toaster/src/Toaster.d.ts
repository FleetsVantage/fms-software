/**
 * The Toaster manages the interactions between
 * the ToasterManger and the toast API.
 */
export default class Toaster {
    _bindNotify: (handler: any) => void;
    notifyHandler: any;
    _bindRemove: (handler: any) => void;
    removeHandler: any;
    _bindGetToasts: (handler: any) => void;
    getToastsHandler: any;
    _bindCloseAll: (handler: any) => void;
    closeAllHandler: any;
    getToasts: () => any;
    closeAll: () => any;
    notify: (title: any, settings?: {}) => any;
    success: (title: any, settings?: {}) => any;
    warning: (title: any, settings?: {}) => any;
    danger: (title: any, settings?: {}) => any;
    remove: (id: any) => any;
}
