import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Columns from 'grommet/components/Columns';
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
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Diets from '../../general_dash/timetableEvents.js';
import {Link} from 'react-router';
import ModalGeneral from '../../general_components/ModalGeneral.js';
import serializeForm from 'form-serialize';

export class DietsDoctor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openLayer: false,
      change: false,
      diet: {
        "id": 1000,
        "title": "",
        "meals": [
          {
            "title": "Desayuno",
            "options": [""]
          }, {
            "title": "Entre Comidas",
            "options": [""]
          }, {
            "title": "Comidas",
            "options": [""]
          }, {
            "title": "Cena",
            "options": [""]
          }
        ]
      }
    };
  }

  onOpenLayer(e) {
    this.setState({openLayer: true});
  }

  onCloseLayer(e) {
    this.setState({openLayer: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    const values = serializeForm(e.target, {hash: true});
    var new_meal = {
      "id": 4,
      "title": values["title"],
      "meals": [
        {
          "title": "Desayuno",
          "options": [values["breakfast"]]
        }, {
          "title": "Entre Comidas",
          "options": [values["lunch"]]
        }, {
          "title": "Comidas",
          "options": [values["late_lunch"]]
        }, {
          "title": "Cena",
          "options": [values["dinner"]]
        }
      ]

    }

    Diets.push(new_meal);
    this.onCloseLayer();
  }

  removeDiet(pos) {
    Diets.pop();
    this.setState({change: true});
  }

  render() {
    const {children} = this.props;
    const imageIdea = require('../../static/img/cereal.svg');

    var layerNode;
    if (this.state.openLayer) {
      layerNode = (
        <ModalGeneral title="Dieta" showClosed={true} closeDialog={() => this.onCloseLayer()} handleSubmit={(e) => this.handleSubmit(e)}>
          <div className="formfield-tutor">

            <FormField label='Nombre de la Dieta'>
              <TextInput name="title" defaultValue={this.state.diet.title}/>
            </FormField>
            <FormField label='Desayuno'>
              <TextInput name="breakfast" defaultValue={this.state.diet.meals[0].options[0]}/>
            </FormField>
            <FormField label='Entre Comidas'>
              <TextInput name="lunch" defaultValue={this.state.diet.meals[1].options[0]}/>
            </FormField>
            <FormField label='Comida'>
              <TextInput name="late_lunch" defaultValue={this.state.diet.meals[2].options[0]}/>
            </FormField>
            <FormField label='Cena'>
              <TextInput name="dinner" defaultValue={this.state.diet.meals[3].options[0]}/>
            </FormField>
          </div>
        </ModalGeneral>
      );
    }
    return (
      <Box>
        <div className="inline-session">
          <h1>Dietas</h1>

        </div>
        <button className="adddiet" onClick={() => this.onOpenLayer()}>
          + Agregar dieta
        </button>

        <Box size='medium' direction="row" justify='center'>
          {Diets.map((diets, i) => (

            <Box align='center' pad='medium' margin='small' key={i}>
              <div className="card">
                <div className="inline-session-top-image">
                  <img src={imageIdea} width="100px"/>

                </div>
                <h3>
                  {diets.title}
                </h3>

                <div className="inline-session-top ">
                  <button type="button" className="seeButton" href="/dashboard/doctor/detalles">
                    <Link to={`/dashboard/doctor/detalles/${diets.id}`} activeClassName="active">Ver</Link>
                  </button>
                  <button type="button" className="removeButton" onClick={() => this.removeDiet(i)}>Eliminar</button>
                </div>

              </div>
            </Box>
          ))}

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

export default connect(mapStateToProps, mapDispatchToProps)(DietsDoctor)
