import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ headerContents='Cryptocurrency Tracker' }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.header}>
      {headerContents}
    </Text>
  </View>
);

Header.propTypes = {
  headerContents: PropTypes.string
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    marginTop: 55,
    alignItems: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default Header;