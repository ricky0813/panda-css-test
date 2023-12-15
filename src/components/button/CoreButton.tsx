import React from "react";
import { css, cx } from "../../../styled-system/css";
import { cva } from "@styled-system/css/cva.mjs";
import { token } from "@styled-system/tokens";
import colors from "@/style-config/colors";
import { RecipeVariantProps, SystemStyleObject } from "@styled-system/types";
import { ButtonTypes, StyleTypes, coreButton } from "./style";

interface CoreButtonProps {
  buttonType?: ButtonTypes;
  styleType?: StyleTypes;
  text?: string;
  isLoading?: boolean;
  css?: SystemStyleObject;
  width?: string;
}

const CoreButton = ({
  buttonType = "primary",
  styleType = "filled",
  text = "button",
  isLoading = false,
  css: cssProps = {},
  width,
}: CoreButtonProps) => {
  // const additionalStyle = css({ ...styleProps, width: width });
  // const className = cx(
  //   additionalStyle,
  //   coreButton({
  //     buttonType: buttonType,
  //     styleType: styleType,
  //     isLoading: isLoading,
  //   })
  // );

  return (
    <button
      className={css(
        coreButton.raw({
          buttonType: buttonType,
          styleType: styleType,
          isLoading: isLoading,
        }),
        cssProps
      )}
    >
      <span>{text}</span>
    </button>
  );
};

export default CoreButton;
