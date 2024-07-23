declare namespace _default {
    export { baseStyle };
    export { appearances };
    export { sizes };
}
export default _default;
declare namespace baseStyle {
    const borderColor: string;
    const borderRadius: string;
    const borderStyle: string;
    const borderWidth: number;
    const color: string;
    const fontFamily: string;
    const fontSize: string;
    const lineHeight: string;
    const paddingX: number;
    const transition: string;
    namespace selectors {
        namespace _placeholder {
            const color_1: string;
            export { color_1 as color };
        }
        namespace _disabled {
            export const cursor: string;
            export const backgroundColor: string;
            const color_2: string;
            export { color_2 as color };
        }
    }
}
declare namespace appearances {
    namespace _default {
        const backgroundColor_1: string;
        export { backgroundColor_1 as backgroundColor };
        const borderColor_1: string;
        export { borderColor_1 as borderColor };
        export namespace selectors_1 {
            namespace _focus {
                export const zIndex: string;
                export const boxShadow: string;
                const borderColor_2: string;
                export { borderColor_2 as borderColor };
            }
            namespace _invalid {
                const borderColor_3: string;
                export { borderColor_3 as borderColor };
            }
        }
        export { selectors_1 as selectors };
    }
    export { _default as default };
    export namespace none {
        const borderColor_4: string;
        export { borderColor_4 as borderColor };
        const backgroundColor_2: string;
        export { backgroundColor_2 as backgroundColor };
    }
}
declare namespace sizes {
    namespace small {
        const height: number;
    }
    namespace medium {
        const height_1: number;
        export { height_1 as height };
    }
    namespace large {
        const height_2: number;
        export { height_2 as height };
        const lineHeight_1: string;
        export { lineHeight_1 as lineHeight };
    }
}
