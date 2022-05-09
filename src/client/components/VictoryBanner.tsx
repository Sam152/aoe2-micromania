import {Box, HStack, Stack, Text} from "@chakra-ui/react";
import React from "react";
import {BsShieldFill} from "react-icons/all";
import {Icon} from "@chakra-ui/icons";

export default function VictoryBanner() {
    return (
        <Stack
            borderColor={'#e0bf4f'}
            borderBottomWidth={'3px'}
            borderTopWidth={'3px'}
            position='absolute'
            left={0}
            right={0}
            background={'rgba(0,0,0,0.7)'}
        >
            <Text align='center' textStyle='victory'>
                You are victorious!
            </Text>

            <HStack justifyContent={'center'}>
                <Box width={'200px'} borderTopWidth={'3px'} borderColor={'#e0bf4f'} />
                <Icon w={6} h={6} color='#e0bf4f' as={BsShieldFill}/>
                <Box width={'200px'} borderTopWidth={'3px'} borderColor={'#e0bf4f'} />
            </HStack>
        </Stack>
    );
}
