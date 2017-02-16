import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class AppLayout extends React.Component {
    constructor (props, context) {
        super (props, context);
        this.state = {}
    }

    componentWillMount () {
    }
    render () {

        return (
            <div>
               {this.props.children}
            </div>
        );
    }
}
AppLayout.PropTypes = {
    children: PropTypes.object.isRequired
};


function mapStateToProps ( state, ownProps) {
    return {
    };
}

function mapDispatchToProps ( dispatch ) {
    return {
    };
}
export default connect (mapStateToProps, mapDispatchToProps)(AppLayout);