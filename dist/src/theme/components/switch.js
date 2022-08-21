var _a, _b, _c;
import { switchAnatomy as parts } from "@chakra-ui/anatomy";
import { calc, cssVar, mode } from "@chakra-ui/theme-tools";
var $width = cssVar("switch-track-width");
var $height = cssVar("switch-track-height");
var $diff = cssVar("switch-track-diff");
var diffValue = calc.subtract($width, $height);
var $translateX = cssVar("switch-thumb-x");
var baseStyleTrack = function (props) {
    var c = props.colorScheme;
    return {
        borderRadius: "full",
        p: "2px",
        width: [$width.reference],
        height: [$height.reference],
        transitionProperty: "common",
        transitionDuration: "fast",
        bg: mode("gray.300", "whiteAlpha.400")(props),
        _focus: {
            boxShadow: "outline",
        },
        _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
        },
        _checked: {
            bg: mode("".concat(c, ".500"), "".concat(c, ".200"))(props),
        },
    };
};
var baseStyleThumb = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [$height.reference],
    height: [$height.reference],
    _checked: {
        transform: "translateX(".concat($translateX.reference, ")"),
    },
};
var baseStyle = function (props) {
    var _a, _b;
    return ({
        container: (_a = {},
            _a[$diff.variable] = diffValue,
            _a[$translateX.variable] = $diff.reference,
            _a._rtl = (_b = {},
                _b[$translateX.variable] = calc($diff).negate().toString(),
                _b),
            _a),
        track: baseStyleTrack(props),
        thumb: baseStyleThumb,
    });
};
var sizes = {
    sm: {
        container: (_a = {},
            _a[$width.variable] = "1.375rem",
            _a[$height.variable] = "0.75rem",
            _a),
    },
    md: {
        container: (_b = {},
            _b[$width.variable] = "1.875rem",
            _b[$height.variable] = "1rem",
            _b),
    },
    lg: {
        container: (_c = {},
            _c[$width.variable] = "2.875rem",
            _c[$height.variable] = "1.5rem",
            _c),
    },
};
var defaultProps = {
    size: "md",
    colorScheme: "blue",
};
export default {
    parts: parts.keys,
    baseStyle: baseStyle,
    sizes: sizes,
    defaultProps: defaultProps,
};
//# sourceMappingURL=switch.js.map