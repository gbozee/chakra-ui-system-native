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
import { drawerAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value) {
    if (value === "full") {
        return {
            dialog: { maxW: "100vw", h: "100vh" },
        };
    }
    return {
        dialog: { maxW: value },
    };
}
var baseStyleOverlay = {
    bg: "blackAlpha.600",
    zIndex: "overlay",
};
var baseStyleDialogContainer = {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
};
var baseStyleDialog = function (props) {
    var isFullHeight = props.isFullHeight;
    return __assign(__assign({}, (isFullHeight && { height: "100vh" })), { zIndex: "modal", maxH: "100vh", bg: mode("white", "gray.700")(props), color: "inherit", boxShadow: mode("lg", "dark-lg")(props) });
};
var baseStyleHeader = {
    px: 6,
    py: 4,
    fontSize: "xl",
    fontWeight: "semibold",
};
var baseStyleCloseButton = {
    position: "absolute",
    top: 2,
    insetEnd: 3,
};
var baseStyleBody = {
    px: 6,
    py: 2,
    flex: 1,
    overflow: "auto",
};
var baseStyleFooter = {
    px: 6,
    py: 4,
};
var baseStyle = function (props) { return ({
    overlay: baseStyleOverlay,
    dialogContainer: baseStyleDialogContainer,
    dialog: baseStyleDialog(props),
    header: baseStyleHeader,
    closeButton: baseStyleCloseButton,
    body: baseStyleBody,
    footer: baseStyleFooter,
}); };
var sizes = {
    xs: getSize("xs"),
    sm: getSize("md"),
    md: getSize("lg"),
    lg: getSize("2xl"),
    xl: getSize("4xl"),
    full: getSize("full"),
};
var defaultProps = {
    size: "xs",
};
export default {
    parts: parts.keys,
    baseStyle: baseStyle,
    sizes: sizes,
    defaultProps: defaultProps,
};
//# sourceMappingURL=drawer.js.map