import React from 'react';
import './App.css';
import {Box, Flex} from "@chakra-ui/react";
import Header from "./components/header";
import Editor from "./components/design/editor/editor";
import Panel from "./components/panel";

function App() {
    return (
        <Box>
            <Header/>
            <Flex>
                <Editor/>
                <Panel/>
            </Flex>

        </Box>
    );
}

export default App;
