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
import components from "./components";
import foundations from "./foundations";
import styles from "./styles";
var direction = "ltr";
var config = {
    useSystemColorMode: false,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
};
export var theme = __assign(__assign({ direction: direction }, foundations), { components: components, styles: styles, config: config });
export * from "./theme.types";
export * from "./utils";
export default theme;
//# sourceMappingURL=index.js.map