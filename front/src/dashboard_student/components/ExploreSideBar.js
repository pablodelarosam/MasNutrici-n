import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Logo from '../../general_components/Logo';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

export class ExploreSidebar extends Component {

  render() {
    const imageFace = require('../../static/img/facw.svg');
    const allCourses = require('../../static/img/all.svg');
    const imageVoice = require('../../static/img/voice.svg');
    const imageFinances = require('../../static/img/finances.svg');
    const imageTech = require('../../static/img/tech.svg');
    return (
      <Sidebar colorIndex='neutral-4' fixed={true} size='medium'>
        <Header pad='medium' justify='between'>
          <Title className="title-dash">
            MB
          </Title>
        </Header>
        <Box className="box-profile-nav " flex='grow' justify='start'>
          <Image className="img-title" src={imageFace} size="small"/>
          <h3>
            CATEGORIES
          </h3>

          <Menu primary={true}>
            <Anchor href='#' className='active'>
              <Image className="menu-img" src={allCourses}/>
              AllCourses
            </Anchor>
            <Anchor href='#'>
              <Image className="menu-img img-margin" src={imageVoice} />
              Language
            </Anchor>
            <Anchor href='#'>
              <Image className="menu-img" src={imageFinances}/>
              Finances
            </Anchor>
            <Anchor href='#'>
              <Image className="menu-img img-margin" src={imageTech}/>
              Tech
            </Anchor>
          </Menu>
        </Box>
      </Sidebar>
    );
  }

}

export default ExploreSidebar;
