var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { css, isStyleProp, } from "@chakra-ui/styled-system";
import { filterUndefined, objectFilter, runIfFn } from "@chakra-ui/utils";
// import _styled, { CSSObject, FunctionInterpolation } from "@emotion/styled"
import _styled from "@emotion/native";
import { shouldForwardProp } from "./should-forward-prop";
import { domElements } from "./system.utils";
/**
 * Style resolver function that manages how style props are merged
 * in combination with other possible ways of defining styles.
 *
 * For example, take a component defined this way:
 * ```jsx
 * <Box fontSize="24px" sx={{ fontSize: "40px" }}></Box>
 * ```
 *
 * We want to manage the priority of the styles properly to prevent unwanted
 * behaviors. Right now, the `sx` prop has the highest priority so the resolved
 * fontSize will be `40px`
 */
export var toCSSObject = function (_a) {
    var baseStyle = _a.baseStyle;
    return function (props) {
        var theme = props.theme, cssProp = props.css, __css = props.__css, sx = props.sx, rest = __rest(props, ["theme", "css", "__css", "sx"]);
        var styleProps = objectFilter(rest, function (_, prop) { return isStyleProp(prop); });
        var finalBaseStyle = runIfFn(baseStyle, props);
        var finalStyles = Object.assign({}, __css, finalBaseStyle, filterUndefined(styleProps), sx);
        var computedCSS = css(finalStyles)(props.theme);
        return cssProp ? [computedCSS, cssProp] : computedCSS;
    };
};
export function styled(component, options) {
    var _a = options !== null && options !== void 0 ? options : {}, baseStyle = _a.baseStyle, styledOptions = __rest(_a, ["baseStyle"]);
    if (!styledOptions.shouldForwardProp) {
        styledOptions.shouldForwardProp = shouldForwardProp;
    }
    var styleObject = toCSSObject({ baseStyle: baseStyle });
    return _styled(component, styledOptions)(styleObject);
}
export var chakra = styled;
domElements.forEach(function (tag) {
    chakra[tag] = chakra(tag);
});
//# sourceMappingURL=system.js.map