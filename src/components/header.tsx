import React from 'react';
import {Box, Button, Flex} from "@chakra-ui/react";
import Logo from "./design/icons/logo";

function Header() {

    const fontStyle = {
        display: "inline-block",
        paddingRight: "6px",
        fontSize: "15px",
        letterSpacing: "normal",
        marginLeft: "4px",
        fontWeight: "400",
        textTransform: "none",
        position: "relative"
    }

    const numberPageStyle = {
        borderRadius: "50%",
        backgroundColor: '#2E9975',
        justifyContent: "center",
        color: "white",
        display: "flex",
        width: '23px',
        alignItems:'center'
    }


    return (
        <Box sx={{
            backgroundColor: "#fff",
            borderBottom: "2px solid #f5f8fc",
            height: "64px",
            padding: "0 24px",
            transition: "all .55s cubic-bezier(.19,1,.22,1),background-color .1s",
            width: "100%"
        }}>
            <Flex sx={{width: "100%"}} justifyContent='space-between'>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', h: '64px'}}>
                    <Logo size={36}/>
                </Box>

                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', h: '64px', w: '360px'}}>
                    <Flex sx={{w: '100%'}} justifyContent='space-between'>
                        <Flex>
                            <Box sx={numberPageStyle}>1</Box> <Box sx={fontStyle}>Design</Box>
                        </Flex>

                        <Flex>
                            <Box style={{backgroundColor: '#F5F8FC', color: '#BDC8D9'}} sx={numberPageStyle}>2</Box>
                            <Box sx={fontStyle}>Buy or sell</Box>
                        </Flex>

                        <Flex>
                            <Box style={{backgroundColor: '#F5F8FC', color: '#BDC8D9'}} sx={numberPageStyle}>3</Box>
                            <Box sx={fontStyle}>Finish</Box>
                        </Flex>
                    </Flex>
                </Box>

                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', h: '64px', w: '140px'}}>
                    <Flex sx={{w: '100%', alignItems: 'center'}} justifyContent='space-between'>
                        <Button sx={{
                            color: 'white',
                            backgroundColor: '#2E9975',
                            fontWeight: 'bold',
                            h: '48px',
                            w: '82px'
                        }}
                                disabled>Next</Button>
                        <img height="24" width="24" style={{borderRadius: "50%"}}
                             src="https://www.bonfire.com/images/icons/blank-avatar-global.png"/>
                        <img className="sw-DropdownArrow" src="https://www.bonfire.com/images/partials/icons/arrow.svg"
                             alt="arrow"/>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}

export default Header;
