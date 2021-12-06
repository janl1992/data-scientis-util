import * as React from 'react';
import {Box, Container, Heading, Link} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {InfoOutlineIcon} from "@chakra-ui/icons";
import {NavTarget} from "./Navigation";

type SearchEntryProps = {
    navTarget: NavTarget
    onClose: () => void
    setNavTargets: (target?: NavTarget[]) => void
}
export const SearchEntry = ({navTarget, onClose, setNavTargets}: SearchEntryProps) => {

    function handleClick() {
        setNavTargets(undefined)
        onClose()
    }

    return (
        <Container>
            <Box p={5} shadow="md">
                <Heading fontSize="xl">{navTarget.title}</Heading>
                <Link as={NavLink} onClick={e => handleClick()} to={navTarget.to} key={navTarget.key}
                      fontWeight="semibold"><InfoOutlineIcon pb={1} pr={1} mx="1px"/>{navTarget.text}</Link>
            </Box>
        </Container>
    )
};