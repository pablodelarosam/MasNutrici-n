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
        <Box className="boxDiet">

          <Box direction="row">
            <Box className="courses-top" pad="medium" basis="1">
              <h1>
                W1
              </h1>

            </Box>

          </Box>

          <List className="PatientList" selectable={true}>
            <h2>
              Desayunos
            </h2>
            <ListItem justify='between' separator='horizontal' className="table-course">
              <span>
                <p className="prof-name">
                  Opción 1
                </p>
                <p>
                  2 reb. de pan integral, mermelada Light o cajeta al gusto Liquidos
                </p>
              </span>

            </ListItem>
            <ListItem justify='between' separator='horizontal' className="table-course">

              <span>
                <p className="prof-name">
                  Opción 2
                </p>
                <p>
                  1 plato de cereal con fibra Leche Light Sustituto de azúcar Liquidos
                </p>
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
                  Jícamas o pepinos con limón y chile
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

                <p>
                  Caldos o sopa de verduras Carne de pollo, res o pescado con papas y verduras guisadas (evitar alimentos fritos) Ensaladas de verduras crudas o cocidas al gusto. Puede utilizar aderezos Líquidos

                </p>
              </span>

            </ListItem>

          </List>

          <List className="PatientList " selectable={true}>
            <h2>
              Cena
            </h2>
            <ListItem justify='between' separator='horizontal' className="table-course">

              <span>

                <p>
                  Carne de cualquier tipo con ensalada o pozole sin granos o tacos sin tortillas Líquidos

                </p>
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
                  Se pueden intercambiar cenas por desayunos rebanadas es libre. El menú se tiene que hacer los 7 días de la semana Donde no hay piezas y rebanadas es libre Se pueden utilizar sustitutos de crema para el café como Coffemate, Lemac, Lautrec, etc. Se puede cocinar con cualquier aceite, evitar el de maíz (Gloria, Mazola, Cristal) De preferencia utilice PAM. El aderezo ideal es el Mil Islas, el francés o el italiano. Evite elote, y tubérculos como la papa, camote o yuca. Y frutas como mango, plátano y uvas. Se recomienda que realice todas sus comidas. En base a los criterios de la OMS de acuerdo a su peso usted debe tomar 2 litros de líquidos al día de agua natural. Puede apoyarse con agua de jamaica, café, té, agua de limón o jugos naturales máximo ½ Litro.

                </p>
              </span>

            </ListItem>

          </List>

        </Box>

      </Box>

    )
  }

}
export default connect(null, {dashboard})(DietDetails)
