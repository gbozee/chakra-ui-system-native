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
import { progressAnatomy as parts } from "@chakra-ui/anatomy";
import { generateStripe, getColor, mode, } from "@chakra-ui/theme-tools";
function filledStyle(props) {
    var c = props.colorScheme, t = props.theme, isIndeterminate = props.isIndeterminate, hasStripe = props.hasStripe;
    var stripeStyle = mode(generateStripe(), generateStripe("1rem", "rgba(0,0,0,0.1)"))(props);
    var bgColor = mode("".concat(c, ".500"), "".concat(c, ".200"))(props);
    var gradient = "linear-gradient(\n    to right,\n    transparent 0%,\n    ".concat(getColor(t, bgColor), " 50%,\n    transparent 100%\n  )");
    var addStripe = !isIndeterminate && hasStripe;
    return __assign(__assign({}, (addStripe && stripeStyle)), (isIndeterminate ? { bgImage: gradient } : { bgColor: bgColor }));
}
var baseStyleLabel = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
};
var baseStyleTrack = function (props) {
    return {
        bg: mode("gray.100", "whiteAlpha.300")(props),
    };
};
var baseStyleFilledTrack = function (props) {
    return __assign({ transitionProperty: "common", transitionDuration: "slow" }, filledStyle(props));
};
var baseStyle = function (props) { return ({
    label: baseStyleLabel,
    filledTrack: baseStyleFilledTrack(props),
    track: baseStyleTrack(props),
}); };
var sizes = {
    xs: {
        track: { h: "0.25rem" },
    },
    sm: {
        track: { h: "0.5rem" },
    },
    md: {
        track: { h: "0.75rem" },
    },
    lg: {
        track: { h: "1rem" },
    },
};
var defaultProps = {
    size: "md",
    colorScheme: "blue",
};
export default {
    parts: parts.keys,
    sizes: sizes,
    baseStyle: baseStyle,
    defaultProps: defaultProps,
};
//# sourceMappingURL=progress.js.map