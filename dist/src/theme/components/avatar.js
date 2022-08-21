import { avatarAnatomy as parts } from "@chakra-ui/anatomy";
import { isDark, mode, randomColor } from "@chakra-ui/theme-tools";
import themeSizes from "../foundations/sizes";
var baseStyleBadge = function (props) {
    return {
        transform: "translate(25%, 25%)",
        borderRadius: "full",
        border: "0.2em solid",
        borderColor: mode("white", "gray.800")(props),
    };
};
var baseStyleExcessLabel = function (props) {
    return {
        bg: mode("gray.200", "whiteAlpha.400")(props),
    };
};
var baseStyleContainer = function (props) {
    var name = props.name, theme = props.theme;
    var bg = name ? randomColor({ string: name }) : "gray.400";
    var isBgDark = isDark(bg)(theme);
    var color = "white";
    if (!isBgDark)
        color = "gray.800";
    var borderColor = mode("white", "gray.800")(props);
    return {
        bg: bg,
        color: color,
        borderColor: borderColor,
        verticalAlign: "top",
    };
};
var baseStyle = function (props) { return ({
    badge: baseStyleBadge(props),
    excessLabel: baseStyleExcessLabel(props),
    container: baseStyleContainer(props),
}); };
function getSize(size) {
    var themeSize = themeSizes[size];
    return {
        container: {
            width: size,
            height: size,
            fontSize: "calc(".concat(themeSize !== null && themeSize !== void 0 ? themeSize : size, " / 2.5)"),
        },
        excessLabel: {
            width: size,
            height: size,
        },
        label: {
            fontSize: "calc(".concat(themeSize !== null && themeSize !== void 0 ? themeSize : size, " / 2.5)"),
            lineHeight: size !== "100%" ? themeSize !== null && themeSize !== void 0 ? themeSize : size : undefined,
        },
    };
}
var sizes = {
    "2xs": getSize("4"),
    xs: getSize("6"),
    sm: getSize("8"),
    md: getSize("12"),
    lg: getSize("16"),
    xl: getSize("24"),
    "2xl": getSize("32"),
    full: getSize("100%"),
};
var defaultProps = {
    size: "md",
};
export default {
    parts: parts.keys,
    baseStyle: baseStyle,
    sizes: sizes,
    defaultProps: defaultProps,
};
//# sourceMappingURL=avatar.js.map