import { Card, CardBody, CardFooter, Heading, Text, Stack, Divider, ButtonGroup, HStack, Image, Tag, TagLabel } from "@chakra-ui/react";
import { DeleteIcon, Icon } from '@chakra-ui/icons'
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function CusineType({ cusine, deleteit }) {
    let counter = -1
    let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'orange'];
    let tags = cusine.type.split(" ").map(c => {
        counter = (counter + 1) % colors.length;
        return (
            <Tag key={counter} size='md' maxW='20' colorScheme={colors[counter]} borderRadius='full'>
                <TagLabel>{c}</TagLabel>
            </Tag>
        )
    });

    const nav = useNavigate();

    let isAdmin = true;

    return (
        <Card maxW='sm' variant='outline'>
            <CardBody>
                <Image
                minW='100%'
                h='60'
                src={cusine.imageUrl}
                alt={cusine.alt}
                borderRadius='lg'/>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{cusine.name}</Heading>
                    <HStack spacing={2}>
                        {tags}
                    </HStack>
                    <Text>{cusine.description}</Text>
                </Stack>
            </CardBody>

            <Divider />

            {isAdmin &&
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <DeleteIcon align="right" boxSize='1.5em' color='red.500' onClick={() => deleteit()}></DeleteIcon>
                </ButtonGroup>
            </CardFooter>}
        </Card>
    );
}