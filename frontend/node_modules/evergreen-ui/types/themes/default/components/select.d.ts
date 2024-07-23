declare namespace _default {
    export { baseStyle };
    export { appearances };
    export { sizes };
}
export default _default;
declare namespace baseStyle {
    const fontFamily: string;
    const borderRadius: string;
    const border: number;
}
declare namespace appearances {
    namespace _default {
        export const backgroundColor: string;
        export function border_1(theme: any): string;
        export { border_1 as border };
        export const color: string;
        export namespace selectors {
            namespace _disabled {
                export const cursor: string;
                const color_1: string;
                export { color_1 as color };
                export const borderColor: string;
            }
            namespace _hover {
                const borderColor_1: string;
                export { borderColor_1 as borderColor };
                const backgroundColor_1: string;
                export { backgroundColor_1 as backgroundColor };
            }
            namespace _invalid {
                const borderColor_2: string;
                export { borderColor_2 as borderColor };
            }
            namespace _focus {
                const borderColor_3: string;
                export { borderColor_3 as borderColor };
                export const boxShadow: string;
            }
            namespace _active {
                const backgroundColor_2: string;
                export { backgroundColor_2 as backgroundColor };
            }
        }
    }
    export { _default as default };
}
declare namespace sizes {
    namespace small {
        const height: number;
        const fontSize: string;
        const lineHeight: string;
    }
    namespace medium {
        const height_1: number;
        export { height_1 as height };
        const fontSize_1: string;
        export { fontSize_1 as fontSize };
        const lineHeight_1: string;
        export { lineHeight_1 as lineHeight };
    }
    namespace large {
        const height_2: number;
        export { height_2 as height };
        const fontSize_2: string;
        export { fontSize_2 as fontSize };
        const lineHeight_2: string;
        export { lineHeight_2 as lineHeight };
    }
}
