import React, { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Image, View, PixelRatio, Dimensions, ImageBackground, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'

const { width, height } = Dimensions.get('window')

const Splash = ({ navigation }) => {

    return (
       
            <ImageBackground source={require('../../assets/Images/Splash.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.Logo}>
                    <Image source={require('../../assets/Images/scissors.png')} style={styles.Logoimg} />
                    <Text style={styles.Logotxt}>OHO</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                    <View style={[styles.whiteBtn]}
                    >
                        <Text style={styles.subHeading}>Welcome to <Text style={[styles.subHeading, {
                            color: '#FC9918',
                            fontFamily: "Roboto",
                            fontWeight: '800',
                            lineHeight: 30
                        }]}> OHO</Text></Text>

                    </View>
                    <Text style={styles.text}>App!</Text>
                </View>            
        </ImageBackground>
       
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        backgroundColor: '#000',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    subHeading: {
        fontSize: 20,
        color: '#fff',
        fontFamily: "Roboto",
        fontWeight: '500',
        lineHeight: 30
    },
    whiteBtn: {
        // backgroundColor: 'transparent',
       
        marginVertical: 25,
        width: '100%',
        alignItems: 'center',
        
    },
    text: {
        height: 80,
        width: 255,
        left: 70,
        // top: 631,
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        lineHeight: 39,
        bottom: 10
    },
    Logo:{
        alignItems: 'center',
        justifyContent: 'center',
        top: 88
    },
    Logoimg:{
        width: 75,
        height:75,
    },
    Logotxt:{
        fontSize: 36.52,
        fontFamily: 'Rufina',
        fontWeight: '700',
        lineHeight: 34.77,
        color: "#ffffff"
    }

})