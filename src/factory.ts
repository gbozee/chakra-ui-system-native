import { SystemStyleObject } from "@chakra-ui/styled-system";
import { styled } from "./system";
import {
  As,
  ChakraComponent,
} from "./system.types";

interface JSXNativeElements {
  View: any;
  Text: any;
  Pressable: any;
  TouchableOpacity: any;
}
type NativeElements = keyof JSXNativeElements;

export type NativeChakraComponents = {
  [Tag in NativeElements]: ChakraComponent<Tag | any, {}>;
};

type StyleResolverProps = SystemStyleObject & {
  __css?: SystemStyleObject;
  sx?: SystemStyleObject;
  theme: any;
  css?: any;
  // css?: CSSObject;
};
export interface ChakraStyledOptions {
  shouldForwardProp?(prop: string): boolean;
  label?: string;
  baseStyle?:
    | SystemStyleObject
    | ((props: StyleResolverProps) => SystemStyleObject);
}

type ChakraFactory = {
  <T extends As, P = {}>(
    component: T,
    options?: ChakraStyledOptions
  ): ChakraComponent<T, P>;
};

function factory() {
  const cache = new Map<
    NativeElements,
    ChakraComponent<NativeElements | any>
  >();

  return new Proxy(styled, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(
      _target,
      _thisArg,
      argArray: [NativeElements | any, ChakraStyledOptions]
    ) {
      return styled(...argArray);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(_, element: NativeElements) {
      if (!cache.has(element)) {
        cache.set(element, styled(element as any));
      }
      return cache.get(element);
    },
  }) as ChakraFactory & NativeChakraComponents;
}

export const nChakra = factory();
