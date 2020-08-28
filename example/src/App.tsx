import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-dezkit';

export default function App() {
  return (
    <View style={styles.container}>
      <Button outline color="#000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
