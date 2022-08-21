import { mode, cssVar } from "@chakra-ui/theme-tools";
var $bg = cssVar("tooltip-bg");
var $arrowBg = cssVar("popper-arrow-bg");
var baseStyle = function (props) {
    var _a;
    var bg = mode("gray.700", "gray.300")(props);
    return _a = {},
        _a[$bg.variable] = "colors.".concat(bg),
        _a.px = "8px",
        _a.py = "2px",
        _a.bg = [$bg.reference],
        _a[$arrowBg.variable] = [$bg.reference],
        _a.color = mode("whiteAlpha.900", "gray.900")(props),
        _a.borderRadius = "sm",
        _a.fontWeight = "medium",
        _a.fontSize = "sm",
        _a.boxShadow = "md",
        _a.maxW = "320px",
        _a.zIndex = "tooltip",
        _a;
};
export default {
    baseStyle: baseStyle,
};
//# sourceMappingURL=tooltip.js.map