export default typography;
declare namespace typography {
    export namespace fontFamilies {
        const display: string;
        const ui: string;
        const mono: string;
    }
    export { fontSizes };
    export namespace fontWeights {
        const light: number;
        const normal: number;
        const semibold: number;
        const bold: number;
    }
    export namespace letterSpacings {
        export const tightest: string;
        export const tighter: string;
        export const tight: string;
        const normal_1: string;
        export { normal_1 as normal };
        export const wide: string;
    }
    export const lineHeights: string[];
}
declare const fontSizes: string[];
