declare namespace _default {
    export { baseStyle };
}
export default _default;
declare namespace baseStyle {
    const outline: string;
    const textDecoration: string;
    const display: string;
    const position: string;
    const backgroundColor: string;
    const height: number;
    function borderBottom(theme: any): string;
    namespace selectors {
        namespace _before {
            export const content: string;
            const position_1: string;
            export { position_1 as position };
            export const left: number;
            export const top: number;
            export const bottom: number;
            export const width: number;
            export const borderTopLeftRadius: number;
            export const borderBottomLeftRadius: number;
            export const borderTopRightRadius: number;
            export const borderBottomRightRadius: number;
            const backgroundColor_1: string;
            export { backgroundColor_1 as backgroundColor };
            export const transition: string;
            export const transformOrigin: string;
            export const transform: string;
        }
        namespace _isSelectable {
            const cursor: string;
        }
        namespace _hover {
            const backgroundColor_2: string;
            export { backgroundColor_2 as backgroundColor };
        }
        namespace _focus {
            const backgroundColor_3: string;
            export { backgroundColor_3 as backgroundColor };
        }
        namespace _active {
            const backgroundColor_4: string;
            export { backgroundColor_4 as backgroundColor };
        }
        const _selected: {
            backgroundColor: string;
            ' span': {
                color: string;
            };
            '&:before': {
                transform: string;
            };
        };
        namespace _disabled {
            export const opacity: number;
            export const pointerEvents: string;
            const cursor_1: string;
            export { cursor_1 as cursor };
        }
    }
}
