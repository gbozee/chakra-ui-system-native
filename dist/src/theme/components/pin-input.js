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
var _a;
import Input from "./input";
var baseStyle = __assign(__assign({}, Input.baseStyle.field), { textAlign: "center" });
var sizes = {
    lg: {
        fontSize: "lg",
        w: 12,
        h: 12,
        borderRadius: "md",
    },
    md: {
        fontSize: "md",
        w: 10,
        h: 10,
        borderRadius: "md",
    },
    sm: {
        fontSize: "sm",
        w: 8,
        h: 8,
        borderRadius: "sm",
    },
    xs: {
        fontSize: "xs",
        w: 6,
        h: 6,
        borderRadius: "sm",
    },
};
var variants = {
    outline: function (props) { var _a; return (_a = Input.variants.outline(props).field) !== null && _a !== void 0 ? _a : {}; },
    flushed: function (props) { var _a; return (_a = Input.variants.flushed(props).field) !== null && _a !== void 0 ? _a : {}; },
    filled: function (props) { var _a; return (_a = Input.variants.filled(props).field) !== null && _a !== void 0 ? _a : {}; },
    unstyled: (_a = Input.variants.unstyled.field) !== null && _a !== void 0 ? _a : {},
};
var defaultProps = Input.defaultProps;
export default {
    baseStyle: baseStyle,
    sizes: sizes,
    variants: variants,
    defaultProps: defaultProps,
};
//# sourceMappingURL=pin-input.js.map