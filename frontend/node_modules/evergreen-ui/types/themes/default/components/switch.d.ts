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
                const backgroundColor: string;
            }
            namespace _disabled {
                const cursor: string;
                const opacity: number;
            }
            namespace _hover {
                const backgroundColor_1: string;
                export { backgroundColor_1 as backgroundColor };
            }
            namespace _focus {
                function boxShadow(theme: any): string;
            }
            namespace _active {
                const backgroundColor_2: string;
                export { backgroundColor_2 as backgroundColor };
            }
            namespace _checked {
                const backgroundColor_3: string;
                export { backgroundColor_3 as backgroundColor };
                const color_1: string;
                export { color_1 as color };
            }
            namespace _checkedHover {
                const backgroundColor_4: string;
                export { backgroundColor_4 as backgroundColor };
                const color_2: string;
                export { color_2 as color };
            }
            namespace _checkedActive {
                const backgroundColor_5: string;
                export { backgroundColor_5 as backgroundColor };
                const color_3: string;
                export { color_3 as color };
            }
            const _checkedDisabled: {};
        }
    }
    export { _default as default };
}
declare const sizes: {};
