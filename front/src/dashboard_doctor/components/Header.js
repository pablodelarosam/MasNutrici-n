import React, {Component, PropTypes} from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Section from 'grommet/components/Section';

export class HeaderDash extends Component {

  render() {
    return (
      <Header justify="center" colorIndex="neutral-4" size='xlarge'>
        <Box size={{
          width: {
            max: 'xxlarge'
          }
        }} direction="row" responsive={false} justify="start" align="center" pad={{
          horizontal: 'medium'
        }} flex="grow">
          <Box pad="small"/>
          <Menu label="Label" inline={true} direction="row" flex="grow"></Menu>
        </Box>
      </Header>
    );
  }

}

export default HeaderDash;
