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
import { useColorMode } from "@chakra-ui/color-mode";
import { css, toCSSVar, } from "@chakra-ui/styled-system";
import { memoizedGet as get, runIfFn } from "@chakra-ui/utils";
import { createContext } from "@chakra-ui/react-utils";
import { Global, ThemeContext, ThemeProvider as EmotionThemeProvider, } from "@emotion/react";
import * as React from "react";
export var ThemeProvider = function (props) {
    var _a = props.cssVarsRoot, cssVarsRoot = _a === void 0 ? ":host, :root" : _a, theme = props.theme, children = props.children;
    var computedTheme = React.useMemo(function () { return toCSSVar(theme); }, [theme]);
    return (React.createElement(EmotionThemeProvider, { theme: computedTheme },
        React.createElement(Global, { styles: function (theme) {
                var _a;
                return (_a = {}, _a[cssVarsRoot] = theme.__cssVars, _a);
            } }),
        children));
};
export function useTheme() {
    var theme = React.useContext(ThemeContext);
    if (!theme) {
        throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
    }
    return theme;
}
var _a = __read(createContext({
    name: "StylesContext",
    errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
}), 2), StylesProvider = _a[0], useStyles = _a[1];
export { StylesProvider, useStyles };
/**
 * Applies styles defined in `theme.styles.global` globally
 * using emotion's `Global` component
 */
export var GlobalStyle = function () {
    var colorMode = useColorMode().colorMode;
    return (React.createElement(Global, { styles: function (theme) {
            var styleObjectOrFn = get(theme, "styles.global");
            var globalStyles = runIfFn(styleObjectOrFn, { theme: theme, colorMode: colorMode });
            if (!globalStyles)
                return undefined;
            var styles = css(globalStyles)(theme);
            return styles;
        } }));
};
//# sourceMappingURL=providers.js.map