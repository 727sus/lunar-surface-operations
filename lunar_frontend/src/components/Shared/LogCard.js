import React from 'react';
import PropTypes from 'prop-types';
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

class LogCard extends React.Component {
    render() {
        return (
            <Box backgroundColor="brand.secondary" borderRadius={['sm', null, 'md']} overflow="hidden">
                <Flex px={4} pt={2} align="center" justify="space-between" w="100%">
                    <Text fontSize={['md', null, 'xl']} fontWeight="semibold">
                        #{this.props.id.toString()}
                    </Text>
                </Flex>

                <Center h="100px">
                    <Avatar name={this.props.author} bg={User.getUserColor(this.props.author+this.props.id)} />
                </Center>

                <Flex px={4} py={2} align="center" justify="space-between" w="100%">
                    <Text mr={2} fontSize={['xs', null, 'sm']}>
                        Posted by&nbsp;
                        <Link fontWeight="semibold" isExternal>
                            {this.props.author}
                        </Link>
                    </Text>
                    <Flex align="center">
                         <Button ml={1} fontSize={['xs', null, 'sm']} borderRadius="xl" px={5} backgroundColor="brand.primary">
                            View
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        );
    }
}

LogCard.propTypes = {
    id: PropTypes.string,
    id: PropTypes.number,
    author: PropTypes.string
}

LogCard.defaultProps = {
    id: "id",
    author: "author"
}

export default LogCard;