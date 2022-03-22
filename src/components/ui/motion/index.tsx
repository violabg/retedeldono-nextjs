import {
  Box,
  BoxProps,
  chakra,
  ChakraProps,
  ComponentWithAs,
  forwardRef,
  IconButton,
  IconButtonProps,
  SimpleGrid,
  SimpleGridProps,
} from "@chakra-ui/react";
import {
  HTMLMotionProps,
  isValidMotionProp,
  motion,
  MotionProps,
} from "framer-motion";

export const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export type GenericMotionProps<Props> = Omit<Props, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

type As<Props = any> = React.ElementType<Props>;

// *********************************
//  create generics motion component
//**********************************
export const generateMotion = <Props extends object, T extends As>(
  Component: React.ComponentClass<Props, any> | React.FunctionComponent<Props>
) => {
  const Wrapped = motion(
    forwardRef<Props, T>((props, ref) => {
      const chakraProps = Object.fromEntries(
        // do not pass framer props to DOM element
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      );
      // @ts-ignore
      return <Component ref={ref} {...chakraProps} />;
    })
  ) as ComponentWithAs<T, GenericMotionProps<Props>>;
  Wrapped.displayName = `Motion${Component.displayName}`;
  return Wrapped;
};

export const MotionBoxT = generateMotion<BoxProps, "div">(Box);
export const MotionSimpleGrid = generateMotion<SimpleGridProps, "div">(
  SimpleGrid
);

export type MotionBoxProps = BoxProps & HTMLMotionProps<"div">;

export type MotionBoxTProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

// *********************************
// support motion transition props
//**********************************
export const MotionBoxT2 = motion(
  forwardRef<MotionBoxTProps, "div">((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <chakra.div ref={ref} {...chakraProps} />;
  })
) as ComponentWithAs<"div", MotionBoxProps>;

export const MotionBox = motion<BoxProps>(Box);
export const MotionIconButton = generateMotion<IconButtonProps, "a">(
  IconButton
);
