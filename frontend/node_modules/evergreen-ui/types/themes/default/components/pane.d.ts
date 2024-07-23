declare namespace _default {
    export { baseStyle };
    export { appearances };
    export { sizes };
}
export default _default;
declare function baseStyle(theme: any, props: any): {
    selectors: {
        _hover: {
            transform: string;
            boxShadow: string;
        } | undefined;
        _active: {
            transform: string;
            boxShadow: string;
        } | undefined;
    };
    background: any;
    boxShadow: any;
    borderTop: any;
    borderRight: any;
    borderBottom: any;
    borderLeft: any;
};
declare const appearances: {};
declare const sizes: {};
