import { defineTokens } from "@pandacss/dev";

const _colors = {
  primary: {
    10: { value: "#E5E3FF" },
    15: { value: "#D3CFFF" },
    20: { value: "#AFA8FF" },
    30: { value: "#8A80FF" },
    40: { value: "#5959FF" },
    50: { value: "#4232FF" },
    60: { value: "#1200E3" },
    70: { value: "#0F00BB" },
    80: { value: "#0C0094" },
    90: { value: "#08006D" },
    95: { value: "#050046" },
  },

  gray: {
    5: { value: "#F8F9FA" },
    10: { value: "#F1F3F5" },
    15: { value: "#DEE2E6" },
    20: { value: "#ADB5BD" },
    30: { value: "#868E96" },
    40: { value: "#6D757E" },
    50: { value: "#5F666D" },
    60: { value: "#51575C" },
    70: { value: "#3B4044" },
    80: { value: "#31363A" },
    90: { value: "#212529" },
    white: { value: "#FFFFFF" },
    black: { value: "#000000" },
  },

  system: {
    red_lighten: { value: "#FEE6EA" },
    red: { value: "#FB3958" },
    red_darken: { value: "#8F2032" },
    yellow_lighten: { value: "#FFF8E5" },
    yellow: { value: "#FFC834" },
    yellow_darken: { value: "#91721D" },
    green_lighten: { value: "#EEF9F2" },
    green: { value: "#6DC993" },
    green_darken: { value: "#3E7254" },
    blue_lighten: { value: "#E2EDFF" },
    blue: { value: "#458EFF" },
    blue_darken: { value: "#275191" },
    orange_lighten: { value: "#F5DFCC" },
    orange: { value: "#FD9134" },
    orange_darken: { value: "#8F2032" },
    brown_lighten: { value: "#EEE0DA" },
    brown: { value: "#A07D6E" },
    brown_darken: { value: "#442A1E" },
  },
} as const;

const colors = defineTokens.colors(_colors);

export default colors;
