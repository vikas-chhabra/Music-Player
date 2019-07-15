import { StyleSheet, Dimensions } from 'react-native'

const {width} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
    },
    headerChild2: {
        flex: 5,
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerChild: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        height: 90,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
    },
    footerChild: {
        flex: 1,
        padding: 20
    },
    footerChild2: {
        flex: 5,
        padding: 20,
        paddingLeft: 0,
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold'
    },
    songDetailsContainer: {
        flexDirection: 'row',
        width:width,
        padding:18,
    },
    songDetails: {
        flex: 5,
    },
    more: {
        flex: 1,
        alignSelf:'center',
    },
    songImage: {
        flex: 1,
        alignSelf:'flex-start',
        paddingRight:5,
        paddingTop:3
    },
    slider:{
        paddingTop:15
    },
    playPauseStatus:{
        flex:1,
        backgroundColor:'#abc',
        position:'absolute'
    }
})