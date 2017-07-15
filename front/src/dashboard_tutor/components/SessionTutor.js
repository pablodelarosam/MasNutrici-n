import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Layer from 'grommet/components/Layer';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import TextInput from 'grommet/components/TextInput';
import SearchInput from 'grommet/components/SearchInput';
import Section from 'grommet/components/Section';

export class SessionTutor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openLayer: false
    };
    console.log(this.state);

  }

  onOpenLayer(e) {
    this.setState({openLayer: true});
  }

  onCloseLayer(e) {
    this.setState({openLayer: false});
  }

  render() {
    const {children} = this.props;
    const imageIdea = require('../../static/img/news.svg');

    var layerNode;
    if (this.state.openLayer) {
      layerNode = (
        <Layer closer={true} onClose={this.onCloseLayer.bind(this)}>
          <Box pad='medium'>
            <Form>
              <Header>
                <Heading>
                  Session Editor
                </Heading>
              </Header>
              <FormField label='Session Name'>
                <TextInput/>
              </FormField>
              <FormField label='Price'>
                <TextInput/>
              </FormField>
              <FormField label='Duration'>
                <TextInput/>
              </FormField>
              <FormField label='Description'>
                <TextInput/>
              </FormField>
              <Footer pad={{
                "vertical": "medium"
              }}>
                <button>Send</button>
              </Footer>
            </Form>

          </Box>
        </Layer>
      );
    }
    return (
      <Box>
        <Box>
        <div className="inline-session">
          <h1>Dietas</h1>

          </div>
          <SearchInput className="searchInp" placeHolder='Buscar'
          suggestions={undefined} />
          <div>
            <div className="card">
                <div className="inline-session-top-image">
              <Image src={imageIdea} size='small'/>
                <div className="inline-session-top ">
              <button type="button" className="seeButton"><a href="/dashboard/tutor/profile"> Ver </a></button>
                <button type="button" className="removeButton">Eliminar</button>
                </div>
                </div>
              <h3 margin="none">
                Dieta 1
              </h3>
              <Paragraph margin="none">
                Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor
              </Paragraph>
            </div>
            <div className="card">
            <div className="inline-session-top-image">
          <Image src={imageIdea} size='small'/>
            <div className="inline-session-top ">
          <button type="button" className="seeButton">Ver</button>
            <button type="button" className="removeButton">Eliminar</button>
            </div>
            </div>
              <h3 margin="none">
                Dieta 2
              </h3>
              <Paragraph margin="none">
                Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor
              </Paragraph>
            </div>




          </div>
        </Box>
        {layerNode}
      </Box>

    );
  }

}

const mapStateToProps = (state, ownProps) => {
  // Go to dashboard
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionTutor)
