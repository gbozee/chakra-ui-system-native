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
import { styled } from "./system";
function factory() {
    var cache = new Map();
    return new Proxy(styled, {
        /**
         * @example
         * const Div = chakra("div")
         * const WithChakra = chakra(AnotherComponent)
         */
        apply: function (_target, _thisArg, argArray) {
            return styled.apply(void 0, __spreadArray([], __read(argArray), false));
        },
        /**
         * @example
         * <chakra.div />
         */
        get: function (_, element) {
            if (!cache.has(element)) {
                cache.set(element, styled(element));
            }
            return cache.get(element);
        },
    });
}
export var nChakra = factory();
//# sourceMappingURL=factory.js.map