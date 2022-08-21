import { getColor, mode, transparentize } from "@chakra-ui/theme-tools";
var baseStyle = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
};
var variantSolid = function (props) {
    var c = props.colorScheme, theme = props.theme;
    var dark = transparentize("".concat(c, ".500"), 0.6)(theme);
    return {
        bg: mode("".concat(c, ".500"), dark)(props),
        color: mode("white", "whiteAlpha.800")(props),
    };
};
var variantSubtle = function (props) {
    var c = props.colorScheme, theme = props.theme;
    var darkBg = transparentize("".concat(c, ".200"), 0.16)(theme);
    return {
        bg: mode("".concat(c, ".100"), darkBg)(props),
        color: mode("".concat(c, ".800"), "".concat(c, ".200"))(props),
    };
};
var variantOutline = function (props) {
    var c = props.colorScheme, theme = props.theme;
    var darkColor = transparentize("".concat(c, ".200"), 0.8)(theme);
    var lightColor = getColor(theme, "".concat(c, ".500"));
    var color = mode(lightColor, darkColor)(props);
    return {
        color: color,
        boxShadow: "inset 0 0 0px 1px ".concat(color),
    };
};
var variants = {
    solid: variantSolid,
    subtle: variantSubtle,
    outline: variantOutline,
};
var defaultProps = {
    variant: "subtle",
    colorScheme: "gray",
};
export default {
    baseStyle: baseStyle,
    variants: variants,
    defaultProps: defaultProps,
};
//# sourceMappingURL=badge.js.map