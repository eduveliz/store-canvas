import React, {useState} from 'react';
import {Box, Button, Flex} from "@chakra-ui/react";
import Close from "../design/icons/close";
import Colors from "../design/icons/colors";
import polo1 from "../../assets/images/polo1.jpg"
import polo2 from "../../assets/images/polo2.jpg"
import polo3 from "../../assets/images/polo3.jpg"
import polo4 from "../../assets/images/polo4.jpg"


function PickProduct() {

    const [activeProduct, setActiveProduct] = useState(0)

    const boxStyles = {
        backgroundColor: "#fff",
        boxShadow: "0 0 0 2px #f5f8fc",
        borderRadius: "5px",
        display: "flex",
        marginBottom: "24px",
        padding: "24px 12px 16px 16px",
        position: "relative",
        transition: "box - shadow .2s linear",
        w: '100%',
        h: '113px',
        cursor:'pointer'
    }
    return (
        <Box sx={{h: '400px'}}>
            <p style={{
                lineHeight: "1.62",
                marginBottom: "24px",
                color: "inherit"
            }}>
                Select up to 9 styles to add to your design.
            </p>

            <Box style={{boxShadow: activeProduct === 0 ? "8px 12px 36px 0 rgb(61 72 83 / 21%)" : '0 0 0 2px #f5f8fc'}}
                 onClick={() => {
                     setActiveProduct(0)
                 }}
                 sx={boxStyles}>
                <Flex style={{width: '100%'}}>
                    <Box sx={{w: '20%'}}>
                        <img
                            height='74px'
                            width='74px'
                            alt="product type"
                            src={polo1}/>
                    </Box>
                    <Box sx={{w: '60%'}}>
                        <Box>Premium Unisex Tee</Box>
                        <Flex sx={{marginTop: '5px'}}>
                            <Box>
                                <Box sx={{backgroundColor: '#E8E9EA', w: '30px', h: '30px', borderRadius: '50%'}}>
                                </Box>
                            </Box>

                            <Box sx={{marginLeft: '5px'}}>
                                <Box sx={{backgroundColor: '#9DBAC2', w: '30px', h: '30px', borderRadius: '50%'}}>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>

                    <Box sx={{w: '20%'}}>
                        <Box sx={{display: 'grid', justifyContent: 'end'}}>
                            <Flex justifyContent='center'><Close size={24}/></Flex>
                            <Box sx={{marginTop: '20px'}}><Colors size={14}/></Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Box sx={boxStyles}
                 style={{boxShadow: activeProduct === 1 ? "8px 12px 36px 0 rgb(61 72 83 / 21%)" : '0 0 0 2px #f5f8fc'}}
                 onClick={() => {
                     setActiveProduct(1)
                 }}>
                <Flex style={{width: '100%'}}>
                    <Box sx={{w: '20%'}}>
                        <img
                            height='74px'
                            width='74px'
                            alt="product type"
                            src={polo2}/>
                    </Box>
                    <Box sx={{w: '60%'}}>
                        <Box>Classic Unisex Tee</Box>
                        <Flex sx={{marginTop: '5px'}}>
                            <Box>
                                <Box sx={{
                                    backgroundColor: '#787878',
                                    w: '30px',
                                    h: '30px',
                                    borderRadius: '0 0 0 2px #f5f8fc%'
                                }}>
                                </Box>
                            </Box>

                            <Box sx={{marginLeft: '5px'}}>
                                <Box sx={{backgroundColor: '#4D515C', w: '30px', h: '30px', borderRadius: '50%'}}>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>

                    <Box sx={{w: '20%'}}>
                        <Box sx={{display: 'grid', justifyContent: 'end'}}>
                            <Flex justifyContent='center'><Close size={24}/></Flex>
                            <Box sx={{marginTop: '20px'}}><Colors size={14}/></Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Box
                style={{boxShadow: activeProduct === 2 ? "8px 12px 36px 0 rgb(61 72 83 / 21%)" : '0 0 0 2px #f5f8fc'}}
                onClick={() => {
                    setActiveProduct(2)
                }}
                sx={boxStyles}>
                <Flex style={{width: '100%'}}>
                    <Box sx={{w: '20%'}}>
                        <img
                            height='74px'
                            width='74px'
                            alt="product type"
                            src={polo3}/>
                    </Box>
                    <Box sx={{w: '60%'}}>
                        <Box>Pullover Hoodie</Box>
                        <Flex sx={{marginTop: '5px'}}>
                            <Box>
                                <Box sx={{backgroundColor: '#E8E9EA', w: '30px', h: '30px', borderRadius: '50%'}}>
                                </Box>
                            </Box>

                            <Box sx={{marginLeft: '5px'}}>
                                <Box sx={{backgroundColor: '#9DBAC2', w: '30px', h: '30px', borderRadius: '50%'}}>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>

                    <Box sx={{w: '20%'}}>
                        <Box sx={{display: 'grid', justifyContent: 'end'}}>
                            <Flex justifyContent='center'><Close size={24}/></Flex>
                            <Box sx={{marginTop: '20px'}}><Colors size={14}/></Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Box
                style={{boxShadow: activeProduct === 3 ? "8px 12px 36px 0 rgb(61 72 83 / 21%)" : '0 0 0 2px #f5f8fc'}}
                onClick={() => {
                    setActiveProduct(3)
                }}
                sx={boxStyles}>
                <Flex style={{width: '100%'}}>
                    <Box sx={{w: '20%'}}>
                        <img
                            height='74px'
                            width='74px'
                            alt="product type"
                            src={polo4}/>
                    </Box>
                    <Box sx={{w: '60%'}}>
                        <Box>Crewneck Sweatshirt</Box>
                        <Flex sx={{marginTop: '5px'}}>
                            <Box>
                                <Box sx={{backgroundColor: '#BBBBBB', w: '30px', h: '30px', borderRadius: '50%'}}>
                                </Box>
                            </Box>

                            <Box sx={{marginLeft: '5px'}}>
                                <Box sx={{backgroundColor: '#4C4C4C', w: '30px', h: '30px', borderRadius: '50%'}}>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>

                    <Box sx={{w: '20%'}}>
                        <Box sx={{display: 'grid', justifyContent: 'end'}}>
                            <Flex justifyContent='center'><Close size={24}/></Flex>
                            <Box sx={{marginTop: '20px'}}><Colors size={14}/></Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Button sx={{
                color: "#3d4853",
                backgroundColor: "#fff",
                boxShadow: "inset 0 0 0 2px #3d4853",
                textShadow: "0 1px 0 #fff",
                w:'100%',
                h:'48px'
            }}>
                + ADD PRODUCTS
            </Button>

        </Box>
    );
}

export default PickProduct;
