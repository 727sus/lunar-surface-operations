import React from 'react';
import PropTypes from 'prop-types';
import { 
    Container,
    Button,
    Text,
    Stack,
    Flex,
    Box
} from '@chakra-ui/react';
import LogFilterListening from './LogFilterListening';
import LogFilterActive from './LogFilterActive';
import * as LogService from '../../../services/api.logs';
import '../../../assets/styles/scrollbar.module.css';

class LogFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLogList: [],
            listeningLogList: []
        };
    }

    componentDidMount() {
        LogService.getActiveLogs().then(logs => {
            this.setState({ 
                activeLogList: logs,
                listeningLogList: logs
            });
        });
    }

    render() {
        return (
            <Flex height="100vh" flexDirection="column">
                <Container
                    py={3}
                    display="flex">
                    <Button variant="ghost" fontSize="xl">
                        Controls
                    </Button>
                </Container>
                <Box overflowY="scroll">
                    <Text pl={8} pt={4} pb={2} fontWeight="semibold" fontSize="lg"># Listening Logs</Text>
                    <LogFilterListening logList={this.state.listeningLogList} />
                    <Text pl={8} pt={4} pb={2} fontWeight="semibold" fontSize="lg"># Active Logs</Text>
                    <LogFilterActive logList={this.state.activeLogList} />
                </Box>
            </Flex>
        );
    }
}

export default LogFilter;