export default function extractStyles(options?: {}): {
    css: string;
    cache: {
        uiBoxCache: [string, string][];
    };
    hydrationScript: JSX.Element;
};
