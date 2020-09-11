import React from 'react'
import {Image, View} from "react-native";

export const ThumbNail = ({styleProps}) => {
    return (
            <Image style={styleProps} resize={'contain'} source={require('../assets/thumbnail.jpeg')}/>
    )
}
