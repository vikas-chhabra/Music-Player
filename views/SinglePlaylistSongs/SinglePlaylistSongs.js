import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Styles from './SinglePlaylistSongsStyles'

export default class SinglePlaylistSongs extends Component {
    render() {
        return (
            <View Style={[Styles.container]}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
