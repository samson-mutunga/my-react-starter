import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Default extends React.Component {
    constructor (props, context) {
        super (props, context);
        this.state = { };
    }
    render () {
        return (
            <h5>Hello there</h5>
        );
    }
}

Default.propTypes = {

};

function mapStateToProps ( state, ownProps) {
    return {
        
    };
}

function mapDispatchToProps ( dispatch ) {
    return {
    };
}
export default connect (mapStateToProps, mapDispatchToProps)(Default);