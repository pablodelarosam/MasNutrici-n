import React, {Component, PropTypes} from 'react'
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Hero from 'grommet/components/Hero';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import FormFields from 'grommet/components/FormFields';
import DivImage from '../../general_components/DivImage';
import Columns from 'grommet/components/Columns';
import SocialShare from 'grommet/components/SocialShare';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import LoginForm from 'grommet/components/LoginForm';
import CheckBox from 'grommet/components/CheckBox';
import UserIcon from 'grommet/components/icons/base/User';

import {connect} from 'react-redux'
import {signin} from '../actions/signin'

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  getData() {
    console.log(this.state);
    this.props.fetchData('http://localhost:5000/api/v0/user', this.state.name, this.state.email, this.state.password, "student");
  }
  handleName(e) {
    this.setState({name: e.target.value});
  }
  handleEmail(e) {
    this.setState({email: e.target.value});
  }
  handlePassword(e) {
    this.setState({password: e.target.value});
  }
  render() {
    return (
      <Box>
        <DivImage height="480px" img="https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2015/12/02/14/Books.jpg" gradient={true} curverd={false}/>

        <Box className="signin-container" size={{
          width: {
            max: "xxlarge"
          }
        }} direction="row">
          <Box align='center' pad='medium' margin='small' basis="1/2">
            <h1>
              MindsBoard
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </Box>

          <Box align='center' pad='medium' margin='small' basis="1/2" className="box-signin">
            <h1>
              Sign In
            </h1>
            <UserIcon/>
            <Form>
              <FormField className="formfield-login" style={{
                marginTop: 25
              }} label='Name'>
                <input type="text" value={this.state.name} onChange={this.handleName.bind(this)}/>
              </FormField>
              <FormField className="formfield-login" label='Email'>
                <input type="email" value={this.state.email} onChange={this.handleEmail.bind(this)}/>
              </FormField>
              <FormField className="formfield-login" label='Password'>
                <input type="password" value={this.state.password} onChange={this.handlePassword.bind(this)}/>
              </FormField>
              <CheckBox label='Accept termns and conditions'/>
              <button onClick={this.getData.bind(this)} type="button" className="button-s">SignIn</button>
            </Form>

          </Box>
        </Box>
        <Footer colorIndex="light-2" pad={{
          vertical: "large"
        }} align="center">
          <SocialShare type='facebook' link='https://grommet.io'/>
        </Footer>
      </Box>

    )
  }

}

SignIn.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  requesting: PropTypes.bool.isRequired

};

const mapStateToProps = (state) => {
  return {data: state.signinReducer, hasError: state.signinHasError, requesting: state.signinRequest, name: state.name, email: state.email, password: state.password};
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url, name, email, password, type) => dispatch(signin(url, name, email, password, type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
