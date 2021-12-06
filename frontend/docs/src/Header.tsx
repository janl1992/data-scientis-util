import * as React from 'react';
import {
    Flex,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    VStack,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import {ReactComponent as AnalyticsIcon} from './icons/analytics-icon.svg';
import {SearchIcon} from "@chakra-ui/icons";
import { Kbd } from '@chakra-ui/react'

type HeaderProps = {
    onOpen: () => void
}

export const Header = ({onOpen}: HeaderProps) => {

    return (
        <Flex
            as="nav"
            align="center"
            justify="center"
            wrap="nowrap"
            padding={6}
            bg="teal.600"
        >
            <Wrap>
                <WrapItem>
                    <Icon as={AnalyticsIcon} boxSize={10} cursor={"pointer"} />
                </WrapItem>
                <WrapItem>
                    <VStack>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<SearchIcon color="gray.300"/>}
                                pl={3}
                            />

                            <Input type={"text"} onClick={onOpen} placeholder={"Search the docs"} isReadOnly={true}
                                   cursor={"pointer"}/>
                            <InputRightElement children={<span><Kbd  mr={1}>⌘</Kbd><Kbd mr={3}>K</Kbd></span>} />
                        </InputGroup>
                    </VStack>
                </WrapItem>
            </Wrap>
        </Flex>
    );
};