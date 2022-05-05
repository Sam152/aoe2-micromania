import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
    },
    colors: {
        brand: {
            100: "#ff33cc",
            900: "#ff33cc",
        },
    },
    components: {
        Button: {
            baseStyle: {
                color: 'brand.100',
            },
            defaultProps: {
                size: 'sm'
            }
        }
    }
});

export default theme;
