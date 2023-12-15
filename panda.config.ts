import colors from "@/style-config/colors";
import fontWeights from "@/style-config/fontWeights";
import keyframes from "@/style-config/keyframes";
import { textStyles } from "@/style-config/textStyles";
import { defineConfig } from "@pandacss/dev";
// import { colors } from "@/style-config/colors";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors,
      fontWeights,
    },
    semanticTokens: {},
    extend: {
      textStyles,
      keyframes,
    },
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
