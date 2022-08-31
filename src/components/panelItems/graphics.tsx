import React from 'react';
import {Box, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import Close from "../design/icons/close";
import {images} from "../../constants/constants";

function GraphicsProduct() {
    return (
        <Box>
            <InputGroup>
                <Input type='text' placeholder='Search for something'/>
                <InputRightElement
                    pointerEvents='none'
                    children={<Close size={24}/>}
                />
            </InputGroup>

            <Box sx={{
                display: 'grid',
                padding: '0.5rem',
                gridTemplateColumns: 'repeat(3,1fr)',
                h: '120px',
                marginBottom: '16px',
                w: '100%',
                marginLeft: '30px',
                gap: '5px'
            }}>

                {
                    images.map((image) => {
                        return (
                            <Box sx={{h: '96px', w: '96px', display: 'flex', justifyContent: 'center'}}>
                                <img src={image.previewUrl} alt={'12'}/>
                            </Box>)
                    })
                }

            </Box>

        </Box>
    );
}

export default GraphicsProduct;
