import type {
  SystemStyleInterpolation,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import Input from "./input";

const baseStyle: SystemStyleObject = {
  ...Input.baseStyle.field,
  paddingY: "8px",
  minHeight: "80px",
  lineHeight: "short",
  verticalAlign: "top",
};

const variants: Record<string, SystemStyleInterpolation> = {
  outline: (props: any) => Input.variants.outline(props).field ?? {},
  flushed: (props: any) => Input.variants.flushed(props).field ?? {},
  filled: (props: any) => Input.variants.filled(props).field ?? {},
  unstyled: Input.variants.unstyled.field ?? {},
};

const sizes: Record<string, SystemStyleObject> = {
  xs: Input.sizes.xs.field ?? {},
  sm: Input.sizes.sm.field ?? {},
  md: Input.sizes.md.field ?? {},
  lg: Input.sizes.lg.field ?? {},
};

const defaultProps = {
  size: "md",
  variant: "outline",
};

export default {
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
