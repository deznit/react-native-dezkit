import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-dezkit';

const TextScreen = () => {
  return (
    <View style={[styles.container]}>
      <Text type="title" uppercase>
        Title text
      </Text>
      <Text type="heading">Heading text</Text>
      <Text type="tagline" color="success" uppercase>
        Tagline
      </Text>
      <Text type="subheading">Subheading</Text>
      <Text type="paragraph">Paragraph</Text>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
