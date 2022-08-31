import React from 'react';
import {Box, Button, Checkbox, Flex} from "@chakra-ui/react";
import Arrows from "../design/icons/arrows";
import VectorIcons from "../design/icons/vectors";
import aIIcon from "../design/icons/ai";
import AIIcon from "../design/icons/ai";

function UploadProduct() {

    const uploadBoxStyle = {
        minHeight: "131px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dashed #eaeff7",
        borderRadius: "8px",
        padding: "24px",
        textAlign: "center",
        transition: ".3s",
        position: "relative",
        overFlow: " hidden"
    }

    return (
        <Box>
            <Box sx={{paddingY: '5px'}}>
                <Box sx={{paddingBottom: '15px', fontWeight: 800, fontSize: '20px', lineHeight: "1.6"}}>File
                    guidelines</Box>
                <Flex sx={{paddingBottom: '15px'}}>
                    <Arrows size={24}/>
                    <Box marginLeft={'12px'}>1500px by 1500px transparent artwork is preferred</Box>
                </Flex>
                <Flex sx={{paddingBottom: '15px'}}>
                    <VectorIcons size={24}/>
                    <Box marginLeft={'12px'}>Original vector artwork work best, if you have it</Box>
                </Flex>
                <Flex sx={{paddingBottom: '15px'}}>
                    < AIIcon size={24}/>
                    <Box marginLeft={'12px'}>We support AI, EPS, PDF, PNG and JPG files</Box>
                </Flex>
            </Box>

            <Box sx={{paddingY: '15px', color: "#3f70a2"}}>Learn More</Box>

            <Box sx={uploadBoxStyle}>
                <Button
                    _hover={{backgroundColor: 'black', color: 'white'}}
                    sx={{
                        h: '48px',
                        w: '166px',
                        fontWeight: 700,
                        backgroundColor: 'transparent',
                        boxShadow: "inset 0 0 0 2px #3d4853"
                    }}>
                    Choose a file
                </Button>
            </Box>

            <Flex sx={{marginTop: '20px'}}>

                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Checkbox size='lg' colorScheme='green'>

                    </Checkbox>
                </Box>
                <Box sx={{fontSize: '18px', marginLeft: '10px'}}>
                    By uploading the image, I agree that I have the legal right to reproduce and sell the design, and
                    that I am in full compliance with Bonfire’s Terms of Use.
                </Box>
            </Flex>


        </Box>
    );
}

export default UploadProduct;
