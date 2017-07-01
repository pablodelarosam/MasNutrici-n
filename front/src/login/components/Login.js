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
import Section from 'grommet/components/Section';

import {connect} from 'react-redux'
import {login} from '../actions/login'
import { browserHistory } from 'react-router'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  getData() {
    console.log("PROPPS", this.props);
    this.props.fetchData('http://localhost:5000/api/v0/login', this.state.email, this.state.password);
  }
  handleEmail(e) {
    this.setState({email: e.target.value});
  }
  handlePassword(e) {
    this.setState({password: e.target.value});
  }
  render() {
const imageFace = require('../../static/img/facw.svg');
    return (
      <Box>
      <Section className="sectionLogin">
  {<h1> +Nutrición </h1> }
</Section>
        <DivImage height="480px" img="https://institutonutrigenomica.com/wp-content/uploads/2016/05/presencial-profesionales-nutricion.png" gradient={false} curverd={false}/>
  <Box direction="row">
    <Box pad="medium" basis="1/2">
<Box className="textLoginIntro">
    <h1> +Nutrición </h1>

<p>  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.  </p>
</Box>
    </Box>

    <Box pad="medium" basis="1/2">
    <Box className="box-login" align='center' pad='medium' margin='small' colorIndex='light-2'>
      <h1>
        Ingresar
      </h1>
    <Image src={imageFace} size="small"/>
      <Form>
        <FormField className="textField-login" style={{
          marginTop: 25
        }} label='Email'>
          <input type="email" value={this.state.email} onChange={this.handleEmail.bind(this)}/>
        </FormField>
        <FormField className="textField-login" label='Password'>
          <input type="password" value={this.state.password} onChange={this.handlePassword.bind(this)}/>
        </FormField>
        <button onClick={this.getData.bind(this)} type="button" className="button-s">Ingresar</button>
      </Form>
    </Box>

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

Login.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  requesting: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  // Go to dashboard
  var data = state.loginReducer;
  if (data["status"] == 200 && data["code"] == 1) {
    var route = data["user"]["type"] == "student"
      ? "student"
      : "teacher";
      browserHistory.push('/signin')
  } else {
    console.log("ERROR");
  }
  return {data: state.loginReducer, hasError: state.loginHasError, requesting: state.loginRequest};
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url, email, password) => dispatch(login(url, email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
