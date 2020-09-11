import React from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native'
import {HeaderBar} from "./HeaderBar";

const { width, height } = Dimensions.get('window')

export const DialogueBox = ({size='medium', backgroundColor='light', title, elevation=true, position='center', round=true}) => {
    return (
        <View style={[
            styles[size],
            styles[position],
            elevation && styles.elevation,
            round && styles.radius,
            styles.position
        ]}>
            <HeaderBar color={'light'} size={'small'} rounded={'topRounded'} border={'borderBottom'} headerText={'About Me'} />
            <View style={{flex: 1}}>
                <Text>Dialogue box</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    small: {
        height: height * 0.2,
        width: width * 0.6,
        backgroundColor: 'red'
    },
    medium: {
        height: height * 0.3,
        width: width * 0.7,
        backgroundColor: '#ededed'
    },
    large: {
        height: height / 0.4,
        width: width * 0.8,
        backgroundColor: 'green'
    },
    elevation: {
        shadowColor: '#001',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        zIndex: 1,
    },
    position: {
        position: 'absolute',
        alignSelf: 'center',
    },
    center: {
        marginTop: height/3.5,
    },
    bottom: {
        bottom: 0,
        marginBottom: 5
    },
    top: {
        top: 0,
        marginTop: 5
    },
    radius: {
        borderRadius: 10
    }
})
