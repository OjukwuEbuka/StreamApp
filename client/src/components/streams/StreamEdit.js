import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formVals => {
        this.props.editStream(this.props.stream.id, formVals)
    }

    render(){        
        const {title, description} = this.props.stream;
        if(!title) return <div>Loading...</div>
        
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm onSubmit={this.onSubmit} initialValues={{title, description}} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({ 
    stream: state.streams[ownProps.match.params.id]
})

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);