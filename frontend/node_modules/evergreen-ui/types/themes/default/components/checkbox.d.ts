declare namespace _default {
    export { baseStyle };
    export { appearances };
    export { sizes };
}
export default _default;
declare const baseStyle: {};
declare namespace appearances {
    namespace _default {
        namespace selectors {
            namespace _base {
                const color: string;
                const background: string;
                function boxShadow(theme: any): string;
            }
            namespace _disabled {
                export const cursor: string;
                const background_1: string;
                export { background_1 as background };
                const color_1: string;
                export { color_1 as color };
                export function boxShadow_1(theme: any): string;
                export { boxShadow_1 as boxShadow };
            }
            namespace _hover {
                export function boxShadow_2(theme: any): string;
                export { boxShadow_2 as boxShadow };
            }
            namespace _focus {
                export function boxShadow_3(theme: any): string;
                export { boxShadow_3 as boxShadow };
            }
            namespace _active {
                const background_2: string;
                export { background_2 as background };
                export function boxShadow_4(theme: any): string;
                export { boxShadow_4 as boxShadow };
            }
            namespace _checked {
                const color_2: string;
                export { color_2 as color };
                export function boxShadow_5(theme: any): string;
                export { boxShadow_5 as boxShadow };
                const background_3: string;
                export { background_3 as background };
            }
            namespace _checkedHover {
                const color_3: string;
                export { color_3 as color };
                const background_4: string;
                export { background_4 as background };
                export function boxShadow_6(theme: any): string;
                export { boxShadow_6 as boxShadow };
            }
            namespace _checkedActive {
                const color_4: string;
                export { color_4 as color };
                export function boxShadow_7(theme: any): string;
                export { boxShadow_7 as boxShadow };
                const background_5: string;
                export { background_5 as background };
            }
            namespace _checkedDisabled {
                const color_5: string;
                export { color_5 as color };
                const background_6: string;
                export { background_6 as background };
            }
        }
    }
    export { _default as default };
}
declare const sizes: {};
