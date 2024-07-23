declare namespace _default {
    export { baseStyle };
    export { appearances };
}
export default _default;
declare namespace baseStyle {
    const outline: string;
    const textDecoration: string;
    const height: number;
    namespace selectors {
        namespace _lastOfType {
            const borderBottom: string;
            const borderBottomLeftRadius: string;
            const borderBottomRightRadius: string;
        }
        namespace _isSelectable {
            const cursor: string;
        }
    }
}
declare namespace appearances {
    namespace _default {
        export function backgroundColor(_: any, props: any): any;
        export namespace selectors_1 {
            namespace _hover {
                export function backgroundColor_1(_: any, props: any): any;
                export { backgroundColor_1 as backgroundColor };
            }
            namespace _focus {
                export function backgroundColor_2(_: any, props: any): any;
                export { backgroundColor_2 as backgroundColor };
            }
            namespace _active {
                export function backgroundColor_3(_: any, props: any): any;
                export { backgroundColor_3 as backgroundColor };
            }
            namespace _current {
                export function backgroundColor_4(_: any, props: any): any;
                export { backgroundColor_4 as backgroundColor };
            }
        }
        export { selectors_1 as selectors };
    }
    export { _default as default };
}
