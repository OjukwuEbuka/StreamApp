import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/';

class StreamList extends React.Component {

    componentDidMount(){
        this.props.fetchStreams();
    }
    
    render(){
        console.log(this.props.streams)
        return (
            <div>StreamList</div>
        )
    }
}

const mapStateToProps = ({streams}) => ({streams});

export default connect(mapStateToProps, {fetchStreams})(StreamList);