import React from 'react';
import {Box, Button, Flex} from "@chakra-ui/react";
import polo1 from '../../../assets/images/polo1-removebg-preview.png'
import ArrowRevert from "../icons/arrowRevert";


function Editor() {

    const buttonStyle = {
        boxShadow: "white",
        color: "#3d4853",
        fontSize: "1rem",
        h: '26px',
        w: '200px',
        padding: "8px 8px 8px 32px",
        position: "relative",
        textTransform: "uppercase"
    }

    return (
        <Box sx={{
            h: '100vh',
            w: 'calc(100% - 536px)',
            display: "flex",
            justifyContent: "center",
            backgroundColor: '#F9FAFB',
            alignItems: 'center'
        }}>
            <img style={{height: "686px"}} src={polo1}/>


            <Box sx={{position: 'absolute', bottom: '10%', boxShadow: "0 0 0 2px #f5f8fc", h: '26px'}}>
                <Button sx={{buttonStyle}}>
                    <Flex justifyContent='space-between' sx={{
                        fontSize: "10px",
                        fontWeight: 800,
                        lineHeight: "1.08",
                        letterSpacing: "2.1px",
                        w: '110px',
                        alignItems: 'center'
                    }}>
                        <ArrowRevert size={18}/>
                        SHOW BACK
                    </Flex>
                </Button>
            </Box>
        </Box>
    );
}

export default Editor;
