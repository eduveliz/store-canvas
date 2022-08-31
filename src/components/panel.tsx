import React, {useState} from 'react';
import {Box} from "@chakra-ui/react";
import PickProductIcon from "./design/icons/product";
import TextLetter from "./design/icons/text";
import Graphics from "./design/icons/graphics";
import Upload from "./design/icons/upload";
import PickProduct from "./panelItems/pick-product";
import TextProduct from "./panelItems/text";
import GraphicsProduct from "./panelItems/graphics";
import UploadProduct from "./panelItems/upload";

function Panel() {
    const [activePanel, setActivePanel] = useState(0)

    const buttonStyles = {
        backgroundColor: "#fff",
        flex: "1 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        transition: "box-shadow .3s ease-in-out,-webkit-box-shadow .3s ease-in-out",
        borderRadius: "5px",
        marginTop: "0.5rem",
        cursor: 'pointer'
    }

    return (
        <Box sx={{width: '40%', h: '100vh', paddingTop: '30px', paddingX: '25px', borderLeft: "2px solid #f5f8fc",}}>
            <Box>
                <Box sx={{
                    fontSize: "24px",
                    lineHeight: "1.58",
                    fontWeight: '800'
                }}>
                    Create your design
                </Box>

                <Box sx={{
                    display: 'grid',
                    padding: '0.5rem',
                    gridTemplateColumns: 'repeat(4,1fr)',
                    h: '120px',
                    marginBottom: '16px',
                    w: '100%',
                    gap: '5px'
                }}>
                    <Box
                        onClick={() => {
                            setActivePanel(0)
                        }}
                        style={{boxShadow: activePanel === 0 ? "5px 5px 25px #eaeff7" : "none"}} sx={buttonStyles}>
                        <Box>
                            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                <PickProductIcon size={24}/>
                            </Box>
                            <Box sx={{marginTop: '5px'}}>Pick products</Box>
                        </Box>
                    </Box>

                    <Box
                        onClick={() => {
                            setActivePanel(1)
                        }}
                        style={{boxShadow: activePanel === 1 ? "5px 5px 25px #eaeff7" : "none"}}
                        sx={buttonStyles}>
                        <Box>
                            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                <TextLetter size={24}/>
                            </Box>
                            <Box sx={{marginTop: '5px'}}>Add text</Box>
                        </Box>
                    </Box>

                    <Box onClick={() => {
                        setActivePanel(2)
                    }}
                         style={{boxShadow: activePanel === 2 ? "5px 5px 25px #eaeff7" : "none"}}
                         sx={buttonStyles}>
                        <Box>
                            <Box sx={{display: 'flex', justifyContent: 'center'}}><Graphics size={24}/></Box>
                            <Box sx={{marginTop: '5px'}}>Find graphics</Box>
                        </Box>
                    </Box>

                    <Box onClick={() => {
                        setActivePanel(3)
                    }}
                         style={{boxShadow: activePanel === 3 ? "5px 5px 25px #eaeff7" : "none"}}
                         sx={buttonStyles}>
                        <Box>
                            <Box sx={{display: 'flex', justifyContent: 'center'}}><Upload size={24}/></Box>
                            <Box sx={{marginTop: '5px'}}>Upload Art</Box>
                        </Box>
                    </Box>

                </Box>
            </Box>

            <Box>
                {
                    activePanel === 0 && <PickProduct/>
                }
                {
                    activePanel === 1 && <TextProduct/>
                }
                {
                    activePanel === 2 && <GraphicsProduct/>
                }
                {
                    activePanel === 3 && <UploadProduct/>
                }
            </Box>


        </Box>
    );
}

export default Panel;
