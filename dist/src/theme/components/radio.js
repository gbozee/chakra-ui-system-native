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
import { radioAnatomy as parts } from "@chakra-ui/anatomy";
import Checkbox from "./checkbox";
var baseStyleControl = function (props) {
    var _a = Checkbox.baseStyle(props).control, control = _a === void 0 ? {} : _a;
    return __assign(__assign({}, control), { borderRadius: "full", _checked: __assign(__assign({}, control["_checked"]), { _before: {
                content: "\"\"",
                display: "inline-block",
                pos: "relative",
                w: "50%",
                h: "50%",
                borderRadius: "50%",
                bg: "currentColor",
            } }) });
};
var baseStyle = function (props) { return ({
    label: Checkbox.baseStyle(props).label,
    control: baseStyleControl(props),
}); };
var sizes = {
    md: {
        control: { w: 4, h: 4 },
        label: { fontSize: "md" },
    },
    lg: {
        control: { w: 5, h: 5 },
        label: { fontSize: "lg" },
    },
    sm: {
        control: { width: 3, height: 3 },
        label: { fontSize: "sm" },
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
//# sourceMappingURL=radio.js.map