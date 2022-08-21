import { EnvironmentProvider, } from "@chakra-ui/react-env";
import * as React from "react";
import { IdProvider } from "@chakra-ui/hooks";
import { ThemeProvider } from "./providers";
import { ColorModeProvider } from "@chakra-ui/color-mode";
/**
 * The global provider that must be added to make all Chakra components
 * work correctly
 */
export var ChakraProvider = function (props) {
    var children = props.children, colorModeManager = props.colorModeManager, _a = props.theme, theme = _a === void 0 ? {} : _a, environment = props.environment, cssVarsRoot = props.cssVarsRoot;
    var _children = (React.createElement(EnvironmentProvider, { environment: environment }, children));
    return (React.createElement(IdProvider, null,
        React.createElement(ThemeProvider, { theme: theme, cssVarsRoot: cssVarsRoot },
            React.createElement(ColorModeProvider, { colorModeManager: colorModeManager, options: theme.config || {} }, _children))));
};
//# sourceMappingURL=chakra-provider.js.map