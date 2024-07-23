declare namespace _default {
    export { baseStyle };
    export { appearances };
    export { sizes };
}
export default _default;
declare namespace baseStyle {
    const fontFamily: string;
    const backgroundColor: string;
    const borderRadius: string;
    const paddingX: number;
    const marginX: number;
    const paddingY: number;
    const marginY: number;
    const color: string;
    namespace selectors {
        namespace _disabled {
            const cursor: string;
            const pointerEvents: string;
        }
        namespace _focus {
            const boxShadow: string;
        }
    }
}
declare const appearances: {};
declare namespace sizes {
    namespace small {
        const fontSize: string;
        const lineHeight: string;
    }
    namespace medium {
        const fontSize_1: string;
        export { fontSize_1 as fontSize };
        const lineHeight_1: string;
        export { lineHeight_1 as lineHeight };
    }
    namespace large {
        const fontSize_2: string;
        export { fontSize_2 as fontSize };
        const lineHeight_2: string;
        export { lineHeight_2 as lineHeight };
    }
}
