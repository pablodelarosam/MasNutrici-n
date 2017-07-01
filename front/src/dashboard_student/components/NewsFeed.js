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

export class NewsFeedStudent extends Component {
  render() {
    const {children} = this.props;
    const imageIdea = require('../../static/img/idea.svg');
    const imageTeach = require('../../static/img/teach.svg');
    return (
      <Box>
        <h1>Pacientes</h1>
        <SearchInput className="searchInp" placeHolder='Buscar'
        suggestions={undefined} />

        <Table className="tableProfile">
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
              Últ. Visita
              </th>
              <th>
              Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>
              Gerardo
              </td>
              <td>
                23
              </td>
              <td className='secondary'>
                65 kg
              </td>
              <td className='secondary'>
                22/10/2017
              </td>

              <td className='secondary actionsection'>
              <div className="inline-session-topdoc ">
            <button type="button" className="seeButton">Ver</button>
              <button type="button" className="removeButton">Eliminar</button>
              </div>
              </td>
            </TableRow>
            <TableRow>
              <td>
                Luis
              </td>
              <td>
                22
              </td>
              <td className='secondary'>
                63 kg
              </td>

              <td className='secondary'>
                22/10/2017
              </td>

              <td className='secondary'>
              <div className="inline-session-topdoc ">
            <button type="button" className="seeButton">Ver</button>
              <button type="button" className="removeButton">Eliminar</button>
              </div>
              </td>
            </TableRow>

            <TableRow>
              <td>

              </td>
              <td>

              </td>
              <td className='secondary'>

              </td>

              <td className='secondary'>

              </td>

              <td className='secondary'>

              </td>
            </TableRow>

            <TableRow>
              <td>

              </td>
              <td>

              </td>
              <td className='secondary'>

              </td>

              <td className='secondary'>

              </td>

              <td className='secondary'>

              </td>
            </TableRow>

            <TableRow>
              <td>

              </td>
              <td>

              </td>
              <td className='secondary'>

              </td>

              <td className='secondary'>

              </td>

              <td className='secondary'>

              </td>
            </TableRow>

            <TableRow>
              <td>

              </td>
              <td>

              </td>
              <td className='secondary'>

              </td>

              <td className='secondary'>

              </td>

              <td className='secondary'>

              </td>
            </TableRow>


          </tbody>
        </Table>

      </Box>
    )
  }

}
export default connect(null, {dashboard})(NewsFeedStudent)
