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
import NavSidebar from './NavSideBar.js'
import Split from 'grommet/components/Split';
import HeaderDash from './Header.js'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/dashboard'
import * as generalActionCreators from '../../general_dash/dashboard'


export class DashMainDoctor extends Component {

  render() {
    return (
      <Split fixed={false} separator={false} flex='right'>
        <NavSidebar/>
        <Box justify='center' align='center'>
          <div style={{
            width: "100%"
          }}>
            <HeaderDash/>
          </div>
          {React.cloneElement(this.props.children, this.props)}
        </Box>
      </Split>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    patients: state.patientsReducer.patients,
    profile_has_change: state.requestInfo,
    hasError: state.loginHasError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...actionCreators, ...generalActionCreators}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(DashMainDoctor);
