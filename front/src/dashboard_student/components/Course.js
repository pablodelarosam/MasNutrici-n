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

export class DashboardContainer extends Component {
  render() {
    const arroyLeft = require('../../static/img/left.svg');
    const arroyRight = require('../../static/img/right.svg');
    const imageCalendar = require('../../static/img/blackCalendar.svg');
    const {children} = this.props;
    return (
      <Box>

        <Box style={{}} size={{
          width: {
            max: "xxlarge"
          }
        }} direction="row">
          <Box className="courses-top" pad="medium" basis="1/2">
            <h3>
              My courses
            </h3>

          </Box>
          <Box pad="medium" basis="1/2">
            <div className="inline-optc">
              <button>
                <Image className="arroy-image" src={arroyLeft} size="small"/>
              </button>
              <button>
                <Image className="arroy-image" src={arroyRight} size="small"/>
              </button>
            </div>

          </Box>
        </Box>

        <List selectable={true}>
          <ListItem justify='between' separator='horizontal' className="table-course">
            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Prof.Rajiv
              </p>
              <p>
                English
              </p>
            </span>
            <span className='secondary'>
              <p>
                <span>
                  <Image className="img-calendar" src={imageCalendar} size="small"/>
                </span>
                20/05/2017
              </p>
              <p>52 min
              </p>
              <p>
                $20 USD
              </p>
            </span>
          </ListItem>
          <ListItem justify='between' separator='horizontal' className="table-course">
            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Prof.Rajiv
              </p>
              <p>
                English
              </p>
            </span>
            <span className='secondary'>
              <p>
                <span>
                  <Image className="img-calendar" src={imageCalendar} size="small"/>
                </span>
                20/05/2017
              </p>
              <p>52 min
              </p>
              <p>
                $20 USD
              </p>
            </span>
          </ListItem>
          <ListItem justify='between' separator='horizontal' className="table-course">
            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Prof.Rajiv
              </p>
              <p>
                English
              </p>
            </span>
            <span className='secondary'>
              <p>
                <span>
                  <Image className="img-calendar" src={imageCalendar} size="small"/>
                </span>
                20/05/2017
              </p>
              <p>52 min
              </p>
              <p>
                $20 USD
              </p>
            </span>
          </ListItem>
          <ListItem justify='between' separator='horizontal' className="table-course">
            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Prof.Rajiv
              </p>
              <p>
                English
              </p>
            </span>
            <span className='secondary'>
              <p>
                <span>
                  <Image className="img-calendar" src={imageCalendar} size="small"/>
                </span>
                20/05/2017
              </p>
              <p>52 min
              </p>
              <p>
                $20 USD
              </p>
            </span>
          </ListItem>
        </List>
      </Box>
    )
  }

}
export default connect(null, {dashboard})(DashboardContainer)
