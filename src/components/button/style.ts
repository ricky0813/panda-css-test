import { cva } from "@styled-system/css/cva.mjs";
import { styled } from "@styled-system/jsx";
import { RecipeVariantProps, SystemStyleObject } from "@styled-system/types";

const disabledButton: SystemStyleObject = {
  color: "gray.30",
  bgColor: "gray.15",
  "& svg": {
    fill: "gray.30",
  },
};

const buttonBase: SystemStyleObject = {
  height: "40px",
  width: "50px",
  whiteSpace: "nowrap",
  padding: "0 24px",
  rounded: "8px",
  position: "relative",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textStyle: "body.pBold",

  transition: "0.2s",
  cursor: "pointer",

  _disabled: disabledButton,
};

const loading: SystemStyleObject = {
  "& > span": {
    visibility: "hidden",
  },
  _before: {
    content: '""',
    position: "absolute",
    width: "16px",
    height: "16px",
    top: "calc(50% - (8px + 2px))",
    left: "calc(50% - (8px + 2px))",
    margin: "auto",
    border: "2px solid transparent",
    // border-top-color: 각 타입에 따라.
    rounded: "50%",
    animation: "buttonSpin 1s ease infinite",
  },
};

const buttonTypes = ["primary", "gray"] as const;
const styleTypes = ["filled", "tonal", "outlined", "text"] as const;
export type ButtonTypes = (typeof buttonTypes)[number];
export type StyleTypes = (typeof styleTypes)[number];

const ButtonVariants: Record<
  ButtonTypes,
  Record<StyleTypes, SystemStyleObject>
> = {
  primary: {
    filled: {
      color: "gray.white",
      bgColor: "primary.50",
      _hover: {
        bgColor: "primary.60",
      },
      _active: {
        bgColor: "primary.70",
      },
      _before: {
        borderTopColor: "gray.white",
      },
    },
    tonal: {
      color: "primary.80",
      bgColor: "primary.10",
      _active: {
        bgColor: "primary.15",
      },
      _before: {
        borderTopColor: "primary.80",
      },
    },
    outlined: {
      color: "primary.80",
      bgColor: "gray.white",
      border: "1px solid token(colors.primary.50)",
      _hover: {
        bgColor: "primary.10",
      },
      _active: {
        bgColor: "primary.15",
      },
      _before: {
        borderTopColor: "primary.80",
      },
    },
    text: {
      color: "primary.50",
      bgColor: "transparent",
      _hover: {
        bgColor: "primary.10",
      },
      _active: {
        bgColor: "primary.15",
      },
      _before: {
        borderTopColor: "primary.50",
      },
    },
  },
  gray: {
    filled: {},
    tonal: {},
    outlined: {},
    text: {},
  },
};

const getSpecificVariant = (buttonType: ButtonTypes, styleType: StyleTypes) =>
  ButtonVariants[buttonType][styleType];

const getCompoundVariants = () =>
  buttonTypes
    .map((buttonType) =>
      styleTypes.map((styleType) => ({
        buttonType: buttonType,
        styleType: styleType,
        css: getSpecificVariant(buttonType, styleType),
      }))
    )
    .reduce((prev, curr) => [...prev, ...curr], []);

export const coreButton = cva({
  base: buttonBase,

  variants: {
    isLoading: {
      true: loading,
    },
  },

  compoundVariants: getCompoundVariants(),

  defaultVariants: {
    buttonType: "primary",
    styleType: "primary",
    isLoading: false,
  },
});

export type ButtonVariants = RecipeVariantProps<typeof coreButton>;

export const Button = styled("button", coreButton);
