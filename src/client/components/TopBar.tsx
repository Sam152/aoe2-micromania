import {
    Box,
    Button,
    Flex,
    HStack, Image,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import {NavLink as RouterLink} from 'react-router-dom';
import EditableNickname from './EditableNickname';

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
                    <Image src="/graphics/logo.svg" height="39px" />
                </Box>
                <Flex>
                    <Link {...linkProps} to='/'>Lobby Browser</Link>
                    <Link {...linkProps} to='/replays'>Replays</Link>
                    <Link {...linkProps} to='/single-player'>Single Player</Link>
                    <Link {...linkProps} to='/hotkeys'>Hotkeys</Link>
                </Flex>
            </HStack>

            <EditableNickname />
        </Flex>
    );
}
