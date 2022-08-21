var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { tableAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
var baseStyle = {
    table: {
        fontVariantNumeric: "lining-nums tabular-nums",
        borderCollapse: "collapse",
        width: "full",
    },
    th: {
        fontFamily: "heading",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "wider",
        textAlign: "start",
    },
    td: {
        textAlign: "start",
    },
    caption: {
        mt: 4,
        fontFamily: "heading",
        textAlign: "center",
        fontWeight: "medium",
    },
};
var numericStyles = {
    "&[data-is-numeric=true]": {
        textAlign: "end",
    },
};
var variantSimple = function (props) {
    var c = props.colorScheme;
    return {
        th: __assign({ color: mode("gray.600", "gray.400")(props), borderBottom: "1px", borderColor: mode("".concat(c, ".100"), "".concat(c, ".700"))(props) }, numericStyles),
        td: __assign({ borderBottom: "1px", borderColor: mode("".concat(c, ".100"), "".concat(c, ".700"))(props) }, numericStyles),
        caption: {
            color: mode("gray.600", "gray.100")(props),
        },
        tfoot: {
            tr: {
                "&:last-of-type": {
                    th: { borderBottomWidth: 0 },
                },
            },
        },
    };
};
var variantStripe = function (props) {
    var c = props.colorScheme;
    return {
        th: __assign({ color: mode("gray.600", "gray.400")(props), borderBottom: "1px", borderColor: mode("".concat(c, ".100"), "".concat(c, ".700"))(props) }, numericStyles),
        td: __assign({ borderBottom: "1px", borderColor: mode("".concat(c, ".100"), "".concat(c, ".700"))(props) }, numericStyles),
        caption: {
            color: mode("gray.600", "gray.100")(props),
        },
        tbody: {
            tr: {
                "&:nth-of-type(odd)": {
                    "th, td": {
                        borderBottomWidth: "1px",
                        borderColor: mode("".concat(c, ".100"), "".concat(c, ".700"))(props),
                    },
                    td: {
                        background: mode("".concat(c, ".100"), "".concat(c, ".700"))(props),
                    },
                },
            },
        },
        tfoot: {
            tr: {
                "&:last-of-type": {
                    th: { borderBottomWidth: 0 },
                },
            },
        },
    };
};
var variants = {
    simple: variantSimple,
    striped: variantStripe,
    unstyled: {},
};
var sizes = {
    sm: {
        th: {
            px: "4",
            py: "1",
            lineHeight: "4",
            fontSize: "xs",
        },
        td: {
            px: "4",
            py: "2",
            fontSize: "sm",
            lineHeight: "4",
        },
        caption: {
            px: "4",
            py: "2",
            fontSize: "xs",
        },
    },
    md: {
        th: {
            px: "6",
            py: "3",
            lineHeight: "4",
            fontSize: "xs",
        },
        td: {
            px: "6",
            py: "4",
            lineHeight: "5",
        },
        caption: {
            px: "6",
            py: "2",
            fontSize: "sm",
        },
    },
    lg: {
        th: {
            px: "8",
            py: "4",
            lineHeight: "5",
            fontSize: "sm",
        },
        td: {
            px: "8",
            py: "5",
            lineHeight: "6",
        },
        caption: {
            px: "6",
            py: "2",
            fontSize: "md",
        },
    },
};
var defaultProps = {
    variant: "simple",
    size: "md",
    colorScheme: "gray",
};
export default {
    parts: parts.keys,
    baseStyle: baseStyle,
    variants: variants,
    sizes: sizes,
    defaultProps: defaultProps,
};
//# sourceMappingURL=table.js.map