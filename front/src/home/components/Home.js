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

        const imageIdea = require('../../static/img/idea.svg');
        const imageTeach = require('../../static/img/teach.svg');
        const imageWorld = require('../../static/img/world.svg');

        return (
            <Box className="home">
                <DivImage height="480px" img="https://wallpaperscraft.com/image/students_boys_girls_study_friends_80723_3480x2362.jpg" gradient={true} curverd={false}/>

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
                            Be On Demand
                        </Heading>
                        <div className="inline-opts">
                            <button>I'm a teacher</button>
                            <button>I'm a professor</button>
                        </div>

                    </Box>

                    <Box style={{
                        marginTop: 50
                    }} size={{
                        width: {
                            max: "xxlarge"
                        }
                    }} direction="row">
                        <Box pad="medium" basis="1/2">
                            <Headline size="small" strong={true} margin="medium">
                                What's MIND·BOARD?
                            </Headline>
                            <Paragraph margin="none">
                                MIND·BOARD is an Online Learning Platform, which is based on the sharing economy. We strongly believe that many people have awesome teaching skills with great expertise on many fields; and also we know that there are many people around the world who wants to access to reliable knowledge.
                            </Paragraph>
                        </Box>
                        <Box pad="medium" basis="1/2">
                            <Image src={imageIdea} size='small'/>
                        </Box>
                    </Box>
                    <Box size={{
                        width: {
                            max: "xxlarge"
                        }
                    }} direction="row">
                        <Box pad="medium" basis="1/2">
                            <Image src={imageTeach} size="small"/>
                        </Box>
                        <Box pad="medium" basis="1/2">
                            <Headline size="small" strong={true} margin="medium">
                                What we do?
                            </Headline>
                            <Paragraph margin="none">
                                MIND·BOARD provides a platform where people can share and monetize their knowledge whereas they teach to students from all around the world.
                            </Paragraph>
                        </Box>
                    </Box>
                    <Box size={{
                        width: {
                            max: "xxlarge"
                        }
                    }} direction="row">
                        <Box pad="medium" basis="1/2">
                            <Headline size="small" strong={true} margin="medium">
                                What we want?
                            </Headline>
                            <Paragraph margin="none">
                                MIND·BOARD wants a globaly accesible, evolving and custom education; removing walls and walking through any border to share knowledge across the world; because knowledge has not limits.
                            </Paragraph>
                        </Box>
                        <Box pad="medium" basis="1/2">
                            <Image src={imageWorld} size="small"/>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <DivImage height="250px" img="https://wallpaperscraft.com/image/students_boys_girls_study_friends_80723_3480x2362.jpg" gradient={false}/>
                    <Box align="center" pad={{
                        vertical: "large",
                        between: "small"
                    }}>
                        <Box style={{
                            marginTop: -250,
                            zIndex: 99
                        }} pad={{
                            horizontal: "large"
                        }} align="center" textAlign="right" size={{
                            "width": {
                                "max": "xxlarge"
                            }
                        }}>
                            <Heading tag="h2" strong={true}>
                                Be Smart, Learn Different
                            </Heading>
                        </Box>

                    </Box>
                </Box>
                <Box align="center" pad={{
                    vertical: "large",
                    between: "small"
                }}>
                    <Form className="contact-form">
                        <Header>
                            <Heading tag="h3" strong={true}>
                                Contact us
                            </Heading>
                        </Header>
                        <FormFields>
                            <FormField label='Name'>
                                <TextInput/>
                            </FormField>
                            <FormField label='Email'>
                                <TextInput/>
                            </FormField>
                            <FormField label='Message'>
                                <TextInput/>
                            </FormField>
                        </FormFields>
                        <Footer align="center" pad={{
                            "vertical": "medium"
                        }}>
                        <div className="inline-opts center">
                            <button>Send</button>
                        </div>
                        </Footer>
                    </Form>
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
