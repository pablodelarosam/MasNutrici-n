import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

import CheckBox from 'grommet/components/CheckBox';

export class DietsPatient extends Component {
  render() {
    const arroyLeft = require('../../static/img/left.svg');
    const arroyRight = require('../../static/img/right.svg');
    const imageCalendar = require('../../static/img/blackCalendar.svg');
    const {children} = this.props;
    return (
      <Box className="boxDiet">

        <Box direction="row">
          <Box className="courses-top" pad="medium" basis="1">
            <h1>
              Dietas
            </h1>

          </Box>

        </Box>

        <List className="PatientList" selectable={true}>
          <h2>
            Desayunos
          </h2>
          <ListItem justify='between' separator='horizontal' className="table-course">

            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Opción 1
              </p>
              <p>
                2 huevos con jamón 1 reb. de pan integral Jugo de frutas de temporada.
              </p>
            </span>
            <span className='secondary'>

              <CheckBox/>

            </span>
          </ListItem>
          <ListItem justify='between' separator='horizontal' className="table-course">
            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Opción 2
              </p>
              <p>
                Cereal con fibra y leche ligth
              </p>
            </span>
            <span className='secondary'>

              <CheckBox/>

            </span>
          </ListItem>
        </List>

        <List className="PatientList " selectable={true}>
          <h2>
            Entre comidas
          </h2>
          <ListItem justify='between' separator='horizontal' className="table-course">

            <span>

              <p>
                Papaya y naranja.

              </p>
            </span>

          </ListItem>

        </List>

        <List className="PatientList " selectable={true}>
          <h2>
            Comida
          </h2>
          <ListItem justify='between' separator='horizontal' className="table-course">

            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Opción 1
              </p>
              <p>
                Carne asada acompañada de ensalada de verduras crudas o cocidas al gusto ó Pollo asado con ensalada de nopales con queso
              </p>
            </span>
            <span className='secondary'>

              <CheckBox/>

            </span>
          </ListItem>

        </List>

        <List className="PatientList " selectable={true}>
          <h2>
            Cena
          </h2>
          <ListItem justify='between' separator='horizontal' className="table-course">

            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Opción 1
              </p>
              <p>
                3 reb. de papaya o melón Líquidos
              </p>
            </span>
            <span className='secondary'>

              <CheckBox/>

            </span>
          </ListItem>
          <ListItem justify='between' separator='horizontal' className="table-course">
            <span>
              <div className="prof-picture"></div>
            </span>
            <span>
              <p className="prof-name">
                Opción 2
              </p>
              <p>
                Una rebanada de pan tostado con queso panela Una fruta (manzana, pera, mandarina o durazno)
              </p>
            </span>
            <span className='secondary'>

              <CheckBox/>

            </span>
          </ListItem>
        </List>

        <List className="PatientList " selectable={true}>
          <h2>
            Notas
          </h2>
          <ListItem justify='between' separator='horizontal' className="table-course">

            <span>

              <p>
                Se pueden intercambiar cenas por desayunos. El menú se tiene que hacer los 7 dias de la semana. Donde no hay piezas y rebanadas es libre. Se pueden utilizar sustitutos de crema para el café como Coffemate, Lemac, Lautrec, etc. Se puede cocinar con cualquier aceite, evitar el de maíz (Gloria, Mazola, Cristal) De preferencia utilice PAM. El aderezo ideal es el Mil Islas, el francés o el italiano. Evite elote, y tubérculos como la papa, camote o yuca. Y frutas como mango, plátano y uvas. Se recomienda que realice todas sus comidas. En base a los criterios de la OMS de acuerdo a su peso usted debe tomar 2 litros de líquidos al día de agua natural. Puede apoyarse con agua de jamaica, café, té, agua de limón o jugos naturales máximo ½ Litro.

              </p>
            </span>

          </ListItem>

        </List>

      </Box>
    )
  }

}
export default connect(null, {dashboard})(DietsPatient)
