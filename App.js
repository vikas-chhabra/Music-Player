import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SingleTrackPlay from './views/SingleTrackPlay/SingleTrackPlay';
import SinglePlaylistSongs from './views/SinglePlaylistSongs/SinglePlaylistSongs';

export default function App() {
  return (
    <SinglePlaylistSongs/>
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
