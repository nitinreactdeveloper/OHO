import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, PixelRatio, Dimensions, Image, StatusBar, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button'
import SecondaryBtn from '../../components/SecondaryBtn';

const { width, height } = Dimensions.get('screen')

const Welcome = ({ navigation }) => {



    useEffect(() => {
    }, [])

    return (
        <View style={styles.container}>
        <ImageBackground source={require('../../assets/Images/Welcome2.png')} resizeMode="cover" style={styles.image}>
            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                <Text style={styles.text}>Find your barber to get better haircut</Text>
                <Button title={"Log in"}
                onPress={()=>{navigation.navigate("Login")}}
                borderColor={"#FFb441"}
                     />
                <TouchableOpacity style={[styles.whiteBtn]}
                onPress={()=>{navigation.navigate('Register')}}
                >
                    <Text style={styles.subHeading}>If you don't have an account?<Text style={[styles.subHeading, {
                        color: '#FC9918',
                        fontFamily: "Poppins-Bold",
                    }]}> Sign Up</Text></Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        backgroundColor: '#fff',
        
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    subHeading: {
        fontSize: 16,
        color: '#fff',
        fontFamily: "Roboto-Medium",
    },
    whiteBtn: {
        backgroundColor: 'transparent',
        marginTop: 5,
        fontWeight: 500,
        color: "#fe0000",
        marginVertical: 25,
        width: '100%',
        alignItems: 'center',
        // marginBottom: 15
    },
    text: {
        height: 80,
        width: 255,
        left: 70,
        // top: 631,
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 24,
        textAlign: 'center',
        color: '#fff',
        lineHeight: 39,
        bottom: 10
     

}
   
})