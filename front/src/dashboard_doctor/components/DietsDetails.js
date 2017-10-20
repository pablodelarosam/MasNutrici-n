
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Form from 'grommet/components/Form';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import CheckBox from 'grommet/components/CheckBox';
import DivImage from '../../general_components/DivImage';


export class DietDetails extends Component {
  render() {
    const {children} = this.props;
    const imageIdea = require('../../static/img/news.svg');
    const imageWorld = require('../../static/img/world.svg');
    const imageFace = require('../../static/img/facw.svg');
    return (

      <Box className="doctorPatiensImage">
      <div >
        <DivImage height="480px" img="https://institutonutrigenomica.com/wp-content/uploads/2016/05/presencial-profesionales-nutricion.png" gradient={false} curverd={false}/>
        </div>
        <div className="cardDoctor">
        <div className="inline-session-top-imagePatients">
      <Image src={imageIdea} size='small'/>
        <div className="inline-session-top ">

        </div>
        </div>
          <h3 margin="none">
            Dieta 2
          </h3>
          <Paragraph margin="none">
            Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor Lorem impsum dolor
          </Paragraph>
        </div>

        <div className="addBlock">
        <button> <a> +Agregar bloque </a> </button>
        </div>

        <Box className="box-classinfo-leftPatient" align='center' pad='medium' margin='small' colorIndex='light-2'>
        <div>
          <h2> Desayuno </h2>
          </div>
            <Box style={{

            }} size={{
                width: {
                    max: "xxlarge"
                }
            }} direction="row">

                <Box pad="medium" basis="">

                  <div className="review-picture">

                  </div>

                </Box>

                <Box className="box-right-info" pad="medium" basis="1/2">


                  <h4> Opción 1 </h4>
                    <h4 className="macros-p"> 4 macros </h4>



                    <Paragraph margin="none">
                      Lorem Ipsum dolor sit arem Lorem Ipsum dolor sit arem Lorem Ipsum dolor sit arem Lorem Ipsum dolor sit arem Lorem Ipsum dolor sit arem
                    </Paragraph>


                </Box>

            </Box>
        </Box>


        <Box className="box-classinfo-leftPatient" align='center' pad='medium' margin='small' colorIndex='light-2'>
        <div>
          <h2> Comida </h2>
          </div>
            <Box style={{

            }} size={{
                width: {
                    max: "xxlarge"
                }
            }} direction="row">

                <Box pad="medium" basis="">

                  <div className="review-picture">

                  </div>

                </Box>

                <Box className="box-right-info" pad="medium" basis="1/2">


                  <h4> Opción 1 </h4>
                    <h4 className="macros-p"> 4 macros </h4>



                    <Paragraph margin="none">
                      Lorem Ipsum dolor sit arem Lorem Ipsum dolor sit arem Lorem Ipsum dolor sit arem Lorem Ipsum dolor sit arem Lorem Ipsum dolor sit arem
                    </Paragraph>


                </Box>

            </Box>
        </Box>

      </Box>

    )
  }

}
export default connect(null, {dashboard})(DietDetails)
