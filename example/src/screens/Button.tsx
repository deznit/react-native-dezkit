import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-dezkit';

const ButtonScreen = () => {
  const onPress = () => {
    console.log('hello');
  };
  return (
    <View style={[styles.container]}>
      <Button type="text">Text Button</Button>
      <Button
        uppercase={false}
        type="default"
        color="primary"
        disabled
        onPress={onPress}
      >
        Default Button
      </Button>
      <Button type="default" outline>
        Default Outline
      </Button>

      <Button type="rounded">Rounded Button</Button>
      <Button type="rounded" outline>
        Rounded Outline
      </Button>
    </View>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
