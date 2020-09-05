import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-menu" color="white" size={32} />
      <Ionicons name="ios-close" color="white" size={32} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-between',
    top: 40,
    left: 0,
    paddingHorizontal: 15,
    zIndex: 10,
  },
});
