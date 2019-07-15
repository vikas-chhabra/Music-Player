import React, { Component } from 'react'
import { Text, View, Image, ScrollView, Slider, TouchableOpacity, Dimensions, Animated } from 'react-native'
import Styles from './SinglePlaylistSongsStyles'
import CommonStyles from '../Styles/CommonStyles'
import Ionicons from '@expo/vector-icons/Ionicons'
import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'

const {width} = Dimensions.get('window')

export default class SinglePlaylistSongs extends Component {
    constructor(props){
        super();
        this.state={
            showSlider:false,
            sliderValue: new Animated.Value(0)
        }
    }
    playSong=()=>{
        //handeling slider
        this.setState({showSlider:true});
    }
    render() {
        const backgroundWidth = this.state.sliderValue.interpolate({
            inputRange: [0, 1],
            outputRange: [width/4.2, width],
            extrapolate: 'clamp',
          });
        return (
            <View style={[Styles.container]}>

                <View style={[CommonStyles.statusBarHeightDown]}/>
                {/* header started */}
                <View style={[Styles.header]}>
                    <View style={[Styles.headerChild]}><Ionicons name="ios-arrow-back" size={20} color="#000" style={{alignSelf:'center'}}/></View>
                    <Text style={[Styles.headerChild2]}>Driving</Text>
                    <View style={[Styles.headerChild]}><Entypo name="dots-two-horizontal" size={20} color="#000" style={{alignSelf:'center'}}/></View>
                </View>
                {/* header ended */}

                {/* scroll view started */}
                <ScrollView>

                    {/* card started */}
                    <TouchableOpacity style={[Styles.songDetailsContainer]} onPress={()=>{this.playSong()}}>
                        {this.state.showSlider?(<Animated.View style={[Styles.songDetailsContainer,{position:'absolute', backgroundColor:'#e5e5e5', height:100, width:backgroundWidth}]}/>):null}
                        <View style={[Styles.songImage]}><Image style={{height:50, width:50}} source={require('../../assets/poster1.jpg')}/></View>
                        <View style={[Styles.songDetails]}>
                            <View style={{paddingLeft:10, flex:1, justifyContent:'center'}}>
                            <Text style={[Styles.songNameDetail]}>Song Name</Text>
                            <Text style={[Styles.albumNameDetail]}>Album Name</Text>
                            </View>
                            {this.renderSlider()}
                        </View>
                        <View style={[Styles.more]}><Entypo name="dots-two-horizontal" size={20} color="#000" style={{alignSelf:'center', paddingLeft:10}}/></View>
                    </TouchableOpacity>
                    {/* card ended */}
                    
                </ScrollView>
                {/* scroll view ended */}

                {/* footer started */}
                <View style={[Styles.footer]}>
                    <View style={[Styles.footerChild]}><AntDesign name="pause" size={20} color="#fff"/></View>
                    <Text style={[Styles.footerChild2]}>Song<Text style={{fontWeight:'normal', fontSize:13}}>   The Album</Text></Text>
                    <Text style={[Styles.footerChild]}><AntDesign name="upcircleo" size={25} color="#fff"/></Text>
                </View>
                {/* footer ended */}

            </View>
        )
    }

    renderSlider=()=>{
        if(this.state.showSlider){
            return <Slider style={[Styles.slider]} thumbTintColor='blue' maximumTrackTintColor='lightblue' minimumTrackTintColor='blue' onValueChange={(value)=>{this.state.sliderValue.setValue(value)}}/>
        }
        return null
    }
}
