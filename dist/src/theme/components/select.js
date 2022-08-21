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
import { selectAnatomy as parts } from "@chakra-ui/anatomy";
import { mergeWith } from "@chakra-ui/utils";
import { mode } from "@chakra-ui/theme-tools";
import Input from "./input";
var baseStyleField = function (props) {
    return __assign(__assign({}, Input.baseStyle.field), { bg: mode("white", "gray.700")(props), appearance: "none", paddingBottom: "1px", lineHeight: "normal", "> option, > optgroup": {
            bg: mode("white", "gray.700")(props),
        } });
};
var baseStyleIcon = {
    width: "1.5rem",
    height: "100%",
    insetEnd: "0.5rem",
    position: "relative",
    color: "currentColor",
    fontSize: "1.25rem",
    _disabled: {
        opacity: 0.5,
    },
};
var baseStyle = function (props) { return ({
    field: baseStyleField(props),
    icon: baseStyleIcon,
}); };
var iconSpacing = { paddingInlineEnd: "2rem" };
var sizes = mergeWith({}, Input.sizes, {
    lg: {
        field: iconSpacing,
    },
    md: {
        field: iconSpacing,
    },
    sm: {
        field: iconSpacing,
    },
    xs: {
        field: iconSpacing,
        icon: { insetEnd: "0.25rem" },
    },
});
export default {
    parts: parts.keys,
    baseStyle: baseStyle,
    sizes: sizes,
    variants: Input.variants,
    defaultProps: Input.defaultProps,
};
//# sourceMappingURL=select.js.map