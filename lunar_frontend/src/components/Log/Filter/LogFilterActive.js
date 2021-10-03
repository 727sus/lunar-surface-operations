import React from 'react';
import PropTypes from 'prop-types';
import { 
    Container,
    Button,
    Box,
    Text,
    Stack,
    Flex
} from '@chakra-ui/react';
import LogCardSmall from '../../Shared/LogCardSmall';
import '../../../assets/styles/scrollbar.module.css';

class LogFilterActive extends React.Component {
    render() {
        return (
            <Box pl={8}>
                <Stack mt={2} ml={6} direction="column">
                    {
                        this.props.logList.map((log) => {
                            return (<LogCardSmall id={log.id} key={log.id} author={log.author} />)
                        })
                    }
                </Stack>
            </Box>
        );
    }
}

export default LogFilterActive;