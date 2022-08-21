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
import { useColorMode } from "@chakra-ui/color-mode";
import { filterUndefined, mergeWith, runIfFn, } from "@chakra-ui/utils";
import { useMemo, useRef } from "react";
import isEqual from "react-fast-compare";
import { useTheme } from "./providers";
import { omitThemingProps } from "./system.utils";
export function useChakra() {
    var colorModeResult = useColorMode();
    var theme = useTheme();
    return __assign(__assign({}, colorModeResult), { theme: theme });
}
var resolveBreakpointValue = function (theme, tokenValue, fallbackValue) {
    var _a, _b;
    if (tokenValue === null)
        return tokenValue;
    var getValue = function (val) { var _a, _b; return (_b = (_a = theme.__breakpoints) === null || _a === void 0 ? void 0 : _a.asArray) === null || _b === void 0 ? void 0 : _b[val]; };
    return (_b = (_a = getValue(tokenValue)) !== null && _a !== void 0 ? _a : getValue(fallbackValue)) !== null && _b !== void 0 ? _b : fallbackValue;
};
// inspired from ./css.ts : resolveTokenValue
var resolveTokenValue = function (theme, tokenValue, fallbackValue) {
    var _a, _b;
    if (tokenValue == null)
        return tokenValue;
    var getValue = function (val) { var _a, _b; return (_b = (_a = theme.__cssMap) === null || _a === void 0 ? void 0 : _a[val]) === null || _b === void 0 ? void 0 : _b.value; };
    return (_b = (_a = getValue(tokenValue)) !== null && _a !== void 0 ? _a : getValue(fallbackValue)) !== null && _b !== void 0 ? _b : fallbackValue;
};
export function useToken(scale, token, fallback) {
    var theme = useTheme();
    if (Array.isArray(token)) {
        var fallbackArr_1 = [];
        if (fallback) {
            fallbackArr_1 = Array.isArray(fallback) ? fallback : [fallback];
        }
        return token.map(function (token, index) {
            var _a, _b;
            if (scale === "breakpoints") {
                return resolveBreakpointValue(theme, token, (_a = fallbackArr_1[index]) !== null && _a !== void 0 ? _a : token);
            }
            var path = "".concat(scale, ".").concat(token);
            return resolveTokenValue(theme, path, (_b = fallbackArr_1[index]) !== null && _b !== void 0 ? _b : token);
        });
    }
    if (scale === "breakpoints") {
        return resolveBreakpointValue(theme, token, fallback);
    }
    var path = "".concat(scale, ".").concat(token);
    return resolveTokenValue(theme, path, fallback);
}
export function useProps(themeKey, props) {
    var _a, _b;
    var _c = useChakra(), theme = _c.theme, colorMode = _c.colorMode;
    var styleConfig = (props.styleConfig || ((_a = theme.components) === null || _a === void 0 ? void 0 : _a[themeKey]));
    var defaultProps = (_b = styleConfig === null || styleConfig === void 0 ? void 0 : styleConfig.defaultProps) !== null && _b !== void 0 ? _b : {};
    var propsWithDefault = __assign(__assign({}, defaultProps), filterUndefined(props));
    var stylesRef = useRef({});
    var mergedProps = mergeWith({}, propsWithDefault, { theme: theme, colorMode: colorMode });
    var memoizedStyles = useMemo(function () {
        var _a, _b, _c, _d, _e;
        if (styleConfig) {
            var baseStyles = runIfFn((_a = styleConfig.baseStyle) !== null && _a !== void 0 ? _a : {}, mergedProps);
            var variants = runIfFn((_c = (_b = styleConfig.variants) === null || _b === void 0 ? void 0 : _b[mergedProps.variant]) !== null && _c !== void 0 ? _c : {}, mergedProps);
            var sizes = runIfFn((_e = (_d = styleConfig.sizes) === null || _d === void 0 ? void 0 : _d[mergedProps.size]) !== null && _e !== void 0 ? _e : {}, mergedProps);
            var styles_1 = mergeWith(baseStyles, sizes, variants);
            if (styleConfig.parts) {
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
    }, [styleConfig, mergedProps]);
    return {
        styles: memoizedStyles,
        props: omitThemingProps(propsWithDefault),
    };
}
//# sourceMappingURL=hooks.js.map