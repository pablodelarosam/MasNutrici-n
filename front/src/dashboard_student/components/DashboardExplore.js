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
    const imageStar = require('../../static/img/star.svg');
    const {children} = this.props;
    return (
      <Box colorIndex='light-2'>
        <Box className="explore">
          <div className="explore-img"></div>
          <Box className="box-explore-midle" align='end' pad='medium' margin='small'>
            <div className="inline-optc">
              <h4>
                Prof.Rajiv
              </h4>
              <div className="inline-opte">
                <Image src={imageStar} size="small"/>
                <Image src={imageStar} size="small"/>
                <Image src={imageStar} size="small"/>
                <Image src={imageStar} size="small"/>
              </div>
            </div>
            <Form className="form-profile-bottom">
              <p>
                Lorem impusm dolor lorem Lorem impusm dolor lorem Lorem impusm dolor lorem Lorem impusm dolor lorem Lorem impusm dolor
              </p>
              <button>
                <Anchor href="/dashboard/student_explore/details">Go to Profile</Anchor>
              </button>
            </Form>
          </Box>
        </Box>

        <Box className="explore">
          <div className="explore-img"></div>

          <Box className="box-explore-midle" align='end' pad='medium' margin='small' colorIndex='light-2'>
            <div className="inline-optc">
              <h4>
                Prof.Rajiv
              </h4>
              <div className="inline-opte">
                <Image src={imageStar} size="small"/>
                <Image src={imageStar} size="small"/>
                <Image src={imageStar} size="small"/>
                <Image src={imageStar} size="small"/>
              </div>
            </div>
            <Form className="form-profile-bottom">
              <p>
                Lorem impusm dolor lorem Lorem impusm dolor lorem Lorem impusm dolor lorem Lorem impusm dolor lorem Lorem impusm dolor
              </p>
              <button>
                <Anchor href="/dashboard/student_explore/details">Go to Profile</Anchor>
              </button>
            </Form>
          </Box>
        </Box>

        <Box className="explore">
          <div className="explore-img"></div>

          <Box className="box-explore-midle" align='end' pad='medium' margin='small' colorIndex='light-2'>
            <div className="inline-optc">
              <h4>
                Prof.Rajiv
              </h4>
              <div className="inline-opte">
                <Image src={imageStar} size="small"/>
                <Image src={imageStar} size="small"/>
                <Image src={imageStar} size="small"/>
                <Image src={imageStar} size="small"/>
              </div>
            </div>
            <Form className="form-profile-bottom">
              <p>
                Lorem impusm dolor lorem Lorem impusm dolor lorem Lorem impusm dolor lorem Lorem impusm dolor lorem Lorem impusm dolor
              </p>
              <button>
                <Anchor href="/dashboard/student_explore/details">Go to Profile</Anchor>
              </button>
            </Form>
          </Box>
        </Box>

      </Box>

    )
  }

}
export default connect(null, {dashboard})(DashboardExplore)
