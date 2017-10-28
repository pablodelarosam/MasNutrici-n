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
import Section from 'grommet/components/Section';

export class NavSidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    // Set user info
    this.setState({
      'user': JSON.parse(sessionStorage.getItem('user'))
    });
  }

  removeSession() {
    sessionStorage.removeItem('user');
  }

  render() {
    const imageFace = require('../../static/img/facw.svg');
    const imagePayments = require('../../static/img/account.svg');
    const imageSession = require('../../static/img/all.svg');
    const imageContent = require('../../static/img/content.svg');
    const imageCalendar = require('../../static/img/calendar.svg');
    const imageCancel = require('../../static/img/cancel.svg');
    const imageFeed = require('../../static/img/feed.svg');
    const doctorFace = require('../../static/img/doctornav.svg');

    return (

      <Sidebar className="sideBarDoctor" colorIndex='neutral-4'  size='medium'>
        <Header pad='medium' justify='between'>
          <Title className="title-dash"></Title>
        </Header>
        <Box className="box-profile-nav " flex='grow' justify='start'>
          <Image className="img-title" src={doctorFace} size="small"/>
          <h3>
            {this.state.user.full_name}
          </h3>
          <p>
            Navigation
          </p>
          <Menu primary={true}>
            <Anchor href='/dashboard/doctor/pacientes' className='active'>
              <Image className="menu-img" src={imageFace}/>
              Pacientes
            </Anchor>
            <Anchor href='/dashboard/doctor/dietas'>
              <Image className="menu-img" src={imageSession}/>
              Dietas
            </Anchor>
            <Anchor href='/dashboard/paciente/timetable'>
              <Image className="menu-img img-margin" src={imageCalendar}/>
              Citas
            </Anchor>
            <Anchor href='/' onClick={() => this.removeSession()}>
              <Image className="menu-img img-margin" src={imageCancel}/>
              Cerrar Sesion
            </Anchor>
          </Menu>
        </Box>
      </Sidebar>
    );
  }

}

export default NavSidebar;
