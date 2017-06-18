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
import ExploreSidebar from './ExploreSideBar.js'
import Split from 'grommet/components/Split';
import HeaderDash from './Header.js'


export class DashStudentExplore extends Component {

  render() {
    const {children} = this.props;
    return (
      <Split fixed={false} separator={false} flex='right'>
        <ExploreSidebar/>
        <Box justify='center' align='center'>
          <div style={{
            width: "100%"
          }}>
          <HeaderDash/>
          </div>
          {children}
        </Box>
      </Split>
    );
  }

}

export default DashStudentExplore;
