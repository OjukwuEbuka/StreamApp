import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import {createStream } from '../../actions';

class StreamCreate extends React.Component {

    onSubmit = (formVals)=>{
        this.props.createStream(formVals);
    }

    render () {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}


export default connect(null, {createStream})(StreamCreate);