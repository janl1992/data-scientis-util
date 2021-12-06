import * as React from 'react';
import {Flex, Link, VStack} from "@chakra-ui/react";
import {HashRouter as Router, NavLink, Route, Routes} from "react-router-dom";
import Introduction from "../pages/Introduction";
import {SearchBox} from "./SearchBox";

export type NavTarget = {
    title: string;
    to: string;
    key: string;
    component: React.ComponentType<any>;
    text?: string
    code?: string
}

export const AllNavigationTargets: Array<NavTarget> = [
    {
        title: "Test",
        to: "/",
        key: "/",
        component: Introduction,
        text: `test`,
        code: `var s = 1`
    },
    {
        title: "Introduction",
        to: "/introduction/",
        key: "/introduction/",
        component: Introduction,
        text: `Lorem ipsum is placeholder text commonly used in the graphic, print, and  
            publishing industries for previewing layouts and visual mockups.`,
        code: `var s = 1`
    },
]


type NavigationProps = {
    isOpen: boolean,
    onClose: () => void,
}

export const Navigation = ({isOpen, onClose}:NavigationProps) => {

    const [activeLink, setActiveLink] = React.useState<number>(-1)

    return (
        <Flex justify={"start"} ml={3} mt={5}>
            <Router>
                <NavigationBar>
                    {AllNavigationTargets.map((target, index) =>
                        <Link as={NavLink} tabIndex={index} bg={activeLink === index ? "red.200":""} pr={1} to={target.to} key={target.key}
                              fontWeight="semibold" onClick={e => setActiveLink(index)}>{target.title}</Link>
                    )}
                </NavigationBar>
                <Routes>
                    {AllNavigationTargets.map((target) =>
                        <Route path={target.to} element={<target.component code={target.code} text={target.text}/>} key={target.key}/>
                    )}
                    <Route path="/" element={<Introduction code={""} text={"test"} />} />
                </Routes>
                <SearchBox isOpen={isOpen} onClose={onClose}/>

            </Router>
        </Flex>
    );
};

interface NavigationBarProps {
    children?: React.ReactNode;
}

const NavigationBar = ({children}: NavigationBarProps) => {
    return (
        <VStack
            as="nav"
            alignItems={"left"}
        >
            {children}
        </VStack>
    )
}