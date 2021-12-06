import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Navigation} from "./feature/Navigation";
import {Box, useDisclosure} from "@chakra-ui/react";

function App() {

    const {isOpen, onOpen, onClose} = useDisclosure();

    React.useEffect(() => {
        window.addEventListener('keydown', function (ev) {
            if (ev.key === 'k' && ev.metaKey) {
                onOpen()
            }
        })
    })

    return (
        <Box as={"div"}>
            <Header onOpen={onOpen}/>
            <Navigation isOpen={isOpen} onClose={onClose}/>
        </Box>
    );
}

export default App;
