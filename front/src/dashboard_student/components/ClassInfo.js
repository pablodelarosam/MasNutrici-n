import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import NavSidebar from './NavSidebar.js';
import Button from 'grommet/components/Button';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

export class DashboardContainer extends Component {
    render() {
      const arroyLeft = require('../../static/img/left.svg');
      const arroyRight = require('../../static/img/right.svg');
      const imageCalendar = require('../../static/img/blackCalendar.svg');
      const imageStar = require('../../static/img/star.svg');
        const {children} = this.props;
        return (
          <Box className="classInfo" align='left'>
          <h1 className="profName"> Prof.Siraj </h1>
          <Box style={{

          }} size={{
              width: {
                  max: "xxlarge"
              }
          }} direction="row">
              <Box className="picture-box" pad="medium" basis="1/2">

                <div className="prof-picture">

                </div>



              </Box>
              <Box pad="medium" basis="1/2">
              <h4 className="about-prof">
                About me
              </h4>
              <p>Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor
                Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor
               </p>
              </Box>
          </Box>


          <Box style={{

          }} size={{
              width: {
                  max: "xxlarge"
              }
          }} direction="row">
              <Box pad="medium" basis="1/2">
              <h1 className="headers "> Teaching experience </h1>
              <Box className="box-classinfo-left" align='center' pad='medium' margin='small' colorIndex='light-2'>
              <div className="work-experience">
              <h3> Work experience </h3>

              <h3>
                Work1
              </h3>

              <Paragraph margin="none">
                Lorem Ipsum dolor sit arem
              </Paragraph>
              </div>
              </Box>


              <Box className="box-classinfo-left" align='center' pad='medium' margin='small' colorIndex='light-2'>


                  <Box style={{

                  }} size={{
                      width: {
                          max: "xxlarge"
                      }
                  }} direction="row">
                      <Box className="midle-classinfo-box" pad="medium" basis="1/2">
                      <h3 className = "head-profile-top"> Subjects </h3>
                          <button type="button" className="edit-button">English</button>
                      </Box>

                      <Box pad="medium" basis="1/2">

                          <button type="button" className="french-button edit-button">French</button>
                      </Box>

                  </Box>
              </Box>



              <h1 className="headers "> Reviews </h1>

              <Box className="box-classinfo-left" align='center' pad='medium' margin='small' colorIndex='light-2'>


                  <Box style={{

                  }} size={{
                      width: {
                          max: "xxlarge"
                      }
                  }} direction="row">
                      <Box pad="medium" basis="">

                        <div className="review-picture">

                        </div>

                      </Box>

                      <Box pad="medium" basis="1/2">

                      <div className="inline-optc">
                        <h4> Peter </h4>
                        <div className="inline-review">
                          <Image src={imageStar} size="small"/>
                            <Image src={imageStar} size="small"/>
                              <Image src={imageStar} size="small"/>
                                <Image src={imageStar} size="small"/>
                                </div>
                                </div>

                          <Paragraph margin="none">
                            Lorem Ipsum dolor sit arem Lorem Ipsum dolor sit arem Lorem Ipsum dolor sit arem Lorem Ipsum dolor sit arem Lorem Ipsum dolor sit arem
                          </Paragraph>


                      </Box>

                  </Box>
              </Box>

              </Box>

              <Box pad="medium" basis="1/2">

              <Box className="box-classinfo-right" align='center' pad='medium' margin='small' colorIndex='light-2'>

                  <h1 className = "head-profile-top"> Trial </h1>
                  <Box style={{

                  }} size={{
                      width: {
                          max: "xxlarge"
                      }
                  }} direction="row">
                      <Box pad="medium" basis="1/2">

                          <Paragraph margin="none">
                            Time
                          </Paragraph>

                          <Paragraph margin="none" className="paragraph-box-top">
                          Price
                          </Paragraph>

                      </Box>

                      <Box pad="medium" basis="1/2">

                          <Paragraph margin="none">
                            60min
                          </Paragraph>

                          <Paragraph margin="none" className="paragraph-box-top">
                            $20USD
                          </Paragraph>

                      </Box>


                  </Box>
                  <button type="button" className="edit-button">Book</button>
              </Box>


              <Box className="box-classinfo-right" align='center' pad='medium' margin='small' colorIndex='light-2'>

                  <h1 className = "head-profile-top"> Sessions </h1>
                  <Box style={{

                  }} size={{
                      width: {
                          max: "xxlarge"
                      }
                  }} direction="row">
                      <Box pad="medium" basis="1/2">

                          <Paragraph margin="none">
                            Time
                          </Paragraph>

                          <Paragraph margin="none" className="paragraph-box-top">
                          Price
                          </Paragraph>

                      </Box>

                      <Box pad="medium" basis="1/2">

                          <Paragraph margin="none">
                            60min
                          </Paragraph>

                          <Paragraph margin="none" className="paragraph-box-top">
                            $20USD
                          </Paragraph>

                      </Box>


                  </Box>
                  <button type="button" className="edit-button">Book</button>
              </Box>



              </Box>



              </Box>




          </Box>
        )
    }

}
export default connect(null, {dashboard})(DashboardContainer)
