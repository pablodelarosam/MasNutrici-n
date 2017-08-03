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

export class NavSidebar extends Component {

  render() {
    const imageFace = require('../../static/img/facw.svg');
    const imageFeed = require('../../static/img/feed.svg');
    const imageContent = require('../../static/img/content.svg');
    const imageCalendar = require('../../static/img/calendar.svg');
    const imageCancel = require('../../static/img/cancel.svg');
    return (
      <Sidebar colorIndex='neutral-4' fixed={true} size='medium'>
        <Header pad='medium' justify='between'>
          <Title className="title-dash"></Title>
        </Header>
        <Box className="box-profile-nav " flex='grow' justify='start'>
          <Image className="img-title" src={imageFace} size="small"/>
          <h3>
            Felipe
          </h3>
          <p>
            Navigation
          </p>
          <Menu primary={true}>
            <Anchor href='/dashboard/patient/profile' className='active'>
              <Image className="menu-img" src={imageFace}/>
              Perfil
            </Anchor>
            <Anchor href='/dashboard/patient/status'>
              <Image className="menu-img" src={imageFeed}/>
              Estatus
            </Anchor>

            <Anchor href='/dashboard/patient/course'>
              <Image className="menu-img img-margin" src={imageContent}/>
              Dietas
            </Anchor>

            <Anchor href='/'>
              <Image className="menu-img img-margin" src={imageCancel}/>
              Logout
            </Anchor>
          </Menu>
        </Box>
      </Sidebar>
    );
  }

}

export default NavSidebar;
