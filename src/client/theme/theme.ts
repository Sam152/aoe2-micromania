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
            variants: {
                solid: {
                    backgroundColor: 'blue.200',
                    color: 'gray.800',
                    _hover: { background: 'blue.500' },
                    _active: { background: 'blue.700', textDecoration: 'underline' },
                },
                outline: {
                    borderColor: 'blue.200',
                    color: 'gray.100',
                    _hover: { background: 'gray.800' },
                },
            }
        },
        Container: {
            baseStyle: {
                maxW: 'container.xl',
                py: 8,
            },
        },
        Link: {
            variants: {
                'menu-link': {
                    px: 6,
                    py: 4,
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 'sm',

                }
            }
        },
        Table: {
            defaultProps: {
                variant: 'simple',
                size: 'sm',
            },
            variants: {
                simple: {
                    td: {
                        borderColor: 'gray.600',
                        borderTopWidth: '1px',
                        borderBottomWidth: 0,
                    },
                    th: {
                        borderColor: 'gray.600',
                        borderBottomWidth: '2px',
                    }
                }
            },
        },
    },
});

export default theme;
