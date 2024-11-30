import {Box, Flex, HStack, Image, Link, useColorModeValue,} from '@chakra-ui/react';
import React from 'react';
import {NavLink as RouterLink} from 'react-router-dom';
import assetUrl from "../util/assetUrl";

export default function TopBar() {
    const bg = useColorModeValue('gray.100', 'gray.900');

    const linkProps = {
        _activeLink: {backgroundColor: 'blue.900'},
        variant: 'menu-link',
        as: RouterLink,
    };

    return (
        <Flex px={6} bg={bg} alignItems={'center'} id="nav-bar" sx={{userSelect: 'none'}} justify={'space-between'}>
            <HStack>
                <Box mr={6}>
                    <Link _focus={{boxShadow: 'none'}} as={RouterLink} to='/'><Image src={assetUrl('graphics/logo.svg')}
                                                                                     height="39px"/></Link>
                </Box>
                <Flex>
                    <Link {...linkProps} to='/'>Play</Link>
                    <Link {...linkProps} to='/hotkeys'>Hotkeys</Link>
                </Flex>
            </HStack>

            {/*<EditableNickname/>*/}
        </Flex>
    );
}
