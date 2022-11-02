import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, PixelRatio, TextInput, Image, ScrollView, ImageBackground, Dimensions, FlatList } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/BaseScreen'
import Input from '../../components/Input'
import Button from '../../components/Button'
import moment from 'moment/moment'
import Swiper from 'react-native-swiper'

import RazorpayCheckout from 'react-native-razorpay'

const themeColor = '#F5CF04'

const Data = [
    { id: 1, img: require('../../assets/Images/nearby.png'), title: "Barbreking", status: 'Open Now', timing: '10:00 AM - 9:00 PM', rating: "4.7", distance: "1.5" },
    { id: 2, img: require('../../assets/Images/nearby.png'), title: "Barbreking", status: 'Open Now', timing: '10:00 AM - 9:00 PM', rating: "4.7", distance: "1.5" },
    { id: 3, img: require('../../assets/Images/nearby.png'), title: "Barbreking", status: 'Open Now', timing: '10:00 AM - 9:00 PM', rating: "4.7", distance: "1.5" },
    { id: 4, img: require('../../assets/Images/nearby.png'), title: "Barbreking", status: 'Open Now', timing: '10:00 AM - 9:00 PM', rating: "4.7", distance: "1.5" },
    { id: 5, img: require('../../assets/Images/nearby.png'), title: "Barbreking", status: 'Open Now', timing: '10:00 AM - 9:00 PM', rating: "4.7", distance: "1.5" },
    { id: 6, img: require('../../assets/Images/nearby.png'), title: "Barbreking", status: 'Open Now', timing: '10:00 AM - 9:00 PM', rating: "4.7", distance: "1.5" },
    { id: 7, img: require('../../assets/Images/nearby.png'), title: "Barbreking", status: 'Open Now', timing: '10:00 AM - 9:00 PM', rating: "4.7", distance: "1.5" },
    { id: 8, img: require('../../assets/Images/nearby.png'), title: "Barbreking", status: 'Open Now', timing: '10:00 AM - 9:00 PM', rating: "4.7", distance: "1.5" }
]


const Location = ({ navigation }) => {
    return (
        <BaseScreen


            // title={"Nearby Saloon"}



            renderChild={Content({ navigation })} navigation={navigation} leftButton={true} paddingTop={false} paddingHorizontal={true}
            rightButton={
                <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
                    <MaterialIcons name="person" size={25} color={'#fff'}></MaterialIcons>
                </TouchableOpacity>} />
    )
}



const Content = ({ navigation }) => {

    const { BaseUrl, appData, } = useContext(AuthContext)

    const activeColor = "#F5CF04"

    const [search, setSearch] = useState('')
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );


    return (
        <ScrollView style={styles.contentScroll} >


            {Data.map((item, index) =>
                <View key={index} style={styles.cardWrapper} >
                    <View>
                        <Image style={styles.cardImg} source={item.img} />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.subHeading,]}>{item.title} </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ left: 20, top: 5, fontSize: 14, color: '#FFB441' }}>{item.status}</Text>
                            <Text style={{ left: 40, top: 5, fontSize: 14, color: '#c4c4c4' }}>{item.timing}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', top: 5, alignItems: 'center', justifyContent: 'space-around' }}>
                            <View style={{ flexDirection: 'row', marginTop: 6, marginLeft: 4, alignItems: 'center' }}>
                                <MaterialIcons name='star' color={"yellow"} size={14} />
                                <Text style={{ fontSize: 14, color: '#c4c4c4' }}>{item.rating}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 6, marginLeft: 4, alignItems: 'center' }}>
                                <MaterialIcons name="location-on" color={"#c4c4c4"} size={14} />
                                <Text style={{ fontSize: 14, color: '#c4c4c4' }}>{item.distance} away</Text>
                            </View>

                        </View>
                    </View>

                </View>

            )}


<Button title={"Book Appointment"} 
width={"99%"}/>


        </ScrollView>

    )
}

export default Location

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        width: '100%',
        position: 'relative',
        paddingTop: 10,
        marginBottom: 70
    },
    cardWrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#323232",
        height: 90,
        marginVertical: 5,

    },
    subHeading: {
        fontSize: 14,
        color: '#fff',
        left: 20
    },
    cardImg: {
        width: 95,
        height: 88,
        borderRadius: 8
    }
})