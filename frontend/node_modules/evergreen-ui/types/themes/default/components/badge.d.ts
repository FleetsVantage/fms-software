declare namespace _default {
    export { baseStyle };
    export { appearances };
    export { sizes };
}
export default _default;
declare namespace baseStyle {
    const height: number;
    const paddingY: number;
    const paddingX: number;
    const borderRadius: string;
    const fontSize: string;
    const textAlign: string;
    const textDecoration: string;
    const textTransform: string;
}
declare namespace appearances {
    function subtle(theme: any, props: any): {
        color: any;
        backgroundColor: any;
    };
}
declare const sizes: {};
