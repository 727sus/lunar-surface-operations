import React from 'react';
import {
    Box,
    Text,
    Avatar,
    Center,
    Flex,
    Link,
    Button
} from '@chakra-ui/react';
import * as User from '../../utils/util.user';

// For testing only
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}

class LogCard extends React.Component {
    render() {
        return (
            <Box backgroundColor="gray.700" borderRadius={['sm', null, 'md']} overflow="hidden">
                <Flex px={4} pt={2} align="center" justify="space-between" w="100%">
                    <Text fontSize={['md', null, 'xl']} fontWeight="semibold">
                        {User.hashStringToColor(makeid(8))}
                    </Text>
                </Flex>

                <Center h="100px">
                    <Avatar name="Xiwen Teoh" bg={User.hashStringToColor(makeid(8))} />
                </Center>

                <Flex px={4} py={2} align="center" justify="space-between" w="100%">
                    <Text mr={2} fontSize={['xs', null, 'sm']}>
                        Posted by&nbsp;
                        <Link fontWeight="semibold" isExternal>
                            Xiwen Teoh
                        </Link>
                    </Text>
                    <Flex align="center">
                         <Button ml={1} fontSize={['xs', null, 'sm']} borderRadius="xl" px={5} backgroundColor="gray.800">
                            View
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        );
    }
}

export default LogCard;