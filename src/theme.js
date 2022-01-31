const colors = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    skyBlue: "#8CC2FF",
    lightBlue: "#2188FF",
    blue: "#0366D6",
    grayBlue: "#6D93BE",
    lightGray: "#E5E5E5",
    gray: "#6E7E91",
    semiDarkGray: "rgba(54, 54, 54, 0.72)",
    black: "#252525",
    mineShaft: "#363636",
    lightIron: "rgba(209, 213, 218, 0.1)",
    iron: "rgba(209, 213, 218, 0.3)",
    lightGrayShadow: "rgba(9, 10, 51, 0.02)",
    grayShadow: "rgba(9, 10, 51, 0.03)",        
    blueShadow: "rgba(3, 102, 214, 0.2)",
    darkBlueShadow: "rgba(3, 102, 214, 0.5)",
};

const common = {
    breakpoints: {
        maxMobileWidth: 767,
    },
    boxShadow: `0px 16px 58px 0px ${colors.grayShadow},
      0px -2px 50px 0px ${colors.lightGrayShadow}`,
};

export const lightTheme = {
    ...common,
    colors: {
        primary: colors.blue,
        textPrimary: colors.black,
        headerLine: colors.lightGray,
        boxBackground: colors.white,
        site: {
            background: colors.whiteLilac,
            text: colors.gray,
        },
        mode: {
            background: colors.lightGray,
            border: colors.gray,
            icon: colors.white,
            iconBackground: colors.gray,
        },
        button: {
            text: colors.white,
            border: colors.iron,
            hoverShadow: `2px -2px 0px ${colors.skyBlue},
             -2px 2px 0px ${colors.skyBlue},
              2px 2px 0px ${colors.skyBlue},
               -2px -2px 0px ${colors.skyBlue}`,
        },
    },
};

export const darkTheme = {
    ...common,
    colors: {
        primary: colors.lightBlue,
        textPrimary: colors.white,
        headerLine: colors.whiteLilac,
        boxBackground: colors.semiDarkGray,
        site: {
            background: colors.black,
            text: colors.white,
        },
        mode: {
            background: colors.iron,
            border: colors.lightGray,
            icon: colors.black,
            iconBackground: colors.white,
        },
        button: {
            text: colors.white,
            border: colors.iron,
            hoverShadow: `2px -2px 0px ${colors.grayBlue},
             -2px 2px 0px ${colors.grayBlue},
              2px 2px 0px ${colors.grayBlue},
               -2px -2px 0px ${colors.grayBlue}`,
        },
    },
};