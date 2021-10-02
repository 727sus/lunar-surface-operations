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

class LogCardSmall extends React.Component {
    render() {
        return (
            <Button backgroundColor="brand.primary" borderRadius={['sm', null, 'md']} overflow="hidden" justifyContent="flex-start">
                #{this.props.id}&nbsp;-&nbsp;{this.props.author}
            </Button>
        );
    }
}

LogCardSmall.propTypes = {
    id: PropTypes.string,
    id: PropTypes.number,
    author: PropTypes.string
}

LogCardSmall.defaultProps = {
    id: "id",
    author: "author"
}

export default LogCardSmall;