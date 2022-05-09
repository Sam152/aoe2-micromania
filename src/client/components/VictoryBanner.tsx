import {AlertDialogFooter, Box, Button, ButtonGroup, Flex, HStack, Stack, Text} from '@chakra-ui/react';
import React, {MouseEventHandler} from 'react';
import {BsShieldFill} from 'react-icons/all';
import {Icon} from '@chakra-ui/icons';
import {useNavigate} from "react-router-dom";
import useLobbyNavigation from "../hooks/useLobbyNavigation";
import TransportEvent from "../../common/state/transport/TransportEvent";
import useConnection from "../hooks/useConnection";
import generateId from "../../common/util/generateId";

function Banner({text, buttonText, onClick}: { text: string; buttonText: string; onClick: MouseEventHandler }) {
    return (
        <Flex
            position='absolute'
            left={0}
            right={0}
            top={0}
            bottom={0}
            alignItems="center"
            cursor='url("/graphics/interface/0.svg") 0 0, none'
        >
            <Stack
                borderColor={'#e0bf4f'}
                borderBottomWidth={'3px'}
                borderTopWidth={'3px'}
                background={'rgba(0,0,0,0.7)'}
                spacing={6}
                userSelect={'none'}
                py={6}
                w="full"
            >
                <Text align='center' textStyle='victory'>
                    {text}
                </Text>

                <HStack justifyContent="center">
                    <Box width={'200px'} borderTopWidth={'3px'} borderColor={'#e0bf4f'}/>
                    <Icon w={6} h={6} color='#e0bf4f' as={BsShieldFill}/>
                    <Box width={'200px'} borderTopWidth={'3px'} borderColor={'#e0bf4f'}/>
                </HStack>

                <ButtonGroup justifyContent={'center'}>
                    <Button onClick={onClick} cursor='url("/graphics/interface/0.svg") 0 0, none' variant='inGame'>
                        {buttonText}
                    </Button>
                </ButtonGroup>
            </Stack>
        </Flex>
    );
}

export function VictoryBanner() {
    const navigate = useNavigate();
    return <Banner text={"You are victorious!"} buttonText={"Join another"} onClick={() => navigate('/quick-join')}/>;
}

export function DefeatBanner() {
    const navigate = useNavigate();
    return <Banner text={"You have been defeated!"} buttonText={"Join another"} onClick={() => navigate('/quick-join')}/>;
}

export function SinglePlayerVictoryBanner() {
    const navigate = useNavigate();
    const id = generateId(6);
    return <Banner text={"You are victorious!"} buttonText={"Play again"} onClick={() => navigate(`/single-player/${id}`)} />;
}

export function SinglePlayerDefeatBanner() {
    const navigate = useNavigate();
    const id = generateId(6);
    return <Banner text={"You have been defeated!"} buttonText={"Play again"} onClick={() => navigate(`/single-player/${id}`)}/>;
}