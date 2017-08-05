import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import events from '../events.js'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
BigCalendar.views = ['month', 'day', 'week'];

export class TimeTableDoctor extends Component {
  render() {
    const {children} = this.props;
    const allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

    return (
      <Box>
        <h1>TimeTable</h1>
        <div>
          <BigCalendar {...this.props} events={events} views={allViews} defaultDate={new Date()}/>
        </div>
      </Box>
    )
  }
}
export default connect(null, {dashboard})(TimeTableDoctor)
