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
var _a, _b, _c, _d, _e;
import Input from "./input";
var baseStyle = __assign(__assign({}, Input.baseStyle.field), { paddingY: "8px", minHeight: "80px", lineHeight: "short", verticalAlign: "top" });
var variants = {
    outline: function (props) { var _a; return (_a = Input.variants.outline(props).field) !== null && _a !== void 0 ? _a : {}; },
    flushed: function (props) { var _a; return (_a = Input.variants.flushed(props).field) !== null && _a !== void 0 ? _a : {}; },
    filled: function (props) { var _a; return (_a = Input.variants.filled(props).field) !== null && _a !== void 0 ? _a : {}; },
    unstyled: (_a = Input.variants.unstyled.field) !== null && _a !== void 0 ? _a : {},
};
var sizes = {
    xs: (_b = Input.sizes.xs.field) !== null && _b !== void 0 ? _b : {},
    sm: (_c = Input.sizes.sm.field) !== null && _c !== void 0 ? _c : {},
    md: (_d = Input.sizes.md.field) !== null && _d !== void 0 ? _d : {},
    lg: (_e = Input.sizes.lg.field) !== null && _e !== void 0 ? _e : {},
};
var defaultProps = {
    size: "md",
    variant: "outline",
};
export default {
    baseStyle: baseStyle,
    sizes: sizes,
    variants: variants,
    defaultProps: defaultProps,
};
//# sourceMappingURL=textarea.js.map