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
import { sliderAnatomy as parts } from "@chakra-ui/anatomy";
import { mode, orient } from "@chakra-ui/theme-tools";
function thumbOrientation(props) {
    return orient({
        orientation: props.orientation,
        vertical: {
            left: "50%",
            transform: "translateX(-50%)",
            _active: {
                transform: "translateX(-50%) scale(1.15)",
            },
        },
        horizontal: {
            top: "50%",
            transform: "translateY(-50%)",
            _active: {
                transform: "translateY(-50%) scale(1.15)",
            },
        },
    });
}
var baseStyleContainer = function (props) {
    var orientation = props.orientation;
    return __assign({ display: "inline-block", position: "relative", cursor: "pointer", _disabled: {
            opacity: 0.6,
            cursor: "default",
            pointerEvents: "none",
        } }, orient({
        orientation: orientation,
        vertical: { h: "100%" },
        horizontal: { w: "100%" },
    }));
};
var baseStyleTrack = function (props) {
    return {
        overflow: "hidden",
        borderRadius: "sm",
        bg: mode("gray.200", "whiteAlpha.200")(props),
        _disabled: {
            bg: mode("gray.300", "whiteAlpha.300")(props),
        },
    };
};
var baseStyleThumb = function (props) {
    return __assign({ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", outline: 0, zIndex: 1, borderRadius: "full", bg: "white", boxShadow: "base", border: "1px solid", borderColor: "transparent", transitionProperty: "transform", transitionDuration: "normal", _focus: { boxShadow: "outline" }, _disabled: { bg: "gray.300" } }, thumbOrientation(props));
};
var baseStyleFilledTrack = function (props) {
    var c = props.colorScheme;
    return {
        width: "inherit",
        height: "inherit",
        bg: mode("".concat(c, ".500"), "".concat(c, ".200"))(props),
    };
};
var baseStyle = function (props) { return ({
    container: baseStyleContainer(props),
    track: baseStyleTrack(props),
    thumb: baseStyleThumb(props),
    filledTrack: baseStyleFilledTrack(props),
}); };
var sizeLg = function (props) {
    return {
        thumb: { w: "16px", h: "16px" },
        track: orient({
            orientation: props.orientation,
            horizontal: { h: "4px" },
            vertical: { w: "4px" },
        }),
    };
};
var sizeMd = function (props) {
    return {
        thumb: { w: "14px", h: "14px" },
        track: orient({
            orientation: props.orientation,
            horizontal: { h: "4px" },
            vertical: { w: "4px" },
        }),
    };
};
var sizeSm = function (props) {
    return {
        thumb: { w: "10px", h: "10px" },
        track: orient({
            orientation: props.orientation,
            horizontal: { h: "2px" },
            vertical: { w: "2px" },
        }),
    };
};
var sizes = {
    lg: sizeLg,
    md: sizeMd,
    sm: sizeSm,
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
//# sourceMappingURL=slider.js.map