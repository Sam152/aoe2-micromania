import {Box, Button, Flex, HStack, Link, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {Link as RouterLink} from "react-router-dom";

export default function TopBar() {
    const bg = useColorModeValue( 'gray.100', 'gray.900');

    return (
        <Flex bg={bg} alignItems={"center"} id="nav-bar">
            <Box mx={6}>
                MicroMania
            </Box>
            <Flex>
                <Link variant="menu-link" as={RouterLink} to='/'>Lobby Browser</Link>
                <Link variant="menu-link" padding="md" as={RouterLink} to='/single-player'>Single Player</Link>
            </Flex>
        </Flex>
    );
}
