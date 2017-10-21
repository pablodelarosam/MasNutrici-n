import React, {Component, PropTypes} from 'react';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';

class ModalGeneral extends Component {
  render() {
    const {children} = this.props;
    var closed = false;
    if (this.props.showClosed) {
      closed = true;
    }
    return (
      <Layer className="no-padding" closer={closed} onClose={() => this.props.closeDialog()}>
        <Box className="no-padding">
          <Form className="tutor-form" onSubmit={(e) => this.props.handleSubmit(e) }>
            <Header className="modal-style">
              <Heading>
                {this.props.title}
              </Heading>
            </Header>
            {children}
            <Footer pad={{
              "vertical": "medium"
            }}>
              <button className="form-btn">Send</button>
            </Footer>
          </Form>
        </Box>
      </Layer>
    );
  }
}
module.exports = ModalGeneral;
