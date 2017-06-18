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
          <h1>Sessions</h1>
          <button onClick={this.onOpenLayer.bind(this)}> + Add</button>
          </div>
          <SearchInput className="searchInp" placeHolder='Buscar'
          suggestions={undefined} />
          <div>
            <div className="card">
                <div className="inline-session-top-image">
              <Image src={imageIdea} size='small'/>
                <div className="inline-session-top ">
              <button type="button" className="edit-button">Ver</button>
                <button type="button" className="edit-button">Eliminar</button>
                </div>
                </div>
              <Paragraph margin="none">
                Trial
              </Paragraph>
              <Paragraph margin="none">
                Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor
              </Paragraph>
            </div>
            <div className="card">
            <div className="inline-session-top-image">
          <Image src={imageIdea} size='small'/>
            <div className="inline-session-top ">
          <button type="button" className="edit-button">Ver</button>
            <button type="button" className="edit-button">Eliminar</button>
            </div>
            </div>
              <Paragraph margin="none">
                1hr
              </Paragraph>
              <Paragraph margin="none">
                Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor
              </Paragraph>
            </div>

            <div className="card">
              <h4> Session  </h4>
              <div className="inline-session">
              <FormField className="container-session-one">
    <TextInput id='item1'
      name='item-1'
      value='name'

      suggestions={['name']} />
  </FormField>


  <FormField className="container-session-three">
<TextInput id='item1'
name='item-1'
value='Description'

suggestions={['name']} />
</FormField>

</div>
  <FormField className="container-session-two">
<TextInput id='item1'
name='item-1'
value='cost'


suggestions={['cost']} />
</FormField>
  <button type="button" className="submit-tutor-button">OK</button>
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
