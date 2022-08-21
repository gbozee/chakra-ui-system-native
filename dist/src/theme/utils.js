import { isObject } from "@chakra-ui/utils";
export var requiredChakraThemeKeys = [
    "borders",
    "breakpoints",
    "colors",
    "components",
    "config",
    "direction",
    "fonts",
    "fontSizes",
    "fontWeights",
    "letterSpacings",
    "lineHeights",
    "radii",
    "shadows",
    "sizes",
    "space",
    "styles",
    "transition",
    "zIndices",
];
export function isChakraTheme(unit) {
    if (!isObject(unit)) {
        return false;
    }
    return requiredChakraThemeKeys.every(function (propertyName) {
        return Object.prototype.hasOwnProperty.call(unit, propertyName);
    });
}
//# sourceMappingURL=utils.js.map