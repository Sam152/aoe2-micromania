import React from "react";
import {Box, useColorModeValue} from "@chakra-ui/react";

// Work around Boxes being un-styleable in the theme: https://github.com/chakra-ui/chakra-ui/issues/2456.
export default function Section({children}: {children: JSX.Element}) {
    const bg = useColorModeValue('gray.100', 'gray.700');
    return (
        <Box bg={bg} borderColor={'blue.500'} borderWidth='2px' borderRadius='lg' overflow='hidden'>
            {children}
        </Box>
    );
}
