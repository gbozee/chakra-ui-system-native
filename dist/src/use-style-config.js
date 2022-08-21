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
import { filterUndefined, memoizedGet as get, mergeWith, runIfFn, omit, } from "@chakra-ui/utils";
import { useRef } from "react";
import isEqual from "react-fast-compare";
import { useChakra } from "./hooks";
export function useStyleConfig(themeKey, props, opts) {
    var _a, _b, _c, _d, _e, _f;
    if (props === void 0) { props = {}; }
    if (opts === void 0) { opts = {}; }
    var styleConfigProp = props.styleConfig, rest = __rest(props, ["styleConfig"]);
    var _g = useChakra(), theme = _g.theme, colorMode = _g.colorMode;
    var themeStyleConfig = get(theme, "components.".concat(themeKey));
    var styleConfig = styleConfigProp || themeStyleConfig;
    var mergedProps = mergeWith({ theme: theme, colorMode: colorMode }, (_a = styleConfig === null || styleConfig === void 0 ? void 0 : styleConfig.defaultProps) !== null && _a !== void 0 ? _a : {}, filterUndefined(omit(rest, ["children"])));
    var stylesRef = useRef({});
    if (styleConfig) {
        var baseStyles = runIfFn((_b = styleConfig.baseStyle) !== null && _b !== void 0 ? _b : {}, mergedProps);
        var variants = runIfFn((_d = (_c = styleConfig.variants) === null || _c === void 0 ? void 0 : _c[mergedProps.variant]) !== null && _d !== void 0 ? _d : {}, mergedProps);
        var sizes = runIfFn((_f = (_e = styleConfig.sizes) === null || _e === void 0 ? void 0 : _e[mergedProps.size]) !== null && _f !== void 0 ? _f : {}, mergedProps);
        var styles_1 = mergeWith({}, baseStyles, sizes, variants);
        if ((opts === null || opts === void 0 ? void 0 : opts.isMultiPart) && styleConfig.parts) {
            styleConfig.parts.forEach(function (part) {
                var _a;
                styles_1[part] = (_a = styles_1[part]) !== null && _a !== void 0 ? _a : {};
            });
        }
        var isStyleEqual = isEqual(stylesRef.current, styles_1);
        if (!isStyleEqual) {
            stylesRef.current = styles_1;
        }
    }
    return stylesRef.current;
}
export function useMultiStyleConfig(themeKey, props) {
    return useStyleConfig(themeKey, props, { isMultiPart: true });
}
//# sourceMappingURL=use-style-config.js.map