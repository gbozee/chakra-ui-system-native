import { keyframes } from "../..";
import { getColor, mode } from "@chakra-ui/theme-tools";
var fade = function (startColor, endColor) {
    return keyframes({
        from: { borderColor: startColor, background: startColor },
        to: { borderColor: endColor, background: endColor },
    });
};
var baseStyle = function (props) {
    var defaultStartColor = mode("gray.100", "gray.800")(props);
    var defaultEndColor = mode("gray.400", "gray.600")(props);
    var _a = props.startColor, startColor = _a === void 0 ? defaultStartColor : _a, _b = props.endColor, endColor = _b === void 0 ? defaultEndColor : _b, speed = props.speed, theme = props.theme;
    var start = getColor(theme, startColor);
    var end = getColor(theme, endColor);
    return {
        opacity: 0.7,
        borderRadius: "2px",
        borderColor: start,
        background: end,
        animation: "".concat(speed, "s linear infinite alternate ").concat(fade(start, end)),
    };
};
export default {
    baseStyle: baseStyle,
};
//# sourceMappingURL=skeleton.js.map