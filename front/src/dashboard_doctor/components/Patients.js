import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';

import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import SearchInput from 'grommet/components/SearchInput';
import Section from 'grommet/components/Section';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Select from 'grommet/components/Select';
import ModalGeneral from '../../general_components/ModalGeneral.js';
import serializeForm from 'form-serialize';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';

export class Patients extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openLayer: false,
      user: {},
      profile: {
        "full_name": "",
        "email": "",
        "age": "",
        "height": "",
        "initial_weight": "",
        "ideal_weight": "",
        "children": "",
        "diseases": "",
        "surgery": "",
        "medication": "",
        "alergies": "",
        "smokes": "",
        "drinker": "",
        "gender": "",
        "password": ""
      },
      selected_patient: ""
    };
  }

  onOpenLayer() {
    this.setState({openLayer: true});

  }

  onCloseLayer() {
    this.setState({openLayer: false});

  }

  componentDidMount() {
    // Add stored user
    this.setState({
      'user': JSON.parse(sessionStorage.getItem('user'))
    }, () => {
      this.props.getPatients(this.state.user.id);
    })

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile_has_change) {
      this.props.getPatients(this.state.user.id);
    }
  }

  removePatient(id) {
    this.props.removeProfile(id);
  }

  createPatient() {
    this.onOpenLayer();
    this.setState({
      profile: {
        "full_name": "",
        "email": "",
        "age": "",
        "height": "",
        "initial_weight": "",
        "ideal_weight": "",
        "children": "",
        "diseases": "",
        "surgery": "",
        "medication": "",
        "alergies": "",
        "smokes": "",
        "drinker": "",
        "gender": "",
        "password": ""
      },
      selected_patient: ""
    })
  }

  checkProfile(patient) {
    this.onOpenLayer();
    this.setState({"profile": patient, "selected_patient": patient.id})
  }

  handleSubmit(e) {
    e.preventDefault();
    const values = serializeForm(e.target, {hash: true});

    if (this.state.selected_patient !== "") {
      this.props.updateProfile(this.state.selected_patient, values);
    } else {
      values['role'] = "patient";
      values['doctor_id'] = this.state.user.id;
      this.props.createProfile(values);
    }

    this.onCloseLayer();
  }

  render() {
    const {children} = this.props;
    const imageIdea = require('../../static/img/idea.svg');
    const imageTeach = require('../../static/img/teach.svg');

    const patients = this.props.patients !== undefined
      ? this.props.patients
      : [];

    var layerMessage;
    if (this.state.openLayer) {
      layerMessage = (
        <ModalGeneral title="Perfil" showClosed={true} closeDialog={() => this.onCloseLayer()} handleSubmit={(e) => this.handleSubmit(e)}>
          <div className="formfield-tutor">
            <FormField className="field" label='Nombre Completo'>
              <TextInput name="full_name" defaultValue={this.state.profile.full_name}/>
            </FormField>
            <FormField className="field" label='Email'>
              <TextInput name="email" defaultValue={this.state.profile.email}/>
            </FormField>
            <FormField className="field" label='Password'>
              <TextInput name="password" defaultValue={this.state.profile.password}/>
            </FormField>
          </div>
          <div className="formfield-tutor">
            <FormField className="field" label='Edad'>
              <TextInput name="age" defaultValue={this.state.profile.age}/>
            </FormField>
            <FormField className="field" label='Estature'>
              <TextInput name="height" defaultValue={this.state.profile.height}/>
            </FormField>
          </div>

          <div className="formfield-tutor">
            <FormField className="field" label='Peso Inicial'>
              <TextInput name="initial_weight" defaultValue={this.state.profile.initial_weight}/>
            </FormField>
            <FormField className="field" label='Peso Ideal'>
              <TextInput name="ideal_weight" defaultValue={this.state.profile.ideal_weight}/>
            </FormField>
          </div>
          <div className="formfield-tutor">
            <FormField className="field" label='Hijos'>
              <TextInput name="children" defaultValue={this.state.profile.children}/>
            </FormField>
            <FormField className="field" label='Fuma'>
              <TextInput name="smokes" defaultValue={this.state.profile.smokes}/>
            </FormField>
            <FormField className="field" label='Toma Alcohol'>
              <TextInput name="drinker" defaultValue={this.state.profile.drinker}/>
            </FormField>
          </div>
          <FormField className="bio-field" label='Enfermedades'>
            <TextInput name="diseases" defaultValue={this.state.profile.diseases}/>
          </FormField>
          <FormField className="bio-field" label='Cirujias'>
            <TextInput name="surgery" defaultValue={this.state.profile.surgery}/>
          </FormField>
          <FormField className="bio-field" label='Medicamentos'>
            <TextInput name="medication" defaultValue={this.state.profile.medication}/>
          </FormField>
          <FormField className="bio-field" label='Alergias'>
            <TextInput name="alergies" defaultValue={this.state.profile.alergies}/>
          </FormField>

        </ModalGeneral>
      );
    }

    return (
      <Box>
        <h1>Pacientes</h1>
        <button onClick={() => this.createPatient()}>
          Agregar Paciente
        </button>
        <Table className="tableProfile" selectable={true}>
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Edad
              </th>
              <th>
                Peso
              </th>
              <th>
                Estatura
              </th>
              <th>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => <TableRow key={patient.id}>
              <td>
                {patient.full_name}
              </td>
              <td>
                {patient.age}
              </td>
              <td>
                {patient.initial_weight}
              </td>
              <td>
                {patient.height}
              </td>
              <td className='secondary actionsection'>
                <div className="inline-session-topdoc ">
                  <button type="button" className="seeButton" onClick={() => this.checkProfile(patient)}>Ver</button>
                  <button type="button" className="removeButton" onClick={() => this.removePatient(patient.id)}>Eliminar</button>
                </div>
              </td>
            </TableRow>)}

            <TableRow style={{
              "visibility": "hidden"
            }}>
              <td></td>
              <td></td>
              <td className='secondary'></td>
              <td className='secondary'></td>

              <td className='secondary actionsection'>
                <div className="inline-session-topdoc ">
                  <button type="button" className="removeButton">Eliminar</button>

                </div>
              </td>
            </TableRow>

          </tbody>
        </Table>
        {layerMessage}
      </Box>
    )
  }

}
export default Patients
