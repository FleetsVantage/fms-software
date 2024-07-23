declare namespace _default {
    export { baseStyle };
    export { appearances };
    export { sizes };
}
export default _default;
declare namespace baseStyle {
    const paddingY: string;
    const backgroundColor: string;
    const borderRadius: string;
}
declare namespace appearances {
    namespace _default {
        function border(theme: any): string;
        namespace selectors {
            namespace _focused {
                export const outline: string;
                export const zIndex: string;
                export function border_1(theme: any): string;
                export { border_1 as border };
                export const transition: string;
                export const boxShadow: string;
            }
            namespace _disabled {
                export const cursor: string;
                const backgroundColor_1: string;
                export { backgroundColor_1 as backgroundColor };
            }
            namespace _invalid {
                const borderColor: string;
            }
        }
    }
    export { _default as default };
}
declare const sizes: {};
