import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    Container,
    Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Menu from '../Shared/Menu';
import * as Url from '../../utils/util.url';

class LogHeader extends React.Component {

    render() {
        return (
            <Box position="relative" w="100%" zIndex={1} backgroundColor="brand.primary">
                <Container
                    maxW="200ch"
                    py={3}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center">
                    <Button variant="ghost" fontSize="xl" as={Link} to={Url.ROOT}>
                        LunarLog&nbsp;#{this.props.id}
                    </Button>
                    <Menu />
                </Container>
            </Box>
        );
    }
}

LogHeader.propTypes = {
    id: PropTypes.string
}

LogHeader.defaultProps = {
    id: "id"
}

export default LogHeader;