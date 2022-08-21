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
import borders from "./borders";
import breakpoints from "./breakpoints";
import colors from "./colors";
import radii from "./radius";
import shadows from "./shadows";
import sizes from "./sizes";
import { spacing } from "./spacing";
import transition from "./transition";
import typography from "./typography";
import zIndices from "./z-index";
import blur from "./blur";
var foundations = __assign(__assign({ breakpoints: breakpoints, zIndices: zIndices, radii: radii, blur: blur, colors: colors }, typography), { sizes: sizes, shadows: shadows, space: spacing, borders: borders, transition: transition });
export default foundations;
//# sourceMappingURL=index.js.map