declare const _default: {
    components: {
        Alert: {
            baseStyle: (theme: any, { intent }: {
                intent?: string | undefined;
            }) => {
                backgroundColor: string;
                border: string;
                borderRadius: string;
                color: any;
            };
            appearances: {};
            sizes: {};
        };
        Avatar: {
            baseStyle: (theme: any, props: any) => any;
            appearances: {};
            sizes: {};
        };
        Badge: {
            baseStyle: {
                height: number;
                paddingY: number;
                paddingX: number;
                borderRadius: string;
                fontSize: string;
                textAlign: string;
                textDecoration: string;
                textTransform: string;
            };
            appearances: {
                subtle: (theme: any, props: any) => {
                    color: any;
                    backgroundColor: any;
                };
            };
            sizes: {};
        };
        Button: {
            baseStyle: {
                fontFamily: string;
                border: string;
                borderRadius: string;
                color: (theme: any, { color }: {
                    color: any;
                }) => any;
                transition: string;
                selectors: {
                    _focus: {
                        boxShadow: string;
                    };
                    _disabled: {
                        cursor: string;
                        pointerEvents: string;
                    };
                };
            };
            appearances: {
                primary: (theme: any, { appearance, color, intent }: {
                    appearance: any;
                    color: any;
                    intent: any;
                }) => {
                    backgroundColor: string;
                    borderColor: string;
                    color: any;
                    selectors: {
                        _hover: {
                            backgroundColor: string;
                            borderColor: string;
                        };
                        _disabled: {
                            backgroundColor: string;
                            borderColor: string;
                        };
                        _focus: {
                            backgroundColor: string;
                            boxShadow: string;
                            borderColor: string;
                        };
                        _active: {
                            backgroundColor: string;
                            borderColor: string;
                        };
                    };
                };
                default: {
                    backgroundColor: string;
                    border: (theme: any, props: any) => string;
                    color: (theme: any, props: any) => any;
                    selectors: {
                        _disabled: {
                            color: string;
                            borderColor: string;
                        };
                        _hover: {
                            border: (theme: any, props: any) => string;
                            backgroundColor: string;
                        };
                        _active: {
                            backgroundColor: string;
                        };
                    };
                };
                minimal: {
                    backgroundColor: string;
                    color: (theme: any, props: any) => any;
                    selectors: {
                        _disabled: {
                            color: string;
                            opacity: number;
                        };
                        _hover: {
                            backgroundColor: string;
                        };
                        _active: {
                            backgroundColor: string;
                        };
                    };
                };
                destructive: {
                    backgroundColor: string;
                    borderColor: string;
                    color: any;
                    selectors: {
                        _hover: {
                            backgroundColor: string;
                            borderColor: string;
                        };
                        _disabled: {
                            backgroundColor: string;
                            borderColor: string;
                        };
                        _focus: {
                            backgroundColor: string;
                            boxShadow: string;
                            borderColor: string;
                        };
                        _active: {
                            backgroundColor: string;
                            borderColor: string;
                        };
                    };
                };
            };
            sizes: {
                small: {
                    height: number;
                    minWidth: number;
                    fontSize: string;
                    lineHeight: string;
                    paddingLeft: number;
                    paddingRight: number;
                };
                medium: {
                    height: number;
                    minWidth: number;
                    fontSize: string;
                    lineHeight: string;
                    paddingLeft: number;
                    paddingRight: number;
                };
                large: {
                    height: number;
                    minWidth: number;
                    fontSize: string;
                    lineHeight: string;
                    paddingLeft: number;
                    paddingRight: number;
                };
            };
        };
        Card: {
            baseStyle: {
                borderRadius: string;
            };
            appearances: {};
            sizes: {};
        };
        Checkbox: {
            baseStyle: {};
            appearances: {
                default: {
                    selectors: {
                        _base: {
                            color: string;
                            background: string;
                            boxShadow: (theme: any) => string;
                        };
                        _disabled: {
                            cursor: string;
                            background: string;
                            color: string;
                            boxShadow: (theme: any) => string;
                        };
                        _hover: {
                            boxShadow: (theme: any) => string;
                        };
                        _focus: {
                            boxShadow: (theme: any) => string;
                        };
                        _active: {
                            background: string;
                            boxShadow: (theme: any) => string;
                        };
                        _checked: {
                            color: string;
                            boxShadow: (theme: any) => string;
                            background: string;
                        };
                        _checkedHover: {
                            color: string;
                            background: string;
                            boxShadow: (theme: any) => string;
                        };
                        _checkedActive: {
                            color: string;
                            boxShadow: (theme: any) => string;
                            background: string;
                        };
                        _checkedDisabled: {
                            color: string;
                            background: string;
                        };
                    };
                };
            };
            sizes: {};
        };
        Code: {
            baseStyle: {};
            appearances: {
                default: {
                    backgroundColor: string;
                    boxShadow: string;
                    paddingX: number;
                    paddingY: number;
                    borderRadius: string;
                };
            };
            sizes: {};
        };
        DialogBody: {
            baseStyle: {
                paddingY: number;
                paddingX: number;
            };
        };
        DialogFooter: {
            baseStyle: {
                paddingX: number;
                paddingBottom: number;
                paddingTop: number;
            };
        };
        DialogHeader: {
            baseStyle: {
                paddingX: number;
                paddingTop: number;
                paddingBottom: number;
            };
        };
        FileCard: {
            baseStyle: {
                display: string;
                flexDirection: string;
                height: number;
                width: string;
                borderWidth: number;
                borderRadius: string;
                borderStyle: string;
                borderColor: string;
                alignItems: string;
                justifyContent: string;
                selectors: {
                    _invalid: {
                        backgroundColor: string;
                        borderColor: string;
                    };
                };
            };
        };
        FileUploader: {
            baseStyle: {
                display: string;
                alignItems: string;
                flexDirection: string;
                justifyContent: string;
                backgroundColor: string;
                borderWidth: number;
                borderRadius: string;
                borderStyle: string;
                borderColor: string;
                height: string;
                width: string;
                paddingX: number;
                paddingY: number;
                selectors: {
                    _focus: {
                        outline: string;
                        borderStyle: string;
                        borderColor: string;
                        boxShadow: string;
                    };
                    _hover: {
                        cursor: string;
                        backgroundColor: string;
                        borderColor: string;
                    };
                    _hoverBrowseCopy: {
                        color: string;
                        cursor: string;
                    };
                    _hoverOrDragCopy: {
                        color: string;
                        cursor: string;
                    };
                    _disabled: {
                        backgroundColor: string;
                        borderColor: string;
                        borderStyle: string;
                    };
                    _dragHover: {
                        backgroundColor: string;
                        borderColor: string;
                        borderStyle: string;
                    };
                    _invalid: {
                        backgroundColor: string;
                        borderColor: string;
                        borderStyle: string;
                    };
                };
            };
        };
        Group: {
            baseStyle: {
                selectors: {
                    _child: {
                        selectors: {
                            '&:focus': {
                                zIndex: string;
                            };
                            '&:active': {
                                zIndex: string;
                            };
                        };
                    };
                    _firstChild: {
                        borderTopRightRadius: number;
                        borderBottomRightRadius: number;
                    };
                    _middleChild: {
                        borderRadius: number;
                        marginLeft: string;
                    };
                    _lastChild: {
                        borderTopLeftRadius: number;
                        borderBottomLeftRadius: number;
                        marginLeft: string;
                    };
                };
            };
            appearances: {};
            sizes: {};
        };
        Heading: {
            baseStyle: {
                color: string;
                fontFamily: string;
                fontWeight: string;
            };
            appearances: {};
            sizes: {
                900: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                    letterSpacing: string;
                };
                800: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                    letterSpacing: string;
                };
                700: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                    letterSpacing: string;
                };
                600: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                    letterSpacing: string;
                };
                500: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    letterSpacing: string;
                    lineHeight: string;
                };
                400: {
                    fontSize: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                300: {
                    fontSize: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                200: {
                    fontSize: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                    color: string;
                };
                100: {
                    fontSize: string;
                    textTransform: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                    color: string;
                };
            };
        };
        Icon: {
            baseStyle: (theme: any, { color }: {
                color: any;
            }) => {
                fill: any;
            };
            appearances: {};
            sizes: {};
        };
        InlineAlert: {
            baseStyle: (theme: any, { intent }: {
                intent?: string | undefined;
            }) => {
                color: any;
            };
            appearances: {};
            sizes: {};
        };
        Input: {
            baseStyle: {
                borderColor: string;
                borderRadius: string;
                borderStyle: string;
                borderWidth: number;
                color: string;
                fontFamily: string;
                fontSize: string;
                lineHeight: string;
                paddingX: number;
                transition: string;
                selectors: {
                    _placeholder: {
                        color: string;
                    };
                    _disabled: {
                        cursor: string;
                        backgroundColor: string;
                        color: string;
                    };
                };
            };
            appearances: {
                default: {
                    backgroundColor: string;
                    borderColor: string;
                    selectors: {
                        _focus: {
                            zIndex: string;
                            boxShadow: string;
                            borderColor: string;
                        };
                        _invalid: {
                            borderColor: string;
                        };
                    };
                };
                none: {
                    borderColor: string;
                    backgroundColor: string;
                };
            };
            sizes: {
                small: {
                    height: number;
                };
                medium: {
                    height: number;
                };
                large: {
                    height: number;
                    lineHeight: string;
                };
            };
        };
        Label: {
            baseStyle: {
                color: string;
                fontFamily: string;
                fontWeight: string;
            };
            appearances: {};
            sizes: {
                900: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                    letterSpacing: string;
                };
                800: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                    letterSpacing: string;
                };
                700: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                    letterSpacing: string;
                };
                600: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                    letterSpacing: string;
                };
                500: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    letterSpacing: string;
                    lineHeight: string;
                };
                400: {
                    fontSize: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                300: {
                    fontSize: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                200: {
                    fontSize: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                    color: string;
                };
                100: {
                    fontSize: string;
                    textTransform: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                    color: string;
                };
            };
        };
        List: {
            baseStyle: {};
            appearances: {};
            sizes: {};
        };
        Link: {
            baseStyle: {
                borderRadius: string;
                transition: string;
                color: (_: any, { color }: {
                    color: any;
                }) => "gray700" | "blue500";
                textDecoration: string;
                selectors: {
                    _hover: {
                        color: (theme: any, { color }: {
                            color: any;
                        }) => any;
                    };
                    _active: {
                        color: (theme: any, { color }: {
                            color: any;
                        }) => any;
                    };
                    _focus: {
                        boxShadow: (theme: any, { color }: {
                            color: any;
                        }) => string;
                    };
                };
            };
            appearances: {};
            sizes: {};
        };
        MenuItem: {
            baseStyle: {
                outline: string;
                textDecoration: string;
                display: string;
                position: string;
                paddingX: number;
                selectors: {
                    _isSelectable: {
                        cursor: string;
                    };
                    _disabled: {
                        cursor: string;
                        userSelect: string;
                    };
                };
            };
            appearances: {
                default: {
                    backgroundColor: string;
                    selectors: {
                        '&:before': {
                            content: string;
                            position: string;
                            left: number;
                            top: number;
                            bottom: number;
                            width: number;
                            borderRadiusTopLeft: number;
                            borderRadiusTopRight: number;
                            borderRadiusBottomRight: number;
                            borderRadiusBottomLeft: number;
                            backgroundColor: string;
                            transition: string;
                            transformOrigin: string;
                            transform: string;
                        };
                        _hover: {
                            backgroundColor: string;
                        };
                        _focus: {
                            backgroundColor: string;
                        };
                        _active: {
                            backgroundColor: string;
                            selectors: {
                                '&:before': {
                                    transform: string;
                                };
                            };
                        };
                        _current: {
                            backgroundColor: string;
                            selectors: {
                                '&:before': {
                                    transform: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        Option: {
            baseStyle: {
                outline: string;
                textDecoration: string;
                display: string;
                position: string;
                backgroundColor: string;
                height: number;
                borderBottom: (theme: any) => string;
                selectors: {
                    _before: {
                        content: string;
                        position: string;
                        left: number;
                        top: number;
                        bottom: number;
                        width: number;
                        borderTopLeftRadius: number;
                        borderBottomLeftRadius: number;
                        borderTopRightRadius: number;
                        borderBottomRightRadius: number;
                        backgroundColor: string;
                        transition: string;
                        transformOrigin: string;
                        transform: string;
                    };
                    _isSelectable: {
                        cursor: string;
                    };
                    _hover: {
                        backgroundColor: string;
                    };
                    _focus: {
                        backgroundColor: string;
                    };
                    _active: {
                        backgroundColor: string;
                    };
                    _selected: {
                        backgroundColor: string;
                        ' span': {
                            color: string;
                        };
                        '&:before': {
                            transform: string;
                        };
                    };
                    _disabled: {
                        opacity: number;
                        pointerEvents: string;
                        cursor: string;
                    };
                };
            };
        };
        Pane: {
            baseStyle: (theme: any, props: any) => {
                selectors: {
                    _hover: {
                        transform: string;
                        boxShadow: string;
                    } | undefined;
                    _active: {
                        transform: string;
                        boxShadow: string;
                    } | undefined;
                };
                background: any;
                boxShadow: any;
                borderTop: any;
                borderRight: any;
                borderBottom: any;
                borderLeft: any;
            };
            appearances: {};
            sizes: {};
        };
        Paragraph: {
            baseStyle: {
                fontFamily: (theme: any, { fontFamily }: {
                    fontFamily?: string | undefined;
                }) => string;
                color: (theme: any, { color }: {
                    color?: string | undefined;
                }) => string;
                marginTop: number;
                marginBottom: number;
            };
            appearances: {};
            sizes: {
                small: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                medium: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                large: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                300: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                400: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                500: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                600: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
            };
        };
        Radio: {
            baseStyle: {};
            appearances: {
                default: {
                    selectors: {
                        _base: {
                            color: string;
                            background: string;
                            boxShadow: (theme: any) => string;
                        };
                        _disabled: {
                            cursor: string;
                            background: string;
                            color: string;
                            boxShadow: (theme: any) => string;
                        };
                        _hover: {
                            boxShadow: (theme: any) => string;
                        };
                        _focus: {
                            boxShadow: (theme: any) => string;
                        };
                        _active: {
                            background: string;
                            boxShadow: (theme: any) => string;
                        };
                        _checked: {
                            color: string;
                            boxShadow: (theme: any) => string;
                            background: string;
                        };
                        _checkedHover: {
                            color: string;
                            background: string;
                            boxShadow: (theme: any) => string;
                        };
                        _checkedActive: {
                            color: string;
                            boxShadow: (theme: any) => string;
                            background: string;
                        };
                        _checkedDisabled: {
                            color: string;
                            background: string;
                        };
                    };
                };
            };
            sizes: {};
        };
        Select: {
            baseStyle: {
                fontFamily: string;
                borderRadius: string;
                border: number;
            };
            appearances: {
                default: {
                    backgroundColor: string;
                    border: (theme: any) => string;
                    color: string;
                    selectors: {
                        _disabled: {
                            cursor: string;
                            color: string;
                            borderColor: string;
                        };
                        _hover: {
                            borderColor: string;
                            backgroundColor: string;
                        };
                        _invalid: {
                            borderColor: string;
                        };
                        _focus: {
                            borderColor: string;
                            boxShadow: string;
                        };
                        _active: {
                            backgroundColor: string;
                        };
                    };
                };
            };
            sizes: {
                small: {
                    height: number;
                    fontSize: string;
                    lineHeight: string;
                };
                medium: {
                    height: number;
                    fontSize: string;
                    lineHeight: string;
                };
                large: {
                    height: number;
                    fontSize: string;
                    lineHeight: string;
                };
            };
        };
        Spinner: {
            baseStyle: {
                color: string;
            };
            appearances: {};
            sizes: {
                small: {
                    width: number;
                    height: number;
                };
                medium: {
                    width: number;
                    height: number;
                };
                large: {
                    width: number;
                    height: number;
                };
            };
        };
        Switch: {
            baseStyle: {};
            appearances: {
                default: {
                    selectors: {
                        _base: {
                            color: string;
                            backgroundColor: string;
                        };
                        _disabled: {
                            cursor: string;
                            opacity: number;
                        };
                        _hover: {
                            backgroundColor: string;
                        };
                        _focus: {
                            boxShadow: (theme: any) => string;
                        };
                        _active: {
                            backgroundColor: string;
                        };
                        _checked: {
                            backgroundColor: string;
                            color: string;
                        };
                        _checkedHover: {
                            backgroundColor: string;
                            color: string;
                        };
                        _checkedActive: {
                            backgroundColor: string;
                            color: string;
                        };
                        _checkedDisabled: {};
                    };
                };
            };
            sizes: {};
        };
        Tab: {
            baseStyle: {
                fontFamily: string;
                fontWeight: number;
                marginBottom: (_: any, props: any) => "8px" | null;
            };
            appearances: {
                primary: {
                    color: string;
                    paddingTop: string;
                    paddingBottom: string;
                    paddingLeft: string;
                    paddingRight: string;
                    position: string;
                    selectors: {
                        ':not(:last-child)': {
                            marginRight: (_: any, props: any) => "20px" | null;
                        };
                        _before: {
                            content: string;
                            position: string;
                            bottom: number;
                            right: number;
                            height: string;
                            borderTopLeftRadius: number;
                            borderTopRightRadius: number;
                            borderBottomLeftRadius: number;
                            borderBottomRightRadius: number;
                            backgroundColor: string;
                            width: string;
                            transition: string;
                            transform: string;
                            transformOrigin: string;
                        };
                        _hover: {
                            color: string;
                        };
                        _current: {
                            color: string;
                            '&:before': {
                                transform: string;
                            };
                            '&:focus': {
                                color: string;
                            };
                        };
                        _focus: {
                            boxShadow: string;
                            color: string;
                        };
                        _disabled: {
                            pointerEvents: string;
                            cursor: string;
                            color: string;
                            '&:before': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
                secondary: {
                    paddingX: string;
                    paddingY: string;
                    borderRadius: string;
                    color: string;
                    selectors: {
                        ':not(:last-child)': {
                            marginRight: (_: any, props: any) => "8px" | null;
                        };
                        _hover: {
                            backgroundColor: string;
                            color: string;
                        };
                        _active: {
                            backgroundColor: string;
                        };
                        _current: {
                            backgroundColor: string;
                            color: string;
                        };
                        _focus: {
                            boxShadow: string;
                        };
                        _disabled: {
                            pointerEvents: string;
                            cursor: string;
                            color: string;
                            '&[aria-current="page"],&[aria-selected="true"]': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
            };
        };
        Table: {
            baseStyle: {
                borderRadius: string;
                border: string;
            };
            appearances: {};
            sizes: {};
        };
        TableCell: {
            baseStyle: {
                paddingX: number;
            };
            appearances: {
                default: {
                    selectors: {
                        _focus: {
                            outline: string;
                            background: string;
                            boxShadow: (theme: any) => string;
                        };
                    };
                };
            };
            sizes: {};
        };
        TableHead: {
            baseStyle: {
                borderBottom: string;
                background: string;
                height: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                fontFamily: string;
                color: string;
                textTransform: string;
                selectors: {
                    _firstOfType: {
                        borderTopLeftRadius: string;
                        borderTopRightRadius: string;
                    };
                };
            };
            appearances: {};
            sizes: {};
        };
        TableRow: {
            baseStyle: {
                outline: string;
                textDecoration: string;
                height: number;
                selectors: {
                    _lastOfType: {
                        borderBottom: string;
                        borderBottomLeftRadius: string;
                        borderBottomRightRadius: string;
                    };
                    _isSelectable: {
                        cursor: string;
                    };
                };
            };
            appearances: {
                default: {
                    backgroundColor: (_: any, props: any) => any;
                    selectors: {
                        _hover: {
                            backgroundColor: (_: any, props: any) => any;
                        };
                        _focus: {
                            backgroundColor: (_: any, props: any) => any;
                        };
                        _active: {
                            backgroundColor: (_: any, props: any) => any;
                        };
                        _current: {
                            backgroundColor: (_: any, props: any) => any;
                        };
                    };
                };
            };
        };
        TagInput: {
            baseStyle: {
                paddingY: string;
                backgroundColor: string;
                borderRadius: string;
            };
            appearances: {
                default: {
                    border: (theme: any) => string;
                    selectors: {
                        _focused: {
                            outline: string;
                            zIndex: string;
                            border: (theme: any) => string;
                            transition: string;
                            boxShadow: string;
                        };
                        _disabled: {
                            cursor: string;
                            backgroundColor: string;
                        };
                        _invalid: {
                            borderColor: string;
                        };
                    };
                };
            };
            sizes: {};
        };
        Text: {
            baseStyle: {};
            appearances: {};
            sizes: {
                small: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                medium: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                large: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                300: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                400: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                500: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                600: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
            };
        };
        TextDropdownButton: {
            baseStyle: {
                fontFamily: string;
                backgroundColor: string;
                borderRadius: string;
                paddingX: number;
                marginX: number;
                paddingY: number;
                marginY: number;
                color: string;
                selectors: {
                    _disabled: {
                        cursor: string;
                        pointerEvents: string;
                    };
                    _focus: {
                        boxShadow: string;
                    };
                };
            };
            appearances: {};
            sizes: {
                small: {
                    fontSize: string;
                    lineHeight: string;
                };
                medium: {
                    fontSize: string;
                    lineHeight: string;
                };
                large: {
                    fontSize: string;
                    lineHeight: string;
                };
            };
        };
        Tooltip: {
            baseStyle: {
                paddingY: number;
                paddingX: number;
                maxWidth: number;
                borderRadius: string;
                boxShadow: string;
            };
            appearances: {
                card: {
                    backgroundColor: string;
                };
                default: {
                    color: string;
                    backgroundColor: string;
                };
            };
            sizes: {};
        };
    };
    zIndices: {
        focused: number;
        stack: number;
        positioner: number;
        overlay: number;
        toaster: number;
    };
    fontFamilies: {
        display: string;
        ui: string;
        mono: string;
    };
    fontSizes: string[];
    fontWeights: {
        light: number;
        normal: number;
        semibold: number;
        bold: number;
    };
    letterSpacings: {
        tightest: string;
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
    };
    lineHeights: string[];
    colors: {
        muted: string;
        default: string;
        dark: string;
        selected: string;
        tint1: string;
        tint2: string;
        overlay: string;
        yellowTint: string;
        greenTint: string;
        orangeTint: string;
        redTint: string;
        blueTint: string;
        purpleTint: string;
        tealTint: string;
        border: {
            default: string;
            muted: string;
        };
        icon: {
            default: string;
            muted: string;
            disabled: string;
            selected: string;
        };
        text: {
            danger: string;
            success: string;
            info: string;
        };
        gray900: string;
        gray800: string;
        gray700: string;
        gray600: string;
        gray500: string;
        gray400: string;
        gray300: string;
        gray200: string;
        gray100: string;
        gray90: string;
        gray75: string;
        gray50: string;
        white: string;
        blue900: string;
        blue800: string;
        blue700: string;
        blue600: string;
        blue500: string;
        blue400: string;
        blue300: string;
        blue200: string;
        blue100: string;
        blue50: string;
        blue25: string;
        red700: string;
        red600: string;
        red500: string;
        red300: string;
        red100: string;
        red25: string;
        green900: string;
        green800: string;
        green700: string;
        green600: string;
        green500: string;
        green400: string;
        green300: string;
        green200: string;
        green100: string;
        green25: string;
        orange700: string;
        orange500: string;
        orange100: string;
        orange25: string;
        purple600: string;
        purple100: string;
        teal800: string;
        teal100: string;
        yellow800: string;
        yellow100: string;
    };
    fills: {
        neutral: {
            color: string;
            backgroundColor: string;
        };
        blue: {
            color: string;
            backgroundColor: string;
        };
        red: {
            color: string;
            backgroundColor: string;
        };
        orange: {
            color: string;
            backgroundColor: string;
        };
        yellow: {
            color: string;
            backgroundColor: string;
        };
        green: {
            color: string;
            backgroundColor: string;
        };
        teal: {
            color: string;
            backgroundColor: string;
        };
        purple: {
            color: string;
            backgroundColor: string;
        };
    };
    intents: {
        info: {
            background: string;
            border: string;
            text: string;
            icon: string;
        };
        success: {
            background: string;
            border: string;
            text: string;
            icon: string;
        };
        warning: {
            background: string;
            border: string;
            text: string;
            icon: string;
        };
        danger: {
            background: string;
            border: string;
            text: string;
            icon: string;
        };
    };
    radii: string[];
    shadows: string[];
};
export default _default;
