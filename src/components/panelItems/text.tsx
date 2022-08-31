import React from 'react';
import {Box, Button, Textarea} from "@chakra-ui/react";


function TextProduct() {
    return (
        <Box sx={{}}>
            <Textarea placeholder='Your Text'/>

            <Box sx={{w: '100%', marginY: "15px", display:"flex", justifyContent:'end'}}>
                <Button
                    sx={{
                        h: '48px',
                        w: '125px',
                        color: 'white',
                        backgroundColor: '#2E9975',
                        fontWeight: '800',
                    }}>
                    ADD TEXT</Button>
            </Box>
        </Box>
    );
}

export default TextProduct;
