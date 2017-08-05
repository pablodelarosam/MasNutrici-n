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
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Select from 'grommet/components/Select';

export class ProfilePatient extends Component {
  render() {
    const {children} = this.props;
    const imageIdea = require('../../static/img/idea.svg');
    const imageWorld = require('../../static/img/world.svg');
    const imageFace = require('../../static/img/facw.svg');
    return (
      <Box className="profile-patient">
        <Box className="box-profile-top " align='center' pad='medium' margin='small' colorIndex='light-2'>
          <Image src={imageFace} size="small"/>
          <h1 className="head-profile-top">
            Felipe
          </h1>
          <Box className="patient-info" style={{}} size={{
            width: {
              max: "xxlarge"
            }
          }} direction="row">
            <Box pad="medium" basis="1/2">

              <Paragraph margin="none">
                22 años
              </Paragraph>

              <Paragraph margin="none" className="paragraph-box-top">
                65 kg
              </Paragraph>

            </Box>
            <Box pad="medium" basis="1/2">

              <Paragraph margin="none" className="password">
                contacto.craftcode@gmail.com
              </Paragraph>

              <Paragraph margin="none" className="paragraph-box-top">
                Password
              </Paragraph>

            </Box>
          </Box>
        </Box>

        <Box className="box-profile-midle " align='left' pad='medium' margin='small' colorIndex='light-2'>
          <h3>
            Dieta
          </h3>

          <Box className="">

            <Select className="selectDiet" placeHolder='Elegir Dieta' options={[
              'one',
              'two',
              'three',
              'four',
              'five',
              'six',
              'seven',
              'eight'
            ]} value={undefined}/>
            <h3>
              Notas
            </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            </p>

          </Box>

        </Box>

        <Table className="tableProfile">
          <thead>
            <tr>
              <th>
                Cm
              </th>
              <th>
                Masa
              </th>
              <th>
                Grasa
              </th>
              <th>
                Peso
              </th>
              <th>
                Últ. Visita
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>
                80
              </td>
              <td>
                80
              </td>
              <td className='secondary'>
                23
              </td>
              <td className='secondary'>
                65 kg
              </td>

              <td className='secondary'>
                20/10/2017
              </td>
            </TableRow>
            <TableRow>
              <td>
                90
              </td>
              <td>
                100
              </td>
              <td className='secondary'>
                22
              </td>

              <td className='secondary'>
                63 kg
              </td>

              <td className='secondary'>
                22/10/2017
              </td>
            </TableRow>

          </tbody>
        </Table>

      </Box>

    )
  }

}
export default connect(null, {dashboard})(ProfilePatient)
