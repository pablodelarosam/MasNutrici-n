import React, {Component} from 'react'
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

export class Home extends Component {

    render() {

        const imageDoctor = require('../../static/img/doctor.svg');
        const imageCarrot = require('../../static/img/carrot.svg');
        const imageScale = require('../../static/img/scale.svg');
        const imageMail = require('../../static/img/email.svg');
        const imagePhone = require('../../static/img/hand.svg');
        const imageMap = require('../../static/img/map.svg');

        return (
            <Box className="home">

                <DivImage height="480px" img="https://orangecityiowa.com/wp-content/uploads/2016/04/healtyh1.jpg" gradient={true} curverd={false}/>

                <Box align="center" pad={{
                    vertical: "large",
                    between: "small"
                }} style={{
                    marginBottom: 100
                }}>



                    <Box style={{
                        marginTop: -220,
                        zIndex: 99
                    }} pad={{
                        horizontal: "large"
                    }} align="center" textAlign="center" size={{
                        "width": {
                            "max": "xxlarge"
                        }
                    }}>



                        <Heading tag="h1" strong={true}>
                            +Nutrición
                        </Heading>
                        <h2> Slogan </h2>
                    </Box>
                 <button className="loginButton"> <a href="/login"> Login </a> </button>
                    <Box style={{
                        marginTop: 50
                    }} size={{
                        width: {
                            max: "xxlarge"
                        }
                    }} direction="row">
                        <Box className="top-home-container" pad="medium" basis="1/2">
                            <Headline size="small" strong={true} margin="medium">
                                Misión
                            </Headline>
                            <Paragraph margin="none">
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            </Paragraph>
                        </Box>

                        <Box className="top-home-container" pad="medium" basis="1/2">
                            <Headline size="small" strong={true} margin="medium">
                                Visión
                            </Headline>
                            <Paragraph margin="none">
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            </Paragraph>
                        </Box>



                    </Box>
                    <Box className="middle-home-container">
                    <Box size={{
                        width: {
                            max: "xxlarge"
                        }
                    }} direction="row">
                        <Box pad="medium" basis="1/2">
                            <Image src={imageCarrot} size="small"/>
                        </Box>
                        <Box pad="medium" basis="1/2">

                            <Paragraph margin="none">
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            </Paragraph>
                        </Box>
                    </Box>

                    <Box size={{
                        width: {
                            max: "xxlarge"
                        }
                    }} direction="row">
                        <Box pad="medium" basis="1/2">
                        <Paragraph margin="none">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        </Paragraph>

                        </Box>
                        <Box pad="medium" basis="1/2">
                              <Image src={imageScale} size="small"/>

                        </Box>
                    </Box>

                    <Box size={{
                        width: {
                            max: "xxlarge"
                        }
                    }} direction="row">
                        <Box pad="medium" basis="1/2">
                            <Image src={imageDoctor} size="small"/>
                        </Box>
                        <Box pad="medium" basis="1/2">

                            <Paragraph margin="none">
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            </Paragraph>
                        </Box>
                    </Box>
                    </Box>


                </Box>
                <Box>
                    <DivImage height="250px" img="" gradient={false}/>
                    <Box className="contact-home-container" align="center" pad={{
                        vertical: "large",
                        between: "small"
                    }}>
                        <Box style={{
                            marginTop: -350,
                            zIndex: 99
                        }} pad={{
                            horizontal: "large"
                        }} align="center" textAlign="right">
                            <Heading  strong={true}>
                                Contacto
                            </Heading>

                            <Box className="contact-info"  direction="row">

                                <Box pad="medium" basis="1/4">

                                      <Box  direction="row">
                                          <Box className="icon-width" pad="medium" basis="1/2">
                                          <Image src={imageMail} size="small"/>
                                          </Box>
                                          <Box pad="medium" basis="1/2">
                                          <Paragraph margin="none">
                                            fabian@gmail.com
                                          </Paragraph>
                                          </Box>

                                      </Box>
                                </Box>

                                <Box pad="medium" basis="1/4">

                                      <Box  direction="row">
                                          <Box className="icon-width" pad="medium" basis="1/2">
                                          <Image src={imagePhone} size="small"/>
                                          </Box>
                                          <Box pad="medium" basis="1/2">
                                          <Paragraph margin="none">
                                            Tel: 636 87 41
                                          </Paragraph>

                                          <Paragraph margin="none">
                                            Movil: 2223330155
                                          </Paragraph>
                                          </Box>

                                      </Box>
                                </Box>

                                <Box pad="medium" basis="1/4">

                                      <Box  direction="row">
                                          <Box className="icon-width" pad="medium" basis="1/2">
                                        <Image src={imageMap} size="small"/>
                                          </Box>
                                          <Box pad="medium" basis="1/2">
                                          <Paragraph margin="none">
                                          Privada 10 B Poniente No.2921 Col San Alejandro Puebla, Pue.
                                          </Paragraph>
                                          </Box>

                                      </Box>
                                </Box>



                            </Box>






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
export default Home;
