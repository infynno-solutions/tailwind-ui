/* eslint-disable import/no-webpack-loader-syntax */

export const applicationUiData = {
  pricing: {
    data: [
      {
        view: "preview",
        width: "100%",
        path: "pricing/sample1",
        name: "Pricing Sample 1",
        code: require("!!raw-loader!../pricing/sample1/Pricing.jsx").default.toString(),
      },
      {
        view: "preview",
        width: "100%",
        path: "pricing/sample2",
        name: "Pricing Sample 2",
        code: require("!!raw-loader!../pricing/sample2/Pricing.jsx").default.toString(),
      },
      {
        view: "preview",
        width: "100%",
        path: "pricing/sample3",
        name: "Pricing Sample 3",
        code: require("!!raw-loader!../pricing/sample3/Pricing.jsx").default.toString(),
      },
      {
        view: "preview",
        width: "100%",
        path: "pricing/sample4",
        name: "Pricing Sample 4",
        code: require("!!raw-loader!../pricing/sample4/Pricing.jsx").default.toString(),
      },
    ],
  },

  creditCard: {
    data: [
      {
        view: "preview",
        width: "100%",
        path: "credit-card/sample1",
        name: "Credit card Sample 1",
        code: require("!!raw-loader!../credit-card/sample1/CreditCard.jsx").default.toString(),
      },
      {
        view: "preview",
        width: "100%",
        path: "credit-card/sample2",
        name: "Credit card Sample 2",
        code: require("!!raw-loader!../credit-card/sample2/CreditCard.jsx").default.toString(),
      },
      {
        view: "preview",
        width: "100%",
        path: "credit-card/sample3",
        name: "Credit card Sample 3",
        code: require("!!raw-loader!../credit-card/sample3/CreditCard.jsx").default.toString(),
      },
    ],
  },
  carousel: {
    data: [
      {
        view: "preview",
        width: "100%",
        path: "carousel/sample1",
        name: "Carousel Sample 1",
        code: require("!!raw-loader!../carousel/sample1/Carousel.jsx").default.toString(),
      },
      {
        view: "preview",
        width: "100%",
        path: "carousel/sample2",
        name: "Carousel Sample 2",
        code: require("!!raw-loader!../carousel/sample2/Carousel.jsx").default.toString(),
      },
    ],
  },
};
