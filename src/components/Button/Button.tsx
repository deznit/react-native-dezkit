import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.content}>
        <Text style={styles.label}>Hello Welcome</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    minWidth: 60,
    backgroundColor: '#dc3545',
    borderRadius: 6,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginHorizontal: 16,
    marginVertical: 8,
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
});
