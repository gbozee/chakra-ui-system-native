import { alertAnatomy as parts } from "@chakra-ui/anatomy";
import { getColor, mode, transparentize } from "@chakra-ui/theme-tools";
var baseStyle = {
    container: {
        px: 4,
        py: 3,
    },
    title: {
        fontWeight: "bold",
        lineHeight: 6,
        marginEnd: 2,
    },
    description: {
        lineHeight: 6,
    },
    icon: {
        flexShrink: 0,
        marginEnd: 3,
        w: 5,
        h: 6,
    },
};
function getBg(props) {
    var theme = props.theme, c = props.colorScheme;
    var lightBg = getColor(theme, "".concat(c, ".100"), c);
    var darkBg = transparentize("".concat(c, ".200"), 0.16)(theme);
    return mode(lightBg, darkBg)(props);
}
var variantSubtle = function (props) {
    var c = props.colorScheme;
    return {
        container: { bg: getBg(props) },
        icon: { color: mode("".concat(c, ".500"), "".concat(c, ".200"))(props) },
    };
};
var variantLeftAccent = function (props) {
    var c = props.colorScheme;
    return {
        container: {
            paddingStart: 3,
            borderStartWidth: "4px",
            borderStartColor: mode("".concat(c, ".500"), "".concat(c, ".200"))(props),
            bg: getBg(props),
        },
        icon: {
            color: mode("".concat(c, ".500"), "".concat(c, ".200"))(props),
        },
    };
};
var variantTopAccent = function (props) {
    var c = props.colorScheme;
    return {
        container: {
            pt: 2,
            borderTopWidth: "4px",
            borderTopColor: mode("".concat(c, ".500"), "".concat(c, ".200"))(props),
            bg: getBg(props),
        },
        icon: {
            color: mode("".concat(c, ".500"), "".concat(c, ".200"))(props),
        },
    };
};
var variantSolid = function (props) {
    var c = props.colorScheme;
    return {
        container: {
            bg: mode("".concat(c, ".500"), "".concat(c, ".200"))(props),
            color: mode("white", "gray.900")(props),
        },
    };
};
var variants = {
    subtle: variantSubtle,
    "left-accent": variantLeftAccent,
    "top-accent": variantTopAccent,
    solid: variantSolid,
};
var defaultProps = {
    variant: "subtle",
    colorScheme: "blue",
};
export default {
    parts: parts.keys,
    baseStyle: baseStyle,
    variants: variants,
    defaultProps: defaultProps,
};
//# sourceMappingURL=alert.js.map