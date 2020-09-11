import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import {DialogueBox} from "../components/DialogueBox";

const {width, height} = Dimensions.get('window')

const Home = () => {
    return (
        <>
            <View style={{flex: 1, backgroundColor: '#ededed'}}>
                <Image style={{width: width, height: height/2.5, borderBottomRightRadius: 50, borderBottomLeftRadius: 50}}source={require('/Users/t0g00py/AboutMe/app/assets/background.jpg')}/>
            </View>

            <DialogueBox size={'medium'} elevation={true} position={'center'}/>
        </>
    )
};

export default Home;
