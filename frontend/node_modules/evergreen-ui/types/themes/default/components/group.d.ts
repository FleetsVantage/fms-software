declare namespace _default {
    export { baseStyle };
    export { appearances };
    export { sizes };
}
export default _default;
declare namespace baseStyle {
    namespace selectors {
        namespace _child {
            const selectors_1: {
                '&:focus': {
                    zIndex: string;
                };
                '&:active': {
                    zIndex: string;
                };
            };
            export { selectors_1 as selectors };
        }
        namespace _firstChild {
            const borderTopRightRadius: number;
            const borderBottomRightRadius: number;
        }
        namespace _middleChild {
            const borderRadius: number;
            const marginLeft: string;
        }
        namespace _lastChild {
            export const borderTopLeftRadius: number;
            export const borderBottomLeftRadius: number;
            const marginLeft_1: string;
            export { marginLeft_1 as marginLeft };
        }
    }
}
declare const appearances: {};
declare const sizes: {};
