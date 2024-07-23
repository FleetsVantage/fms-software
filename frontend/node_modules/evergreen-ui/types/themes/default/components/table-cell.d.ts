declare namespace _default {
    export { baseStyle };
    export { appearances };
    export { sizes };
}
export default _default;
declare namespace baseStyle {
    const paddingX: number;
}
declare namespace appearances {
    namespace _default {
        namespace selectors {
            namespace _focus {
                const outline: string;
                const background: string;
                function boxShadow(theme: any): string;
            }
        }
    }
    export { _default as default };
}
declare const sizes: {};
