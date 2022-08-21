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
var _b, _c;
import { numberInputAnatomy as parts } from "@chakra-ui/anatomy";
import { calc, cssVar, mode } from "@chakra-ui/theme-tools";
import typography from "../foundations/typography";
import Input from "./input";
var variants = Input.variants, defaultProps = Input.defaultProps;
var $stepperWidth = cssVar("number-input-stepper-width");
var $inputPadding = cssVar("number-input-input-padding");
var inputPaddingValue = calc($stepperWidth).add("0.5rem").toString();
var baseStyleRoot = (_a = {},
    _a[$stepperWidth.variable] = "24px",
    _a[$inputPadding.variable] = inputPaddingValue,
    _a);
var baseStyleField = (_c = (_b = Input.baseStyle) === null || _b === void 0 ? void 0 : _b.field) !== null && _c !== void 0 ? _c : {};
var baseStyleStepperGroup = {
    width: [$stepperWidth.reference],
};
var baseStyleStepper = function (props) {
    return {
        borderStart: "1px solid",
        borderStartColor: mode("inherit", "whiteAlpha.300")(props),
        color: mode("inherit", "whiteAlpha.800")(props),
        _active: {
            bg: mode("gray.200", "whiteAlpha.300")(props),
        },
        _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
        },
    };
};
var baseStyle = function (props) { return ({
    root: baseStyleRoot,
    field: baseStyleField,
    stepperGroup: baseStyleStepperGroup,
    stepper: baseStyleStepper(props),
}); };
function getSize(size) {
    var _a, _b;
    var sizeStyle = Input.sizes[size];
    var radius = {
        lg: "md",
        md: "md",
        sm: "sm",
        xs: "sm",
    };
    var _fontSize = (_b = (_a = sizeStyle.field) === null || _a === void 0 ? void 0 : _a.fontSize) !== null && _b !== void 0 ? _b : "md";
    var fontSize = typography.fontSizes[_fontSize.toString()];
    return {
        field: __assign(__assign({}, sizeStyle.field), { paddingInlineEnd: $inputPadding.reference, verticalAlign: "top" }),
        stepper: {
            fontSize: calc(fontSize).multiply(0.75).toString(),
            _first: {
                borderTopEndRadius: radius[size],
            },
            _last: {
                borderBottomEndRadius: radius[size],
                mt: "-1px",
                borderTopWidth: 1,
            },
        },
    };
}
var sizes = {
    xs: getSize("xs"),
    sm: getSize("sm"),
    md: getSize("md"),
    lg: getSize("lg"),
};
export default {
    parts: parts.keys,
    baseStyle: baseStyle,
    sizes: sizes,
    variants: variants,
    defaultProps: defaultProps,
};
//# sourceMappingURL=number-input.js.map