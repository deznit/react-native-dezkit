import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { CustomTheme } from '../components/CustomTheme';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Buttons')}
        style={styles.viewContainers}
      >
        <Text style={styles.textStyle}> Buttons </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Text')}
        style={styles.viewContainers}
      >
        <Text style={styles.textStyle}> Text </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewContainers: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CustomTheme.colors.default,
    borderRadius: 16,
    margin: 10,
  },
  textStyle: {
    fontSize: 22,
    color: 'white',
  },
});
