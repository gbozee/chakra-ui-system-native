import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { getColor, mode } from "@chakra-ui/theme-tools";
var baseStyle = {
    field: {
        width: "100%",
        minWidth: 0,
        outline: 0,
        position: "relative",
        appearance: "none",
        transitionProperty: "common",
        transitionDuration: "normal",
    },
};
var size = {
    lg: {
        fontSize: "lg",
        px: 4,
        h: 12,
        borderRadius: "md",
    },
    md: {
        fontSize: "md",
        px: 4,
        h: 10,
        borderRadius: "md",
    },
    sm: {
        fontSize: "sm",
        px: 3,
        h: 8,
        borderRadius: "sm",
    },
    xs: {
        fontSize: "xs",
        px: 2,
        h: 6,
        borderRadius: "sm",
    },
};
var sizes = {
    lg: {
        field: size.lg,
        addon: size.lg,
    },
    md: {
        field: size.md,
        addon: size.md,
    },
    sm: {
        field: size.sm,
        addon: size.sm,
    },
    xs: {
        field: size.xs,
        addon: size.xs,
    },
};
function getDefaults(props) {
    var fc = props.focusBorderColor, ec = props.errorBorderColor;
    return {
        focusBorderColor: fc || mode("blue.500", "blue.300")(props),
        errorBorderColor: ec || mode("red.500", "red.300")(props),
    };
}
var variantOutline = function (props) {
    var theme = props.theme;
    var _a = getDefaults(props), fc = _a.focusBorderColor, ec = _a.errorBorderColor;
    return {
        field: {
            border: "1px solid",
            borderColor: "inherit",
            bg: "inherit",
            _hover: {
                borderColor: mode("gray.300", "whiteAlpha.400")(props),
            },
            _readOnly: {
                boxShadow: "none !important",
                userSelect: "all",
            },
            _disabled: {
                opacity: 0.4,
                cursor: "not-allowed",
            },
            _invalid: {
                borderColor: getColor(theme, ec),
                boxShadow: "0 0 0 1px ".concat(getColor(theme, ec)),
            },
            _focus: {
                zIndex: 1,
                borderColor: getColor(theme, fc),
                boxShadow: "0 0 0 1px ".concat(getColor(theme, fc)),
            },
        },
        addon: {
            border: "1px solid",
            borderColor: mode("inherit", "whiteAlpha.50")(props),
            bg: mode("gray.100", "whiteAlpha.300")(props),
        },
    };
};
var variantFilled = function (props) {
    var theme = props.theme;
    var _a = getDefaults(props), fc = _a.focusBorderColor, ec = _a.errorBorderColor;
    return {
        field: {
            border: "2px solid",
            borderColor: "transparent",
            bg: mode("gray.100", "whiteAlpha.50")(props),
            _hover: {
                bg: mode("gray.200", "whiteAlpha.100")(props),
            },
            _readOnly: {
                boxShadow: "none !important",
                userSelect: "all",
            },
            _disabled: {
                opacity: 0.4,
                cursor: "not-allowed",
            },
            _invalid: {
                borderColor: getColor(theme, ec),
            },
            _focus: {
                bg: "transparent",
                borderColor: getColor(theme, fc),
            },
        },
        addon: {
            border: "2px solid",
            borderColor: "transparent",
            bg: mode("gray.100", "whiteAlpha.50")(props),
        },
    };
};
var variantFlushed = function (props) {
    var theme = props.theme;
    var _a = getDefaults(props), fc = _a.focusBorderColor, ec = _a.errorBorderColor;
    return {
        field: {
            borderBottom: "1px solid",
            borderColor: "inherit",
            borderRadius: 0,
            px: 0,
            bg: "transparent",
            _readOnly: {
                boxShadow: "none !important",
                userSelect: "all",
            },
            _invalid: {
                borderColor: getColor(theme, ec),
                boxShadow: "0px 1px 0px 0px ".concat(getColor(theme, ec)),
            },
            _focus: {
                borderColor: getColor(theme, fc),
                boxShadow: "0px 1px 0px 0px ".concat(getColor(theme, fc)),
            },
        },
        addon: {
            borderBottom: "2px solid",
            borderColor: "inherit",
            borderRadius: 0,
            px: 0,
            bg: "transparent",
        },
    };
};
var variantUnstyled = {
    field: {
        bg: "transparent",
        px: 0,
        height: "auto",
    },
    addon: {
        bg: "transparent",
        px: 0,
        height: "auto",
    },
};
var variants = {
    outline: variantOutline,
    filled: variantFilled,
    flushed: variantFlushed,
    unstyled: variantUnstyled,
};
var defaultProps = {
    size: "md",
    variant: "outline",
};
export default {
    parts: parts.keys,
    baseStyle: baseStyle,
    sizes: sizes,
    variants: variants,
    defaultProps: defaultProps,
};
//# sourceMappingURL=input.js.map