import React from 'react';
import PropTypes from 'prop-types';
import {
    SimpleGrid
} from '@chakra-ui/react';
import LogCard from './LogCard';

class LogGrid extends React.Component {
    render() {
        return (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={6}>
                {
                    this.props.logList.map((log) => {
                        return (<LogCard id={log.id} key={log.id} author={log.author} />)
                    })
                }
            </SimpleGrid>
        );
    }
}

LogGrid.propTypes = {
    logList: PropTypes.array
}

LogGrid.defaultProps = {
    logList: []
}

export default LogGrid;