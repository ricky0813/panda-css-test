import { defineTokens } from "@pandacss/dev";

const _fontWeights = {
  title: { value: 700 },
  body: {
    bold: { value: 500 },
    light: { value: 300 },
  },
} as const;

const fontWeights = defineTokens.fontWeights(_fontWeights);

export default fontWeights;
