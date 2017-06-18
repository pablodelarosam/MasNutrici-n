import React, {Component} from 'react';
import App from 'grommet/components/App';
require('./scss/main.scss');
import {connect} from 'react-redux'

/*import * as actionCreators from '../actions/actionCreators';

  This will bind our actions to dispatch (make the fire-able)
  and make the actions available via props
*/

class AppK extends Component {
    render() {
        const {children} = this.props;
        return (
            <App centered={false}>{children}</App>
        );
    }
}

export default AppK;
