import React, {Component, PropTypes} from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Section from 'grommet/components/Section';

export class HeaderDash extends Component {

  render() {
    return (
      <Section className="sectionLogin">
        {< h1 > + Nutrición < /h1>}
      </Section>
    );
  }

}

export default HeaderDash;
