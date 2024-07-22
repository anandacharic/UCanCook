import React from "react";
import {Image} from "@chakra-ui/react";
import "../styles/Cuisine.css"
import { Card, CardBody, CardFooter, Heading, Text, Stack, Divider, ButtonGroup, HStack, Tag, TagLabel } from "@chakra-ui/react";
import { DeleteIcon, Icon } from '@chakra-ui/icons'

function Cuisine({ cuisine, onDelete }) {

    let isAdmin = true;
    let counter = -1;
    let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'orange'];

    let tags = cuisine.type.split(" ").map(c => {
        counter = (counter + 1) % colors.length;
        return (
            <Tag key={counter} size='md' maxW='20' colorScheme={colors[counter]} borderRadius='full'>
                <TagLabel>{c}</TagLabel>
            </Tag>
        )
    });
    
    return (
        // <>
        //     <div className="cuisine-container">
        //         <div className="image">
        //             <Image className="image"
        //                 src={cuisine.imageUrl}
        //                 alt={cuisine.name}
        //                 borderRadius='lg'/>
        //         </div>
                
        //         <div>
        //             <div className="title_value">
        //                 <h4>Title</h4>
        //                 <p className="cuisine-title">{cuisine.name}</p>
        //             </div>
                        
        //             <div className="title_value">
        //                 <h4>Content</h4>
        //                 <p className="cuisine-content">{cuisine.description}</p>
        //             </div>

        //             <div className="title_value">
        //                 <h4>Type</h4>
        //                 <p className="cuisine-date">{cuisine.type}</p>
        //             </div>
                    
        //         </div>
                
        //         <div>
        //             <button className="delete-button" onClick={() => onDelete(cuisine.id)}>
        //                 Delete
        //             </button>
        //         </div>
                
        //     </div>
        // </>

        <Card maxW='sm' variant='outline' style={{padding:"10px", margin:"20px"}}>
            <CardBody>
                <Image
                minW='100%'
                h='60'
                src={cuisine.imageUrl}
                alt={cuisine.alt}
                borderRadius='lg'/>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{cuisine.name}</Heading>
                    <HStack spacing={2}>
                        {tags}
                    </HStack>
                    <Text>{cuisine.description}</Text>
                </Stack>
            </CardBody>

            <Divider />

            {isAdmin &&
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <DeleteIcon align="right" boxSize='1.5em' color='red.500' onClick={() => onDelete(cuisine.id)}></DeleteIcon>
                </ButtonGroup>
            </CardFooter>}
        </Card>
        
    );
}

export default Cuisine