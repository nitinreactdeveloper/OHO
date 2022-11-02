import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'

const SecondInput = ({ height, width, error, ...rest }) => {

    return (
        <View>
        <TextInput
            style={[styles.Input, { width: width ? width : '99%', height: height ? height : 50, borderColor: error ? '#f00' : '#333232', }]}
            placeholderTextColor="#C4C4C4"
            {...rest}
        ></TextInput>
        </View>
    )
}

export default SecondInput

const styles = StyleSheet.create({
    Input: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        marginHorizontal: 60,
        fontSize: 14,
        color: '#000',
        borderWidth:1,
        borderRadius: 6,
        fontFamily: "Roboto-Regular",
        backgroundColor: '#333232',
        elevation: 3,
        shadowColor: '#0009',
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },
})
