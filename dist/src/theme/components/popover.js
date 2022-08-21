import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import { cssVar, mode } from "@chakra-ui/theme-tools";
var $popperBg = cssVar("popper-bg");
var $arrowBg = cssVar("popper-arrow-bg");
var $arrowShadowColor = cssVar("popper-arrow-shadow-color");
var baseStylePopper = {
    zIndex: 10,
};
var baseStyleContent = function (props) {
    var _a;
    var bg = mode("white", "gray.700")(props);
    var shadowColor = mode("gray.200", "whiteAlpha.300")(props);
    return _a = {},
        _a[$popperBg.variable] = "colors.".concat(bg),
        _a.bg = $popperBg.reference,
        _a[$arrowBg.variable] = $popperBg.reference,
        _a[$arrowShadowColor.variable] = "colors.".concat(shadowColor),
        _a.width = "xs",
        _a.border = "1px solid",
        _a.borderColor = "inherit",
        _a.borderRadius = "md",
        _a.boxShadow = "sm",
        _a.zIndex = "inherit",
        _a._focus = {
            outline: 0,
            boxShadow: "outline",
        },
        _a;
};
var baseStyleHeader = {
    px: 3,
    py: 2,
    borderBottomWidth: "1px",
};
var baseStyleBody = {
    px: 3,
    py: 2,
};
var baseStyleFooter = {
    px: 3,
    py: 2,
    borderTopWidth: "1px",
};
var baseStyleCloseButton = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
};
var baseStyle = function (props) { return ({
    popper: baseStylePopper,
    content: baseStyleContent(props),
    header: baseStyleHeader,
    body: baseStyleBody,
    footer: baseStyleFooter,
    arrow: {},
    closeButton: baseStyleCloseButton,
}); };
export default {
    parts: parts.keys,
    baseStyle: baseStyle,
};
//# sourceMappingURL=popover.js.map