export const FLEX = {
  flexDirection: {
    class: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    },
    cssStyle: "flex-direction",
  },

  flexWrap: {
    class: {
      "no-wrap": "flex-nowrap",
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
    cssStyle: "flex-wrap",
  },

  justifyContent: {
    class: {
      "flex-start": "justify-start",
      "flex-end": "justify-end",
      center: "justify-center",
      "space-between": "justify-between",
      "space-around": "justify-around",
      "space-evenly": "justify-evenly",
    },
    cssStyle: "justify-content",
  },

  alignItems: {
    class: {
      "flex-start": "items-start",
      "flex-end": "items-end",
      center: "items-center",
      stratch: "items-stratch",
      baseline: "items-baseline",
    },
    cssStyle: "align-items",
  },

  alignContent: {
    class: {
      "flex-start": "content-start",
      "flex-end": "content-end",
      center: "content-center",
      stretch: "content-stretch",
      "space-between": "content-between",
      "space-around": "content-around",
    },
    cssStyle: "align-content",
  },
};
