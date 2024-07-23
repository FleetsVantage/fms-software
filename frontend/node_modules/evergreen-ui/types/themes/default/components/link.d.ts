declare namespace _default {
    export { baseStyle };
    export { appearances };
    export { sizes };
}
export default _default;
declare namespace baseStyle {
    const borderRadius: string;
    const transition: string;
    function color(_: any, { color }: {
        color: any;
    }): "gray700" | "blue500";
    const textDecoration: string;
    namespace selectors {
        namespace _hover {
            export function color_1(theme: any, { color }: {
                color: any;
            }): any;
            export { color_1 as color };
        }
        namespace _active {
            export function color_2(theme: any, { color }: {
                color: any;
            }): any;
            export { color_2 as color };
        }
        namespace _focus {
            function boxShadow(theme: any, { color }: {
                color: any;
            }): string;
        }
    }
}
declare const appearances: {};
declare const sizes: {};
