import React from 'react';
import { connect } from 'react-redux';

class StreamShow extends React.Component {


    render(){
        return (
            <div>
                <div>
                    {this.props.stream.title}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({streams}) => ({ stream: streams.find(stream => stream.id === this.props.match.id)})
export default connect(mapStateToProps)(StreamShow);