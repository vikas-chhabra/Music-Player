import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SingleTrackPlay from './views/SingleTrackPlay/SingleTrackPlay';

export default function App() {
  return (
    <SingleTrackPlay/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
