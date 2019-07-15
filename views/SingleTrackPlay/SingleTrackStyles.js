import { StyleSheet, Dimensions } from 'react-native'
import { Constants } from 'expo'

const { width, height } = Dimensions.get('window')
const { statusBarHeight } = Constants

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    backgroundPlayPause:{
        backgroundColor:'#d3f6f3',
        position:'absolute',
        height:height+statusBarHeight,
    },
    statusBarHeightDown:{
        height: statusBarHeight,
        backgroundColor:'rgba(255,255,255,1)'
    },
    playlistDetails:{
        flex:0.8, 
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:10,
        backgroundColor:'transparent',
        alignItems:'center'
    },
    iconsView:{
        flex:0.6,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:10,
        backgroundColor:'transparent',
        alignItems:'center'
    },
    albumCoverView:{
        flex:1.6,
        width:width-width/7.5,
        backgroundColor:'transparent',
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center'
    },
    paddingLeftContainer:{
        flex:1, 
        paddingLeft:width/7.5,
    },
    playPauseButtons:{
        height:50,
        width:width-width/7.5,
        backgroundColor:'blue'       ,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    songDetails:{
        flex:0.8,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:10,
        backgroundColor:'transparent',
        alignItems:'center'
    },
    ProgressView:{
        flex:0.6,
        width:width-width/7.5,
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'center'
    },
    playListText:{
        color:'blue',
        fontSize:15
    },
    playListNameText:{
        color:'blue',
        fontWeight:'bold',
        fontSize:19,
        letterSpacing:1
    },
    songNameText:{
        color:'blue',
        fontSize:20,
        fontWeight:'bold',
        letterSpacing:0.1
    },
    songType:{
        fontSize:14,
        color:'blue',
        paddingTop:5
    },
    slider:{
        width:width-width/10,
    },
    posterImgaeStyles:{
        width: width/2.3,
        height: width/2.3
    },
    vinylImage:{
        position:'absolute',
        width:width/2.6,
        height:width/2.6,
        marginLeft:width/4.4
    },
    IconsCss:{
        padding:10, 
    }
})