import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';

export class DashboardTutor extends Component {
    render() {
        const {children} = this.props;
        return (
          <h1>Dashboard</h1>
        )
    }

}
export default connect(null, {dashboard})(DashboardTutor)
