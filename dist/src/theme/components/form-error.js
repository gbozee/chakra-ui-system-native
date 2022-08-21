import { formErrorAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
var baseStyleText = function (props) {
    return {
        color: mode("red.500", "red.300")(props),
        mt: 2,
        fontSize: "sm",
        lineHeight: "normal",
    };
};
var baseStyleIcon = function (props) {
    return {
        marginEnd: "0.5em",
        color: mode("red.500", "red.300")(props),
    };
};
var baseStyle = function (props) { return ({
    text: baseStyleText(props),
    icon: baseStyleIcon(props),
}); };
export default {
    parts: parts.keys,
    baseStyle: baseStyle,
};
//# sourceMappingURL=form-error.js.map