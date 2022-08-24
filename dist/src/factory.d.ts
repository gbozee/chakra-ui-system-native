import { SystemStyleObject } from "@chakra-ui/styled-system";
import { As, ChakraComponent } from "./system.types";
interface JSXNativeElements {
    View: any;
    Text: any;
    Pressable: any;
    TouchableOpacity: any;
}
declare type NativeElements = keyof JSXNativeElements;
export declare type NativeChakraComponents = {
    [Tag in NativeElements]: ChakraComponent<Tag | any, {}>;
};
declare type StyleResolverProps = SystemStyleObject & {
    __css?: SystemStyleObject;
    sx?: SystemStyleObject;
    theme: any;
    css?: any;
};
export interface ChakraStyledOptions {
    shouldForwardProp?(prop: string): boolean;
    label?: string;
    baseStyle?: SystemStyleObject | ((props: StyleResolverProps) => SystemStyleObject);
}
declare type ChakraFactory = {
    <T extends As, P = {}>(component: T, options?: ChakraStyledOptions): ChakraComponent<T, P>;
};
export declare const nChakra: ChakraFactory & NativeChakraComponents;
export {};
//# sourceMappingURL=factory.d.ts.map