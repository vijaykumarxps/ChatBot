import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, Image, Text, View, ImageBackground} from 'react-native';

import bgSrc from '../images/wallpaper.png';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Wallpaper extends Component {
  render() {
    return ( 
      <ImageBackground style={styles.background} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT
  }
});
