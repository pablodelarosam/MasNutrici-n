import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import events from '../events.js';
import Line from 'react-chartjs';
//import TimePicker from 'rc-time-picker';
import CheckBox from 'grommet/components/CheckBox';
//import {SingleDatePicker} from 'react-dates';
import Paragraph from 'grommet/components/Paragraph';
import ModalGeneral from '../../general_components/ModalGeneral.js';
//import serializeForm from 'form-serialize';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
BigCalendar.views = ['month', 'day', 'week'];

export class TimeTablePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLayer: false
    };
  }

  onOpenLayer() {
    this.setState({"openLayer": true});

  }

  onCloseLayer() {
    this.setState({"openLayer": false});
  }

  render() {
    const {children} = this.props;
    const allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

    return (
      <Box className="TimeTable">
        {this.state.openLayer && (
          <ModalGeneral title="Agendar cita" showClosed={true} closeDialog={() => this.onCloseLayer()} handleSubmit={(e) => this.handleSubmit(e)}>
            <Box>  </Box>
          </ModalGeneral>
        )}
        <h1>Calendario</h1>
        <button onClick={() => this.onOpenLayer()}>
          Agendar cita
        </button>
        <div>
          <BigCalendar {...this.props} events={events} views={allViews} defaultDate={new Date()}/>
        </div>
      </Box>
    )
  }
}
export default connect(null, {dashboard})(TimeTablePatient)
