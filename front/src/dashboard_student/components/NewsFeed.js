import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {dashboard} from '../actions/dashboard'
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';

import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';


export class NewsFeedStudent extends Component {
  render() {
    const {children} = this.props;
    const imageIdea = require('../../static/img/idea.svg');
    const imageTeach = require('../../static/img/teach.svg');
    return (
      <Box>
        <h1>NewsFeed</h1>
        <div>
          <div className="card">
            <Image src={imageIdea} size='small'/>
            <Paragraph margin="none">
              20/05/2017
            </Paragraph>
            <Paragraph margin="none">
              MIND·BOARD is an Online Learning Platform, which is based on the sharing economy. We strongly believe that many people have awesome teaching skills with great expertise on many fields; and also we know that there are many people around the world who wants to access to reliable knowledge.
            </Paragraph>
          </div>
          <div className="card">
            <Image src={imageTeach} size='small'/>
            <Paragraph margin="none">
              20/05/2017
            </Paragraph>
            <Paragraph margin="none">
              MIND·BOARD is an Online Learning Platform, which is based on the sharing economy. We strongly believe that many people have awesome teaching skills with great expertise on many fields; and also we know that there are many people around the world who wants to access to reliable knowledge.
            </Paragraph>
          </div>
        </div>
      </Box>
    )
  }

}
export default connect(null, {dashboard})(NewsFeedStudent)
