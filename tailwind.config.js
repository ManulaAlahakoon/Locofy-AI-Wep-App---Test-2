/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fafafa",
          "200": "#7a7a7a",
          "300": "rgba(0, 0, 0, 0.85)",
        },
        "light-grey-border": "#e8ecf2",
        black: "#000",
        "light-bg": "#f4f4f4",
        dark: "#171e1d",
        white: "#fff",
        "light-text": "#787878",
        accent: "#00c29f",
        saddlebrown: "#975b00",
        lightcyan: "#defff9",
        powderblue: "#c4e6e0",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#ececec",
        },
      },
      spacing: {},
      fontFamily: {
        archivo: "Archivo",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        smi: "13px",
        "6xs": "7px",
        mid: "17px",
        "9xs-5": "3.5px",
        "12xs-5": "0.5px",
        "4xs": "9px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      "3xs": "10px",
      lg: "18px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "4xl": "23px",
      "21xl-4": "40.4px",
      "13xl": "32px",
      "7xl": "26px",
      "2xl": "21px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
