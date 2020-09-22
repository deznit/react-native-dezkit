import React from 'react';
import { Container } from 'react-native-dezkit';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CustomTheme } from '../components/CustomTheme';

const HomeScreen = ({ navigation }: any) => {
  return (
    <Container>
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
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewContainers: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CustomTheme.colors.accent,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
  },
  textStyle: {
    fontSize: 22,
    color: 'white',
  },
});
