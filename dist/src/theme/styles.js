import { mode } from "@chakra-ui/theme-tools";
var styles = {
    global: function (props) { return ({
        body: {
            fontFamily: "body",
            color: mode("gray.800", "whiteAlpha.900")(props),
            bg: mode("white", "gray.800")(props),
            transitionProperty: "background-color",
            transitionDuration: "normal",
            lineHeight: "base",
        },
        "*::placeholder": {
            color: mode("gray.400", "whiteAlpha.400")(props),
        },
        "*, *::before, &::after": {
            borderColor: mode("gray.200", "whiteAlpha.300")(props),
            wordWrap: "break-word",
        },
    }); },
};
export default styles;
//# sourceMappingURL=styles.js.map