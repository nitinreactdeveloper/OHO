import React, { useState, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, Platform, PixelRatio, View, TextInput, ScrollView, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'

import Button from '../../components/Button'
import Input from '../../components/Input'

import BaseScreen from '../../components/BaseScreen'

const errorColor =
    '#fe0000'

const darkBlue = '#2C467B'

const Gender = ({ navigation }) => {

    return (
        <BaseScreen title={'Sign in'} navigation={navigation} renderChild={Content({ navigation })} leftButton={false}

            height={'100%'} />
    )
}

const Content = ({ navigation }) => {






    return (

        <View style={styles.contentScroll}>
            <Text style={{ textAlign: 'center', color: "#fff", fontSize: 20, fontFamily: 'Montserrat' }}>Which one are you?</Text>
            <View style={styles.genderSelection}>
                <View style={styles.male}>
                    <Image source={require('../../assets/Images/male.jpg')} resizeMode={'contain'} style={styles.image} />
                    <Text style={styles.genderName} >male</Text>
                </View>
                <View style={styles.female}>
                    <Image source={require('../../assets/Images/female.jpg')} resizeMode={'contain'} style={styles.image} />
                    <Text style={styles.genderName} >female</Text>
                </View>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', margin: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
            </View>
            <Button title={'Continue'} onPress={() => { navigation.navigate('otp') }} />
            <Button title={'Prefer Not To Choose'} backgroundColor={'#333232'} onPress={() => { navigation.navigate('otp') }} />


        </View>

    )
}


export default Gender

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#000'
    },
    genderSelection: {
        flexDirection: 'row',
        width: '100%',
        top: 40,
        height: 195,

    },
    male: {
        backgroundColor: '#fff',
        width: '40%',
        height: 175,
        marginLeft: 30,
        marginTop: 10,
        borderColor: 'FFB441',
        marginRight: 15,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#FFB441',
        alignItems: 'center',
        justifyContent: 'center'

    },
    female: {
        backgroundColor: '#fff',
        width: '40%',
        height: 175,
        marginHorizontal: 15,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#FFB441',
        alignItems: 'center',
        justifyContent: 'center'

    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    genderName: {
        color: '#fff',
        fontSize: 16,

    }
})
