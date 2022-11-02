import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'

const Button = ({ onPress, title, width, backgroundColor, color, borderColor , height, margin}) => {
    return (
        <TouchableOpacity style={[styles.solidBtn, { width: width ? width : '100%', backgroundColor: backgroundColor ? backgroundColor : '#FFB441', borderColor: borderColor ? borderColor : "#000", height: height ? height: 45, margin: margin ? margin : 0 }]}
            onPress={() => onPress()}>
            <Text style={[styles.solidBtnTxt, { color: color ? color : "#ffffff" }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    solidBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 45,
        marginVertical: 10,
        borderRadius: 6,
        borderRightWidth: 1,
        backgroundColor: '#FC9918',
        borderWidth: 1,
        
    },
    solidBtnTxt: {
        fontSize: 16,
        color: '#fff',
        fontFamily: "Poppins-Bold",
    },
})
