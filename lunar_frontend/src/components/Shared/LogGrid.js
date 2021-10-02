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
                        return (<LogCard id={log.id} author={log.author} />)
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
    logList: [
        { id: "id1", author: "author1" },
        { id: "id2", author: "author2" },
        { id: "id3", author: "author3" },
        { id: "id4", author: "author4" },
        { id: "id5", author: "author5" },
        { id: "id6", author: "author6" }
    ]
}

export default LogGrid;