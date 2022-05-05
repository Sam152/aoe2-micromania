import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
    },
    colors: {
        brand: {
            100: '#ff33cc',
            900: '#ff33cc',
        },
    },
    components: {
        Button: {
            baseStyle: {},
            defaultProps: {
                size: 'sm',
            },
        },
        Link: {
            variants: {
                'menu-link': {
                    px: 6,
                    py: 6,
                    textTransform: 'uppercase',
                    fontWeight: 'bold',

                }
            }
        }
    },
});

export default theme;
