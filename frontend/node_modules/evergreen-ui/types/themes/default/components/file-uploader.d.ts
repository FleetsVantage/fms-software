declare namespace _default {
    export { baseStyle };
}
export default _default;
declare namespace baseStyle {
    const display: string;
    const alignItems: string;
    const flexDirection: string;
    const justifyContent: string;
    const backgroundColor: string;
    const borderWidth: number;
    const borderRadius: string;
    const borderStyle: string;
    const borderColor: string;
    const height: string;
    const width: string;
    const paddingX: number;
    const paddingY: number;
    namespace selectors {
        namespace _focus {
            export const outline: string;
            const borderStyle_1: string;
            export { borderStyle_1 as borderStyle };
            const borderColor_1: string;
            export { borderColor_1 as borderColor };
            export const boxShadow: string;
        }
        namespace _hover {
            export const cursor: string;
            const backgroundColor_1: string;
            export { backgroundColor_1 as backgroundColor };
            const borderColor_2: string;
            export { borderColor_2 as borderColor };
        }
        namespace _hoverBrowseCopy {
            export const color: string;
            const cursor_1: string;
            export { cursor_1 as cursor };
        }
        namespace _hoverOrDragCopy {
            const color_1: string;
            export { color_1 as color };
            const cursor_2: string;
            export { cursor_2 as cursor };
        }
        namespace _disabled {
            const backgroundColor_2: string;
            export { backgroundColor_2 as backgroundColor };
            const borderColor_3: string;
            export { borderColor_3 as borderColor };
            const borderStyle_2: string;
            export { borderStyle_2 as borderStyle };
        }
        namespace _dragHover {
            const backgroundColor_3: string;
            export { backgroundColor_3 as backgroundColor };
            const borderColor_4: string;
            export { borderColor_4 as borderColor };
            const borderStyle_3: string;
            export { borderStyle_3 as borderStyle };
        }
        namespace _invalid {
            const backgroundColor_4: string;
            export { backgroundColor_4 as backgroundColor };
            const borderColor_5: string;
            export { borderColor_5 as borderColor };
            const borderStyle_4: string;
            export { borderStyle_4 as borderStyle };
        }
    }
}
