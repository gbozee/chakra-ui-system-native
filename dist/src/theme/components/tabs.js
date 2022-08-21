import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import { getColor, mode } from "@chakra-ui/theme-tools";
var baseStyleRoot = function (props) {
    var orientation = props.orientation;
    return {
        display: orientation === "vertical" ? "flex" : "block",
    };
};
var baseStyleTab = function (props) {
    var isFitted = props.isFitted;
    return {
        flex: isFitted ? 1 : undefined,
        transitionProperty: "common",
        transitionDuration: "normal",
        _focus: {
            zIndex: 1,
            boxShadow: "outline",
        },
    };
};
var baseStyleTablist = function (props) {
    var _a = props.align, align = _a === void 0 ? "start" : _a, orientation = props.orientation;
    var alignments = {
        end: "flex-end",
        center: "center",
        start: "flex-start",
    };
    return {
        justifyContent: alignments[align],
        flexDirection: orientation === "vertical" ? "column" : "row",
    };
};
var baseStyleTabpanel = {
    p: 4,
};
var baseStyle = function (props) { return ({
    root: baseStyleRoot(props),
    tab: baseStyleTab(props),
    tablist: baseStyleTablist(props),
    tabpanel: baseStyleTabpanel,
}); };
var sizes = {
    sm: {
        tab: {
            py: 1,
            px: 4,
            fontSize: "sm",
        },
    },
    md: {
        tab: {
            fontSize: "md",
            py: 2,
            px: 4,
        },
    },
    lg: {
        tab: {
            fontSize: "lg",
            py: 3,
            px: 4,
        },
    },
};
var variantLine = function (props) {
    var _a, _b;
    var c = props.colorScheme, orientation = props.orientation;
    var isVertical = orientation === "vertical";
    var borderProp = orientation === "vertical" ? "borderStart" : "borderBottom";
    var marginProp = isVertical ? "marginStart" : "marginBottom";
    return {
        tablist: (_a = {},
            _a[borderProp] = "2px solid",
            _a.borderColor = "inherit",
            _a),
        tab: (_b = {},
            _b[borderProp] = "2px solid",
            _b.borderColor = "transparent",
            _b[marginProp] = "-2px",
            _b._selected = {
                color: mode("".concat(c, ".600"), "".concat(c, ".300"))(props),
                borderColor: "currentColor",
            },
            _b._active = {
                bg: mode("gray.200", "whiteAlpha.300")(props),
            },
            _b._disabled = {
                opacity: 0.4,
                cursor: "not-allowed",
            },
            _b),
    };
};
var variantEnclosed = function (props) {
    var c = props.colorScheme;
    return {
        tab: {
            borderTopRadius: "md",
            border: "1px solid",
            borderColor: "transparent",
            mb: "-1px",
            _selected: {
                color: mode("".concat(c, ".600"), "".concat(c, ".300"))(props),
                borderColor: "inherit",
                borderBottomColor: mode("white", "gray.800")(props),
            },
        },
        tablist: {
            mb: "-1px",
            borderBottom: "1px solid",
            borderColor: "inherit",
        },
    };
};
var variantEnclosedColored = function (props) {
    var c = props.colorScheme;
    return {
        tab: {
            border: "1px solid",
            borderColor: "inherit",
            bg: mode("gray.50", "whiteAlpha.50")(props),
            mb: "-1px",
            _notLast: {
                marginEnd: "-1px",
            },
            _selected: {
                bg: mode("#fff", "gray.800")(props),
                color: mode("".concat(c, ".600"), "".concat(c, ".300"))(props),
                borderColor: "inherit",
                borderTopColor: "currentColor",
                borderBottomColor: "transparent",
            },
        },
        tablist: {
            mb: "-1px",
            borderBottom: "1px solid",
            borderColor: "inherit",
        },
    };
};
var variantSoftRounded = function (props) {
    var c = props.colorScheme, theme = props.theme;
    return {
        tab: {
            borderRadius: "full",
            fontWeight: "semibold",
            color: "gray.600",
            _selected: {
                color: getColor(theme, "".concat(c, ".700")),
                bg: getColor(theme, "".concat(c, ".100")),
            },
        },
    };
};
var variantSolidRounded = function (props) {
    var c = props.colorScheme;
    return {
        tab: {
            borderRadius: "full",
            fontWeight: "semibold",
            color: mode("gray.600", "inherit")(props),
            _selected: {
                color: mode("#fff", "gray.800")(props),
                bg: mode("".concat(c, ".600"), "".concat(c, ".300"))(props),
            },
        },
    };
};
var variantUnstyled = {};
var variants = {
    line: variantLine,
    enclosed: variantEnclosed,
    "enclosed-colored": variantEnclosedColored,
    "soft-rounded": variantSoftRounded,
    "solid-rounded": variantSolidRounded,
    unstyled: variantUnstyled,
};
var defaultProps = {
    size: "md",
    variant: "line",
    colorScheme: "blue",
};
export default {
    parts: parts.keys,
    baseStyle: baseStyle,
    sizes: sizes,
    variants: variants,
    defaultProps: defaultProps,
};
//# sourceMappingURL=tabs.js.map