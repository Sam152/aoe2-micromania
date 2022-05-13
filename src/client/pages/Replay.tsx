import {
    Button,
    Container,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import Section from '../components/Section';
import {useEffect, useState} from "react";
import {ReplayIndexItem, ReplayItem} from "../../types";
import {Link, useParams} from "react-router-dom";
import humanizeDuration from "humanize-duration";
import useFetched from "../hooks/useFetched";

export default function Replay() {

    const {replayId} = useParams();
    const replay = useFetched<ReplayItem>(`/recs/${replayId}.json`, null);

    console.log(replay);

    return (
        <></>
    )
}
