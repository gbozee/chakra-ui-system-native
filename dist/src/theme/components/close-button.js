var _a, _b, _c;
import { cssVar, mode } from "@chakra-ui/theme-tools";
var $size = cssVar("close-button-size");
var baseStyle = function (props) {
    var hoverBg = mode("blackAlpha.100", "whiteAlpha.100")(props);
    var activeBg = mode("blackAlpha.200", "whiteAlpha.200")(props);
    return {
        w: [$size.reference],
        h: [$size.reference],
        borderRadius: "md",
        transitionProperty: "common",
        transitionDuration: "normal",
        _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
            boxShadow: "none",
        },
        _hover: { bg: hoverBg },
        _active: { bg: activeBg },
        _focus: {
            boxShadow: "outline",
        },
    };
};
var sizes = {
    lg: (_a = {},
        _a[$size.variable] = "40px",
        _a.fontSize = "16px",
        _a),
    md: (_b = {},
        _b[$size.variable] = "32px",
        _b.fontSize = "12px",
        _b),
    sm: (_c = {},
        _c[$size.variable] = "24px",
        _c.fontSize = "10px",
        _c),
};
var defaultProps = {
    size: "md",
};
export default {
    baseStyle: baseStyle,
    sizes: sizes,
    defaultProps: defaultProps,
};
//# sourceMappingURL=close-button.js.map