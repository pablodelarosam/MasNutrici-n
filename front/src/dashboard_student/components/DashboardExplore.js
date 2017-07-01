import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Image from 'grommet/components/Image';
import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import Paragraph from 'grommet/components/Paragraph';
import Columns from 'grommet/components/Columns';
import Anchor from 'grommet/components/Anchor';

export class DashboardExplore extends Component {

  render() {
      const imageCalendar = require('../../static/img/blackCalendar.svg');

    const {children} = this.props;
    return (
      <Box>
        <h1>Estado</h1>
        <Box direction="row">
          <Box className="box-right-info" pad="medium" basis="1/4">
        <p> Última visita </p>
        </Box>
        <Box className="box-right-info" pad="medium" basis="1/4">
      <p> 20/10/2017 </p>
      </Box>
      <Box className="box-right-info" pad="medium" basis="1/4">
    <Image style={{width: 40}} src={imageCalendar} size="small"/>
    </Box>
        </Box>


        <Box direction="row">
        <Box className="box-right-info" pad="medium" basis="1/4">
        <div className="card">

            <h1 className="headstatus"> Grasa </h1>
            <h1 className="headstatus"> 200 </h1>
        </div>
        </Box>

        <Box className="box-right-info" pad="medium" basis="1/4">
        <div className="card">

            <h1 className="headstatus"> Masa </h1>
            <h1 className="headstatus"> 200 </h1>
        </div>
        </Box>


        <Box className="box-right-info" pad="medium" basis="1/4">
        <div className="card">

            <h1 className="headstatus"> Cm </h1>
            <h1 className="headstatus"> 200 </h1>
        </div>
        </Box>

              </Box>

              <div className="card">

                  <h1 className="headstatus">Peso</h1>
                
              </div>


      </Box>

    )
  }

}
export default connect(null, {dashboard})(DashboardExplore)
