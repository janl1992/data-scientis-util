import * as React from 'react';
import {Box, Text, VStack} from "@chakra-ui/react";
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter'
import python from "react-syntax-highlighter/dist/cjs/languages/hljs/python"

type IntroductionProps = {
    text: string
    code: string
};

SyntaxHighlighter.registerLanguage("python", python)

export const Introduction = ({text, code}: IntroductionProps) => {
    return (
        <VStack>
            <Text color="gray.500" ml={10}>
                {text}
            </Text>
            <Box
                as={SyntaxHighlighter}
                language="python"
            >
                {code}
            </Box>
        </VStack>
    );
};

export default Introduction