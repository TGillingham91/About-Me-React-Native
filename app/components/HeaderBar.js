import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const HeaderBar = ({color='light', headerText, size='small', rounded, border}) => {
    return (
        <View style={[styles[size], styles[rounded], styles[color], styles[border]]}>
            <Text style={{alignSelf: 'center', fontSize: 20}}>{headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    large: {
        flex: 0.5
    },
    small: {
        flex: 0.2
    },
    topRounded:{
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
    },
    bottomRounded: {
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10
    },
    light: {
        backgroundColor: 'grey'
    },
    dark: {
        backgroundColor: 'black'
    },
    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    borderTop: {
        borderTopColor: 'black',
        borderTopWidth: 1
    }
})
