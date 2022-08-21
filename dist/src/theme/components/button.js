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
import { mode, transparentize } from "@chakra-ui/theme-tools";
var baseStyle = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focus: {
        boxShadow: "outline",
    },
    _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
        boxShadow: "none",
    },
    _hover: {
        _disabled: {
            bg: "initial",
        },
    },
};
var variantGhost = function (props) {
    var c = props.colorScheme, theme = props.theme;
    if (c === "gray") {
        return {
            color: mode("inherit", "whiteAlpha.900")(props),
            _hover: {
                bg: mode("gray.100", "whiteAlpha.200")(props),
            },
            _active: { bg: mode("gray.200", "whiteAlpha.300")(props) },
        };
    }
    var darkHoverBg = transparentize("".concat(c, ".200"), 0.12)(theme);
    var darkActiveBg = transparentize("".concat(c, ".200"), 0.24)(theme);
    return {
        color: mode("".concat(c, ".600"), "".concat(c, ".200"))(props),
        bg: "transparent",
        _hover: {
            bg: mode("".concat(c, ".50"), darkHoverBg)(props),
        },
        _active: {
            bg: mode("".concat(c, ".100"), darkActiveBg)(props),
        },
    };
};
var variantOutline = function (props) {
    var c = props.colorScheme;
    var borderColor = mode("gray.200", "whiteAlpha.300")(props);
    return __assign({ border: "1px solid", borderColor: c === "gray" ? borderColor : "currentColor" }, variantGhost(props));
};
/** Accessible color overrides for less accessible colors. */
var accessibleColorMap = {
    yellow: {
        bg: "yellow.400",
        color: "black",
        hoverBg: "yellow.500",
        activeBg: "yellow.600",
    },
    cyan: {
        bg: "cyan.400",
        color: "black",
        hoverBg: "cyan.500",
        activeBg: "cyan.600",
    },
};
var variantSolid = function (props) {
    var _a;
    var c = props.colorScheme;
    if (c === "gray") {
        var bg_1 = mode("gray.100", "whiteAlpha.200")(props);
        return {
            bg: bg_1,
            _hover: {
                bg: mode("gray.200", "whiteAlpha.300")(props),
                _disabled: {
                    bg: bg_1,
                },
            },
            _active: { bg: mode("gray.300", "whiteAlpha.400")(props) },
        };
    }
    var _b = (_a = accessibleColorMap[c]) !== null && _a !== void 0 ? _a : {}, _c = _b.bg, bg = _c === void 0 ? "".concat(c, ".500") : _c, _d = _b.color, color = _d === void 0 ? "white" : _d, _e = _b.hoverBg, hoverBg = _e === void 0 ? "".concat(c, ".600") : _e, _f = _b.activeBg, activeBg = _f === void 0 ? "".concat(c, ".700") : _f;
    var background = mode(bg, "".concat(c, ".200"))(props);
    return {
        bg: background,
        color: mode(color, "gray.800")(props),
        _hover: {
            bg: mode(hoverBg, "".concat(c, ".300"))(props),
            _disabled: {
                bg: background,
            },
        },
        _active: { bg: mode(activeBg, "".concat(c, ".400"))(props) },
    };
};
var variantLink = function (props) {
    var c = props.colorScheme;
    return {
        padding: 0,
        height: "auto",
        lineHeight: "normal",
        verticalAlign: "baseline",
        color: mode("".concat(c, ".500"), "".concat(c, ".200"))(props),
        _hover: {
            textDecoration: "underline",
            _disabled: {
                textDecoration: "none",
            },
        },
        _active: {
            color: mode("".concat(c, ".700"), "".concat(c, ".500"))(props),
        },
    };
};
var variantUnstyled = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: 0,
    p: 0,
};
var variants = {
    ghost: variantGhost,
    outline: variantOutline,
    solid: variantSolid,
    link: variantLink,
    unstyled: variantUnstyled,
};
var sizes = {
    lg: {
        h: 12,
        minW: 12,
        fontSize: "lg",
        px: 6,
    },
    md: {
        h: 10,
        minW: 10,
        fontSize: "md",
        px: 4,
    },
    sm: {
        h: 8,
        minW: 8,
        fontSize: "sm",
        px: 3,
    },
    xs: {
        h: 6,
        minW: 6,
        fontSize: "xs",
        px: 2,
    },
};
var defaultProps = {
    variant: "solid",
    size: "md",
    colorScheme: "gray",
};
export default {
    baseStyle: baseStyle,
    variants: variants,
    sizes: sizes,
    defaultProps: defaultProps,
};
//# sourceMappingURL=button.js.map