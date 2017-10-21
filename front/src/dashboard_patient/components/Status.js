import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Image from 'grommet/components/Image';
import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import Paragraph from 'grommet/components/Paragraph';
import Columns from 'grommet/components/Columns';
import Anchor from 'grommet/components/Anchor';
import Chart from 'react-d3-core';
import {LineChart} from 'react-d3-basic';
import {Line} from 'react-chartjs';

export class Status extends Component {

  render() {
    const imageCalendar = require('../../static/img/blackCalendar.svg');
    const imageMass = require('../../static/img/strong.svg');
    const imageRule = require('../../static/img/ruler.svg');
    const imageFat = require('../../static/img/cauldron.svg');

    const {children} = this.props;

    const data = [
        {
          "name": "Darron Weissnat IV",
          "BMI": 20.72,
          "age": 39,
          "birthday": "2005-01-03T00:00:00.000Z",
          "city": "East Russel",
          "married": false,
          "index": 0
        }, {
          "name": "Pablo Ondricka",
          "BMI": 19.32,
          "age": 38,
          "birthday": "1974-05-13T00:00:00.000Z",
          "city": "Lake Edytheville",
          "married": false,
          "index": 1
        }, {
          "name": "Mr. Stella Kiehn Jr.",
          "BMI": 16.8,
          "age": 34,
          "birthday": "2003-07-25T00:00:00.000Z",
          "city": "Lake Veronicaburgh",
          "married": false,
          "index": 2
        }, {
          "name": "Lavon Hilll I",
          "BMI": 20.57,
          "age": 12,
          "birthday": "1994-10-26T00:00:00.000Z",
          "city": "Annatown",
          "married": true,
          "index": 3
        }
      ]

      const chartSeries = [
          {
            field: 'age',
            name: 'Age',
            color: '#ff7f0e',
            style: {
              "stroke-width": 2,
              "stroke-opacity": .2,
              "fill-opacity": .2
            }
          }
        ]
      const x = function(d) {
          return d.index;
      }


      const charData = {
        "datasets": [
          {
            "data": [77, 72, 70, 85, 80,75, 75],
            "fillColor": "rgba(7, 55, 200, 0.3)",
            "label": "Pesos",
            "pointColor": "rgba(220,220,220,1)",
            "pointHighlightFill": "#0040ff",
            "pointHighlightStroke": "rgba(220,220,220,1)",
            "pointStrokeColor": "#fff",
            "strokeColor": "rgba(220,220,220,1)"
          }
        ],
        "labels": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
      }

      return (
        <Box align="center" className="status">
          <h1>Estado</h1>
          <Box direction="row">
            <Box className="box-right-info" pad="medium" basis="1/4">
              <p>
                Última visita
              </p>
            </Box>
            <Box className="box-right-info" pad="medium" basis="1/4">
              <p>
                20/10/2017
              </p>
            </Box>
            <Box className="box-right-info" pad="medium" basis="1/4">
              <Image style={{
                width: 40
              }} src={imageCalendar} size="small"/>
            </Box>
          </Box>

          <Box className="status-info" direction="row">
            <Box className="box-right-info" pad="medium" basis="1/4">
              <div className="card-status">
              <Image src={imageFat} size='small'/>
                <h1 className="headstatus">
                  Grasa
                </h1>
                <h2 className="headstatus">
                  200
                </h2>
              </div>
            </Box>

            <Box className="box-right-info" pad="medium" basis="1/4">
              <div className="card-status">
              <Image src={imageMass} size='small'/>
                <h1 className="headstatus">
                  Masa
                </h1>
                <h2 className="headstatus">
                  200
                </h2>
              </div>
            </Box>

            <Box className="box-right-info" pad="medium" basis="1/4">
              <div className="card-status">
              <Image src={imageRule} size='small'/>

                <h1 className="headstatus">
                  Cm
                </h1>
                <h2 className="headstatus">
                  200
                </h2>
              </div>
            </Box>

          </Box>

          <div className="card-graphic">

            <h1 className="headstatus">Peso</h1>
            <Line width={700} height={300} data={charData} />
          </div>

        </Box>

      )
    }

  }
  export default connect(null, {dashboard})(Status)
