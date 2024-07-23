declare namespace _default {
    export { baseStyle };
    export { appearances };
}
export default _default;
declare namespace baseStyle {
    const outline: string;
    const textDecoration: string;
    const display: string;
    const position: string;
    const paddingX: number;
    namespace selectors {
        namespace _isSelectable {
            const cursor: string;
        }
        namespace _disabled {
            const cursor_1: string;
            export { cursor_1 as cursor };
            export const userSelect: string;
        }
    }
}
declare namespace appearances {
    namespace _default {
        export const backgroundColor: string;
        const selectors_1: {
            '&:before': {
                content: string;
                position: string;
                left: number;
                top: number;
                bottom: number;
                width: number;
                borderRadiusTopLeft: number;
                borderRadiusTopRight: number;
                borderRadiusBottomRight: number;
                borderRadiusBottomLeft: number;
                backgroundColor: string;
                transition: string;
                transformOrigin: string;
                transform: string;
            };
            _hover: {
                backgroundColor: string;
            };
            _focus: {
                backgroundColor: string;
            };
            _active: {
                backgroundColor: string;
                selectors: {
                    '&:before': {
                        transform: string;
                    };
                };
            };
            _current: {
                backgroundColor: string;
                selectors: {
                    '&:before': {
                        transform: string;
                    };
                };
            };
        };
        export { selectors_1 as selectors };
    }
    export { _default as default };
}
