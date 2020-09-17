import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Container } from 'react-native-dezkit';

const TextScreen = () => {
  return (
    <Container style={[styles.container]}>
      <Text type="title">Title text</Text>
      <Text type="heading">Heading text</Text>
      <Text type="tagline" color="success">
        Tagline
      </Text>
      <Text type="subheading">Subheading</Text>
      <Text type="paragraph">Paragraph</Text>
    </Container>
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
