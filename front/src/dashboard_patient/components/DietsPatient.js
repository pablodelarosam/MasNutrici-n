import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

import CheckBox from 'grommet/components/CheckBox';

export class DietsPatient extends Component {
  render() {
    const arroyLeft = require('../../static/img/left.svg');
    const arroyRight = require('../../static/img/right.svg');
    const imageCalendar = require('../../static/img/blackCalendar.svg');
    const {children} = this.props;
    return (
      <Box className="boxDiet" >

        <Box  direction="row">
          <Box className="courses-top" pad="medium" basis="1">
            <h1>
              Dietas
            </h1>

          </Box>

        </Box>

        <List className="PatientList" selectable={true}>
          <h2> Desayunos </h2>
          <ListItem justify='between' separator='horizontal' className="table-course">

            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Opción 1
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes
              </p>
            </span>
            <span className='secondary'>
              <p className="macros-p">

                5 macros
              </p>
            <CheckBox />

            </span>
          </ListItem>
          <ListItem justify='between' separator='horizontal' className="table-course">
            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Opción 2
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes
              </p>
            </span>
            <span className='secondary'>
              <p className="macros-p">

                5 macros
              </p>
            <CheckBox />

            </span>
          </ListItem>
        </List>

        <List className="PatientList " selectable={true}>
          <h2> Comida </h2>
          <ListItem justify='between' separator='horizontal' className="table-course">

            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Opción 1
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes
              </p>
            </span>
            <span className='secondary'>
              <p className="macros-p">

                5 macros
              </p>
            <CheckBox />

            </span>
          </ListItem>
          <ListItem justify='between' separator='horizontal' className="table-course">
            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Opción 2
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes
              </p>
            </span>
            <span className='secondary'>
              <p className="macros-p">

                5 macros
              </p>
            <CheckBox />

            </span>
          </ListItem>
        </List>


        <h1 className="totalMacros"> 20 Macros </h1>

      </Box>
    )
  }

}
export default connect(null, {dashboard})(DietsPatient)
