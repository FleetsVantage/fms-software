declare namespace _default {
    export { baseStyle };
    export { appearances };
    export { sizes };
}
export default _default;
declare namespace baseStyle {
    const fontFamily: string;
    const border: string;
    const borderRadius: string;
    function color(theme: any, { color }: {
        color: any;
    }): any;
    const transition: string;
    namespace selectors {
        namespace _focus {
            const boxShadow: string;
        }
        namespace _disabled {
            const cursor: string;
            const pointerEvents: string;
        }
    }
}
declare namespace appearances {
    export function primary(theme: any, { appearance, color, intent }: {
        appearance: any;
        color: any;
        intent: any;
    }): {
        backgroundColor: string;
        borderColor: string;
        color: any;
        selectors: {
            _hover: {
                backgroundColor: string;
                borderColor: string;
            };
            _disabled: {
                backgroundColor: string;
                borderColor: string;
            };
            _focus: {
                backgroundColor: string;
                boxShadow: string;
                borderColor: string;
            };
            _active: {
                backgroundColor: string;
                borderColor: string;
            };
        };
    };
    namespace _default {
        export const backgroundColor: string;
        export function border_1(theme: any, props: any): string;
        export { border_1 as border };
        export function color_1(theme: any, props: any): any;
        export { color_1 as color };
        export namespace selectors_1 {
            export namespace _disabled_1 {
                const color_2: string;
                export { color_2 as color };
                export const borderColor: string;
            }
            export { _disabled_1 as _disabled };
            export namespace _hover {
                export function border_2(theme: any, props: any): string;
                export { border_2 as border };
                const backgroundColor_1: string;
                export { backgroundColor_1 as backgroundColor };
            }
            export namespace _active {
                const backgroundColor_2: string;
                export { backgroundColor_2 as backgroundColor };
            }
        }
        export { selectors_1 as selectors };
    }
    export { _default as default };
    export namespace minimal {
        const backgroundColor_3: string;
        export { backgroundColor_3 as backgroundColor };
        export function color_3(theme: any, props: any): any;
        export { color_3 as color };
        export namespace selectors_2 {
            export namespace _disabled_2 {
                const color_4: string;
                export { color_4 as color };
                export const opacity: number;
            }
            export { _disabled_2 as _disabled };
            export namespace _hover_1 {
                const backgroundColor_4: string;
                export { backgroundColor_4 as backgroundColor };
            }
            export { _hover_1 as _hover };
            export namespace _active_1 {
                const backgroundColor_5: string;
                export { backgroundColor_5 as backgroundColor };
            }
            export { _active_1 as _active };
        }
        export { selectors_2 as selectors };
    }
    export namespace destructive {
        const backgroundColor_6: string;
        export { backgroundColor_6 as backgroundColor };
        const borderColor_1: string;
        export { borderColor_1 as borderColor };
        const color_5: any;
        export { color_5 as color };
        export namespace selectors_3 {
            export namespace _hover_2 {
                const backgroundColor_7: string;
                export { backgroundColor_7 as backgroundColor };
                const borderColor_2: string;
                export { borderColor_2 as borderColor };
            }
            export { _hover_2 as _hover };
            export namespace _disabled_3 {
                const backgroundColor_8: string;
                export { backgroundColor_8 as backgroundColor };
                const borderColor_3: string;
                export { borderColor_3 as borderColor };
            }
            export { _disabled_3 as _disabled };
            export namespace _focus_1 {
                const backgroundColor_9: string;
                export { backgroundColor_9 as backgroundColor };
                const boxShadow_1: string;
                export { boxShadow_1 as boxShadow };
                const borderColor_4: string;
                export { borderColor_4 as borderColor };
            }
            export { _focus_1 as _focus };
            export namespace _active_2 {
                const backgroundColor_10: string;
                export { backgroundColor_10 as backgroundColor };
                const borderColor_5: string;
                export { borderColor_5 as borderColor };
            }
            export { _active_2 as _active };
        }
        export { selectors_3 as selectors };
    }
}
declare namespace sizes {
    namespace small {
        const height: number;
        const minWidth: number;
        const fontSize: string;
        const lineHeight: string;
        const paddingLeft: number;
        const paddingRight: number;
    }
    namespace medium {
        const height_1: number;
        export { height_1 as height };
        const minWidth_1: number;
        export { minWidth_1 as minWidth };
        const fontSize_1: string;
        export { fontSize_1 as fontSize };
        const lineHeight_1: string;
        export { lineHeight_1 as lineHeight };
        const paddingLeft_1: number;
        export { paddingLeft_1 as paddingLeft };
        const paddingRight_1: number;
        export { paddingRight_1 as paddingRight };
    }
    namespace large {
        const height_2: number;
        export { height_2 as height };
        const minWidth_2: number;
        export { minWidth_2 as minWidth };
        const fontSize_2: string;
        export { fontSize_2 as fontSize };
        const lineHeight_2: string;
        export { lineHeight_2 as lineHeight };
        const paddingLeft_2: number;
        export { paddingLeft_2 as paddingLeft };
        const paddingRight_2: number;
        export { paddingRight_2 as paddingRight };
    }
}
