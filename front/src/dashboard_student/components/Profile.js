import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Form from 'grommet/components/Form';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
export class ProfileStudent extends Component {
  render() {
    const {children} = this.props;
    const imageIdea = require('../../static/img/idea.svg');
    const imageWorld = require('../../static/img/world.svg');
    const imageFace = require('../../static/img/facw.svg');
    return (
      <Box>
        <Box className="box-profile-top " align='center' pad='medium' margin='small' colorIndex='light-2'>
          <Image src={imageFace} size="small"/>
          <h1 className="head-profile-top">
            Felipe
          </h1>
          <Box style={{}} size={{
            width: {
              max: "xxlarge"
            }
          }} direction="row">
            <Box pad="medium" basis="1/2">

              <Paragraph margin="none">
                contacto.craftcode@gmail.com
              </Paragraph>

              <Paragraph margin="none" className="paragraph-box-top">
                Birthday
              </Paragraph>

            </Box>
            <Box pad="medium" basis="1/2">
              <Paragraph margin="none" className="password">
                Password
              </Paragraph>
              <button type="button" className="button-profile-top">Edit</button>
            </Box>
          </Box>
        </Box>

        <Box className="box-profile-midle " align='left' pad='medium' margin='small' colorIndex='light-2'>
          <h3>
            Billing Method
          </h3>

          <Box className="">

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

        <Box className="box-profile-bottom" align='left' pad='medium' margin='small' colorIndex='light-2'>
          <h4>
            Promo code
          </h4>
          <Form className="form-profile-bottom">
            <input type="email" placeholder="Code"/>
            <button type="button" className="button-profile-bottom">Apply</button>
          </Form>
        </Box>

      </Box>

    )
  }

}
export default connect(null, {dashboard})(ProfileStudent)
