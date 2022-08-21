var _a, _b, _c, _d, _e;
import { cssVar } from "@chakra-ui/theme-tools";
var $size = cssVar("spinner-size");
var baseStyle = {
    width: [$size.reference],
    height: [$size.reference],
};
var sizes = {
    xs: (_a = {},
        _a[$size.variable] = "0.75rem",
        _a),
    sm: (_b = {},
        _b[$size.variable] = "1rem",
        _b),
    md: (_c = {},
        _c[$size.variable] = "1.5rem",
        _c),
    lg: (_d = {},
        _d[$size.variable] = "2rem",
        _d),
    xl: (_e = {},
        _e[$size.variable] = "3rem",
        _e),
};
var defaultProps = {
    size: "md",
};
export default {
    baseStyle: baseStyle,
    sizes: sizes,
    defaultProps: defaultProps,
};
//# sourceMappingURL=spinner.js.map