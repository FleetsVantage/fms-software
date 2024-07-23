declare namespace _default {
    export { baseStyle };
    export { appearances };
}
export default _default;
declare namespace baseStyle {
    const fontFamily: string;
    const fontWeight: number;
    function marginBottom(_: any, props: any): "8px" | null;
}
declare namespace appearances {
    namespace primary {
        const color: string;
        const paddingTop: string;
        const paddingBottom: string;
        const paddingLeft: string;
        const paddingRight: string;
        const position: string;
        const selectors: {
            ':not(:last-child)': {
                marginRight: (_: any, props: any) => "20px" | null;
            };
            _before: {
                content: string;
                position: string;
                bottom: number;
                right: number;
                height: string;
                borderTopLeftRadius: number;
                borderTopRightRadius: number;
                borderBottomLeftRadius: number;
                borderBottomRightRadius: number;
                backgroundColor: string;
                width: string;
                transition: string;
                transform: string;
                transformOrigin: string;
            };
            _hover: {
                color: string;
            };
            _current: {
                color: string;
                '&:before': {
                    transform: string;
                };
                '&:focus': {
                    color: string;
                };
            };
            _focus: {
                boxShadow: string;
                color: string;
            };
            _disabled: {
                pointerEvents: string;
                cursor: string;
                color: string;
                '&:before': {
                    backgroundColor: string;
                };
            };
        };
    }
    namespace secondary {
        export const paddingX: string;
        export const paddingY: string;
        export const borderRadius: string;
        const color_1: string;
        export { color_1 as color };
        const selectors_1: {
            ':not(:last-child)': {
                marginRight: (_: any, props: any) => "8px" | null;
            };
            _hover: {
                backgroundColor: string;
                color: string;
            };
            _active: {
                backgroundColor: string;
            };
            _current: {
                backgroundColor: string;
                color: string;
            };
            _focus: {
                boxShadow: string;
            };
            _disabled: {
                pointerEvents: string;
                cursor: string;
                color: string;
                '&[aria-current="page"],&[aria-selected="true"]': {
                    backgroundColor: string;
                };
            };
        };
        export { selectors_1 as selectors };
    }
}
