import { SystemStyleObject } from "@pandacss/dev";
import { css, cx } from "@styled-system/css";
import React from "react";

const TestButton = ({ bg }: { bg: SystemStyleObject }) => {
  const obj = { bg: bg };
  const classname = cx();
  return <button className={css(bg)}>Test</button>;
};

export default TestButton;
