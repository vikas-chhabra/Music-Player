import { StyleSheet } from 'react-native'
import { Constants } from 'expo'

const { statusBarHeight } = Constants

export default StyleSheet.create({
    statusBarHeightDown:{
        height: statusBarHeight,
        backgroundColor:'rgba(255,255,255,1)'
    },
})