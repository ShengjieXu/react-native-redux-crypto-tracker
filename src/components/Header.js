import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ header='Cryptocurrency Tracker' }) => (
  <View style={styles.container}>
    <Text>{header}</Text>
  </View>
);

Header.propTypes = {
  header: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Header;