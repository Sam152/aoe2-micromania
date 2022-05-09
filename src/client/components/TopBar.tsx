import {
    Box,
    Button,
    Flex,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import EditableNickname from './EditableNickname';

export default function TopBar() {
    const bg = useColorModeValue('gray.100', 'gray.900');

    return (
        <Flex px={6} bg={bg} alignItems={'center'} id="nav-bar" sx={{userSelect: 'none'}} justify={'space-between'}>
            <HStack>
                <Box mr={6}>
                    MicroMania
                </Box>
                <Flex>
                    <Link variant="menu-link" as={RouterLink} to='/'>Lobby Browser</Link>
                    <Link variant="menu-link" padding="md" as={RouterLink} to='/single-player'>Single Player</Link>
                    <Link variant="menu-link" as={RouterLink} to='/'>Replays</Link>
                    <Link variant="menu-link" as={RouterLink} to='/'>Settings</Link>
                </Flex>
            </HStack>

            <EditableNickname />
        </Flex>
    );
}
