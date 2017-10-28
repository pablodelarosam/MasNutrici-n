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
import TimePicker from 'rc-time-picker';
import CheckBox from 'grommet/components/CheckBox';
import {SingleDatePicker} from 'react-dates';
import Paragraph from 'grommet/components/Paragraph';
import ModalGeneral from '../../general_components/ModalGeneral.js';
import serializeForm from 'form-serialize';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
BigCalendar.views = ['month', 'day', 'week'];

const format = 'HH:mm';
const now = moment().hour(0).minute(0);

export class TimeTablePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLayer: false,
      timetable: [],
      currentMood: 'No habilitado',
      checkMood: false,
      focused: props.autoFocus,
      date: props.initialDate,
      start_date_opt: moment(),
      end_date_opt: moment(),
      focused_start: false,
      focused_end: false,
      numTimeTo: [now],
      numTimeFrom: [now]
    };
  }

  onOpenLayer() {
    this.setState({"openLayer": true});

  }

  onCloseLayer() {
    this.setState({"openLayer": false});
  }
  // Get filter changes to modify the query
  changeOpts(e) {
    // this.setState({
    //   "start_date_opt": e
    // });
  }

  handleSubmit(e) {
    e.preventDefault();
    var values = serializeForm(e.target, {hash: true});
    console.log(values);
    var s_d = moment(values['start_date'] + " " + values['first_time']);
    var e_d = moment(values['start_date'] + " " + values['first_time']).add('minutes', 20);
    s_d = s_d.toDate();
    e_d = e_d.toDate();

    events.push({
      "title": "New Date",
      "start": s_d,
      "end": e_d
    });

    console.log(events);

    this.onCloseLayer();
  }

  render() {
    const {children} = this.props;
    const allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
    const {focused, date} = this.state;

    const defaultProps = {
      // input related props
      placeholder: 'Fecha Inicial',
      disabled: false,
      required: false,

      // calendar presentation and interaction related props
      numberOfMonths: 1,
      isOutsideRange: () => false,
      enableOutsideDays: true,
      keepOpenOnDateSelect: true,
      reopenPickerOnClearDate: true
    }

    return (
      <Box className="TimeTable">
        {this.state.openLayer && (
          <ModalGeneral title="Agendar cita" showClosed={true} closeDialog={() => this.onCloseLayer()} handleSubmit={(e) => this.handleSubmit(e)}>
            <Box>
            <SingleDatePicker {...defaultProps} id="start_date" date={this.state.start_date_opt} // momentPropTypes.momentObj or null
                    onDateChange={(e) => this.changeOpts(e)} // PropTypes.func.isRequired
                    focused={this.state.focused_start} // PropTypes.bool
                    onFocusChange={({focused}) => this.setState({focused_start: focused})} // PropTypes.func.isRequired
                  />
              <TimePicker name="first_time" showSecond={false} defaultValue={now} className="xxx" onChange={this.changeOpts()} format={format} use12Hours/>
            </Box>
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
export default TimeTablePatient
