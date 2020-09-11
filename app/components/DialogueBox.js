import React from 'react'
import {Text, View, StyleSheet, Dimensions,} from 'react-native'
import {ThumbNail} from "./Thumbnail";

const { width, height } = Dimensions.get('window')

export const DialogueBox = ({size='medium', elevation=true, round=true}) => {
    return (
        <View style={[
            styles[size],
            elevation && styles.elevation,
            round && styles.radius,
            {
                flexDirection: 'row',
                flex: 1
            }
        ]}>
            <ThumbNail styleProps={styles.thumbnailStyle}/>
            <View style={{flex: 1}}/>
            <View style={{flex: 1}}>
                <Text>Hello</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    thumbnailStyle: {
        height: 50,
        width: 50,
        zIndex: 1,
        borderRadius: 10,
        position: 'absolute',
        marginLeft: 30
    },
    small: {
        height: height * 0.2,
        width: width * 0.8,
        backgroundColor: 'white'
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
    },
    radius: {
        borderRadius: 10
    }
})
