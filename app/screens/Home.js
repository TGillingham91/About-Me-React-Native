import React from 'react';
import {View, Image, ImageBackground, Dimensions, StyleSheet} from 'react-native';
import {DialogueBox} from "../components/DialogueBox";

const {width, height} = Dimensions.get('window')

const Home = () => {
    return (
            <View style={styles.outerContainer}>
                <View style={[styles.dialogueBoxContainer]}>
                    <DialogueBox size={'small'} elevation={true}/>
                </View>

                <ImageBackground
                    style={{width: width, height:height/2,}}
                    source={require('../assets/background.jpeg')}>
                    <View style={{flex: 1, backgroundColor: 'transparent'}}/>
                    <View style={styles.triangle}/>
                </ImageBackground>
            </View>
    )
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    dialogueBoxContainer: {
        zIndex: 1,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: height/3
    },
    triangle: {
        left:0,
        borderLeftWidth:Dimensions.get('window').width,
        borderBottomWidth: 90,
        borderLeftColor: 'transparent',
        borderBottomColor: 'white'
    }
})

export default Home;
