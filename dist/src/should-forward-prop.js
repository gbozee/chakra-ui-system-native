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
import { propNames } from "@chakra-ui/styled-system";
/**
 * List of props for emotion to omit from DOM.
 * It mostly consists of Chakra props
 */
var allPropNames = new Set(__spreadArray(__spreadArray([], __read(propNames), false), [
    "textStyle",
    "layerStyle",
    "apply",
    "isTruncated",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
], false));
/**
 * htmlWidth and htmlHeight is used in the <Image />
 * component to support the native `width` and `height` attributes
 *
 * https://github.com/chakra-ui/chakra-ui/issues/149
 */
var validHTMLProps = new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
export var shouldForwardProp = function (prop) {
    return validHTMLProps.has(prop) || !allPropNames.has(prop);
};
//# sourceMappingURL=should-forward-prop.js.map