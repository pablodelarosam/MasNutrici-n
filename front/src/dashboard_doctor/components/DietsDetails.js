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
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Diets from '../../general_dash/timetableEvents.js';

export class DietDetails extends Component {
  render() {
     console.log("Props", this.props.params.id)
     var posDiet = Diets[this.props.params.id];
     console.log("DIETA", posDiet.meals);
    const {children} = this.props;
    const imageIdea = require('../../static/img/news.svg');
    const imageWorld = require('../../static/img/world.svg');
    const imageFace = require('../../static/img/facw.svg');
    return (

      <Box className="doctorPatiensImage">
        <div >
          <DivImage height="480px" img="https://institutonutrigenomica.com/wp-content/uploads/2016/05/presencial-profesionales-nutricion.png" gradient={false} curverd={false}/>
        </div>
        <Box className="boxDiet">

          <Box direction="row">
            <Box className="courses-top" pad="medium" basis="1">
              <h1>
                {posDiet.title}
              </h1>

            </Box>

          </Box>

          {posDiet.meals.map((meals) => (
<Box>
            <List className="PatientList" selectable={true}>
              <h2>
                {meals.title}
              </h2>

              {meals.options.map((option) => (

              <Box>
              <ListItem justify='between' separator='horizontal' className="table-course">
                <span>
                  <p className="prof-name">
            
                  </p>
                  <p>
                    {option}
                  </p>
                </span>

              </ListItem>
              </Box>
              ))}


            </List>
</Box>


))}



        </Box>

      </Box>

    )
  }

}
export default connect(null, {dashboard})(DietDetails)
