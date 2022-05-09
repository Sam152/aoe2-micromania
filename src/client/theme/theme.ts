import {extendTheme} from '@chakra-ui/react';
import '@fontsource/cinzel/500.css';

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
    },
    fonts: {
        victory: 'Cinzel, serif',
    },
    textStyles: {
        victory: {
            fontWeight: '500',
            textTransform: 'uppercase',
            fontFamily: 'Cinzel, serif',
            fontSize: '5xl',
            background: 'linear-gradient(#f2e965, #efba45)',
            backgroundClip: 'text',
        },
    },
    colors: {
        brand: {
            100: '#ff33cc',
            900: '#ff33cc',
        },
        playerColors: {
            0: '#2044ab',
            1: '#e60b00'
        }
    },
    spacing: {
        space: {},
    },
    components: {
        Skeleton: {
            defaultProps: {
                startColor: 'gray.800',
                endColor: 'gray.900',
            },
        },
        Button: {
            baseStyle: {},
            defaultProps: {
                size: 'sm',
            },
            variants: {
                solid: {
                    backgroundColor: 'blue.200',
                    color: 'gray.800',
                    _hover: {background: 'blue.500'},
                    _active: {background: 'blue.700', textDecoration: 'underline'},
                },
                outline: {
                    borderColor: 'blue.200',
                    color: 'gray.100',
                    _hover: {background: 'gray.800'},
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
