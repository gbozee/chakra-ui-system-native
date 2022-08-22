var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { theme, isChakraTheme } from "./theme";
import { isFunction, mergeWith, pipe, } from "@chakra-ui/utils";
/**
 * NOTE: This got too complex to manage and it's not worth the extra complexity.
 * We'll re-evaluate this API in the future releases.
 *
 * Function to override or customize the Chakra UI theme conveniently.
 * First extension overrides the baseTheme and following extensions override the preceding extensions.
 *
 * @example:
 * import { theme as baseTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
 *
 * const customTheme = extendTheme(
 *   {
 *     colors: {
 *       brand: {
 *         500: "#b4d455",
 *       },
 *     },
 *   },
 *   withDefaultColorScheme({ colorScheme: "red" }),
 *   baseTheme // optional
 * )
 */
export function extendTheme() {
    var extensions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        extensions[_i] = arguments[_i];
    }
    var overrides = __spreadArray([], __read(extensions), false);
    var baseTheme = extensions[extensions.length - 1];
    if (isChakraTheme(baseTheme) &&
        // this ensures backward compatibility
        // previously only `extendTheme(override, baseTheme?)` was allowed
        overrides.length > 1) {
        overrides = overrides.slice(0, overrides.length - 1);
    }
    else {
        baseTheme = theme;
    }
    return pipe.apply(void 0, __spreadArray([], __read(overrides.map(function (extension) { return function (prevTheme) {
        return isFunction(extension)
            ? extension(prevTheme)
            : mergeThemeOverride(prevTheme, extension);
    }; })), false))(baseTheme);
}
export function mergeThemeOverride() {
    var overrides = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        overrides[_i] = arguments[_i];
    }
    return mergeWith.apply(void 0, __spreadArray(__spreadArray([{}], __read(overrides), false), [mergeThemeCustomizer], false));
}
function mergeThemeCustomizer(source, override, key, object) {
    if ((isFunction(source) || isFunction(override)) &&
        Object.prototype.hasOwnProperty.call(object, key)) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var sourceValue = isFunction(source) ? source.apply(void 0, __spreadArray([], __read(args), false)) : source;
            var overrideValue = isFunction(override) ? override.apply(void 0, __spreadArray([], __read(args), false)) : override;
            return mergeWith({}, sourceValue, overrideValue, mergeThemeCustomizer);
        };
    }
    // fallback to default behaviour
    return undefined;
}
//# sourceMappingURL=extend-theme.js.map