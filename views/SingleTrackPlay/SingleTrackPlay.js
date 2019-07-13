import React, { Component } from 'react'
import { Text, View, Slider, Image, Animated, Dimensions, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import  Styles  from './SingleTrackStyles'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons'

const {width} = Dimensions.get('window')

export default class SingleTrackPlay extends Component {
    constructor(props){
        super();
        this.state={
            sliderValue : new Animated.Value(0)
        }
    }
    render() {
        const backgroundWidth = this.state.sliderValue.interpolate({
            inputRange: [0, 1],
            outputRange: [width/6, width],
            extrapolate: 'clamp',
          });
        return (
            // container started
            <View style={[Styles.container]}>

                {/* status bar height view  started */}
                <View style={[Styles.statusBarHeightDown]}/>
                {/* status bar height view ended */}

                {/* background play progress started */}
                <Animated.View style={[Styles.backgroundPlayPause,{width:backgroundWidth}]}/>
                {/* background play progress ended */}

                <View style={[Styles.paddingLeftContainer]}>
                    {/*header started */}
                <View style={[Styles.playlistDetails]}>
                    <View>
                        <Text style={[Styles.playListText]}>Playlist</Text>
                        <Text style={[Styles.playListNameText]}>Driving</Text>
                    </View>
                    <View>
                        <AntDesign name = "downcircleo" color="#000" size={24}/>
                    </View>
                </View>
                {/* header ended */}

                {/* icons view started */}
                <View style={[Styles.iconsView]}>
                    <TouchableOpacity style={{padding:10, paddingLeft:0}}>
                        <AntDesign name = "check" color="#aeaeae" size={22}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10, paddingLeft:0}}>
                        <Feather name = "shuffle" color="#aeaeae" size={22}/>   
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10, paddingLeft:0}}>
                        <Feather name = "repeat" color="#aeaeae" size={22}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10, paddingLeft:0}}>
                        <MaterialIcons name = "dots-horizontal" color="#aeaeae" size={22}/> 
                    </TouchableOpacity>
                </View>
                {/* icons view ended */}

                {/* song cover view started */}
                <View style={[Styles.albumCoverView]}>
                    <Image style={[Styles.vinylImage]} source={require('../../assets/vinyl.png')} resizeMode='cover'/>
                    <Image style={[Styles.posterImgaeStyles]} source={require('../../assets/poster1.jpg')} resizeMode="cover" />
                </View>
                {/* song cover view ended */}

                {/* play pause button view started */}
                <View style={[Styles.playPauseButtons]}>
                    <MaterialIcons name = "skip-previous" color='#fff' size={35}/>
                    <MaterialIcons name = "pause" color="#fff" size={35}/>  
                    <MaterialIcons name = "skip-next" color='#fff' size={35}/>
                </View>
                {/* play pause button view ended */}

                {/* song details view started */}
                <View style={[Styles.songDetails]}>
                    <View>
                        <Text style={[Styles.songNameText]}>Song Name</Text>
                        <Text style={[Styles.songType]}>Song Type</Text>
                    </View>
                    <View>
                        <Feather name = "volume-2" color="blue" size={25}/> 
                    </View>
                </View>
                {/* song details view ended */}

                {/* progress view started */}
                <View style={[Styles.ProgressView]}>
                    <Slider style={[Styles.slider]} thumbTintColor='blue' maximumTrackTintColor='-lightblue' minimumTrackTintColor='blue' onValueChange={(value)=>{this.state.sliderValue.setValue(value)}}/>
                </View>
                {/* progress view ended */}
                </View>

            </View>
            // container ended
        )
    }
}
