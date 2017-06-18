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
import CheckBox from 'grommet/components/CheckBox';

export class ProfileTutor extends Component {
  render() {
    const {children} = this.props;
    const imageIdea = require('../../static/img/idea.svg');
    const imageWorld = require('../../static/img/world.svg');
    const imageFace = require('../../static/img/facw.svg');
    return (
      <Box>
        <Box className="box-profile-top-tutor " align='center' pad='medium' margin='small' colorIndex='light-2'>

          <Box style={{}} size={{
            width: {
              max: "xxlarge"
            }
          }} direction="row">
            <Box pad="medium" basis="1/2">
              <Image src={imageFace} size="small"/>

            </Box>
            <Box pad="medium" basis="1/2">

              <h1 className="head-profile-top">
                Felipe
              </h1>

              <Paragraph margin="none" className="password">
                contact.craftcode@gmail.com
              </Paragraph>

              <Paragraph margin="none" className="password">
                Location-Local time
              </Paragraph>

              <Paragraph margin="none" className="password">
                Password
              </Paragraph>

            </Box>
          </Box>
        </Box>

        <Box className="box-profile-midle " align='left' pad='medium' margin='small' colorIndex='light-2'>
          <h3>
            Overview
          </h3>

          <Paragraph margin="none">
            Lorem ipsum dolor sit amet
          </Paragraph>

        </Box>

        <Box className="box-profile-midle " align='left' pad='medium' margin='small' colorIndex='light-2'>
          <div className="inline-optc">
            <h3>
              Work experience
            </h3>
            <CheckBox className="checkbox-class" label='' reverse={false} disabled={false} toggle={false}/>
          </div>

          <Paragraph margin="none">
            Work1
          </Paragraph>

          <Paragraph margin="none">
            Lorem ipsum dolor sit amet
          </Paragraph>

        </Box>

        <Box className="box-profile-midle " align='left' pad='medium' margin='small' colorIndex='light-2'>
          <div className="inline-optc">
            <h3>
              Subjects
            </h3>
            <CheckBox className="checkbox-class" label='' reverse={false} disabled={false} toggle={false}/>
          </div>

          <Paragraph margin="none">
            Work1
          </Paragraph>

          <Paragraph margin="none">
            Lorem ipsum dolor sit amet
          </Paragraph>

        </Box>

        <Box className="box-profile-midle " align='left' pad='medium' margin='small' colorIndex='light-2'>
          <div className="inline-optc">
            <h3>
              Languages
            </h3>
            <CheckBox className="checkbox-class" label='' reverse={false} disabled={false} toggle={false}/>
          </div>

          <Paragraph margin="none">
            English
          </Paragraph>

          <Paragraph margin="none">
            French
          </Paragraph>

        </Box>

      </Box>

    )
  }

}
export default connect(null, {dashboard})(ProfileTutor)
