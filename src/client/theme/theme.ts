import { extendTheme } from "@chakra-ui/react";
import "@fontsource/cinzel/500.css";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    victory: "Cinzel, serif",
  },
  textStyles: {
    victory: {
      fontWeight: "500",
      textTransform: "uppercase",
      fontFamily: "Cinzel, serif",
      fontSize: "5xl",
      background: "linear-gradient(#f2e965, #efba45)",
      backgroundClip: "text",
    },
  },
  colors: {
    playerColors: {
      0: "#2044ab",
      1: "#e60b00",
    },
    ig: {
      gold: "#e0bf4f",
      red: "#6a1411",
      darkRed: "#571411",
    },
  },
  spacing: {
    space: {},
  },
  components: {
    Skeleton: {
      defaultProps: {
        startColor: "gray.800",
        endColor: "gray.900",
      },
    },
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
      defaultProps: {
        size: "sm",
      },
      variants: {
        solid: {
          backgroundColor: "blue.200",
          color: "gray.800",
          _hover: { background: "blue.500" },
          _active: { background: "blue.700", textDecoration: "underline" },
        },
        outline: {
          borderColor: "blue.200",
          color: "gray.100",
          _hover: { background: "gray.800" },
        },
        inGame: {
          borderColor: "ig.gold",
          borderWidth: "2px",
          textTransform: "uppercase",
          color: "ig.gold",
          background: "ig.red",
          borderRadius: 0,
          textShadow: "1px 1px 1px #000",
          fontFamily: "Cinzel, serif",
          _hover: { background: "ig.darkRed" },
          _focus: { boxShadow: "none" },
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: "container.lg",
        py: 8,
      },
    },
    Link: {
      variants: {
        "menu-link": {
          px: 6,
          py: 4,
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: "sm",
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    Table: {
      defaultProps: {
        variant: "simple",
        size: "sm",
      },
      variants: {
        simple: {
          td: {
            borderColor: "gray.600",
            borderTopWidth: "1px",
            borderBottomWidth: 0,
          },
          th: {
            borderColor: "gray.600",
            borderBottomWidth: "2px",
          },
        },
      },
    },
  },
});

export default theme;
