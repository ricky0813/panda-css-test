import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  title: {
    display: {
      value: {
        fontWeight: "title",
        fontSize: "80px",
        lineHeight: "1.2",
      },
    },
    h1: {
      value: {
        fontWeight: "title",
        fontSize: "40px",
        lineHeight: "1.25",
      },
    },
    h2: {
      value: {
        fontWeight: "title",
        fontSize: "32px",
        lineHeight: "1.25",
      },
    },
    h3: {
      value: {
        fontWeight: "title",
        fontSize: "24px",
        lineHeight: "1.25",
      },
    },
    h4: {
      value: {
        fontWeight: "title",
        fontSize: "18px",
        lineHeight: "1.5",
      },
    },
  },
  body: {
    pBold: {
      value: {
        fontWeight: "body.bold",
        fontSize: "14px",
        lineHeight: "1.75",
      },
    },
    p: {
      value: {
        fontWeight: "body.light",
        fontSize: "14px",
        lineHeight: "1.75",
      },
    },
    spanBold: {
      value: {
        fontWeight: "body.bold",
        fontSize: "12px",
        lineHeight: "1.75",
      },
    },
    span: {
      value: {
        fontWeight: "body.light",
        fontSize: "12px",
        lineHeight: "1.75",
      },
    },
  },
});
