import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';

import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
export class PaymentsTutor extends Component {

  render() {
    const {children} = this.props;
    const imageTeach = require('../../static/img/facw.svg');

    return (
      <Box>

        <Box className="box-profile-midle " align='left' pad='medium' margin='small' colorIndex='light-2'>
          <h3>
            Billing Method
          </h3>
          <Box>
            <Tabs>
              <Tab title='Stripe'>
                <Paragraph>
                  Stripe
                </Paragraph>

              </Tab>
              <Tab title='Paypal'>
                <Paragraph>
                  Paypal
                </Paragraph>

              </Tab>
            </Tabs>
            <div>
              <button type="button" className="edit-button">Edit</button>
              <button type="button" className="remove-button">Remover</button>
            </div>
          </Box>

        </Box>

        <div className="last-activity">
          <h2>Last Activity</h2>
          <List selectable={true}>
            <ListItem justify='between' separator='horizontal'>
              <img src={imageTeach} className="circle-img"/>
              <span>
                Alan
              </span>
              <span className='secondary'>
                52 min
              </span>
            </ListItem>
            <ListItem justify='between'>
              <img src={imageTeach} className="circle-img"/>
              <span>
                Chris
              </span>
              <span className='secondary'>
                15 min
              </span>
            </ListItem>
            <ListItem justify='between'>
              <img src={imageTeach} className="circle-img"/>
              <span>
                Eric
              </span>
              <span className='secondary'>
                120 min
              </span>
            </ListItem>
          </List>

        </div>
      </Box>
    );
  }

}

export default PaymentsTutor;
