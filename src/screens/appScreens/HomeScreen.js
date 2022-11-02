import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, PixelRatio, TextInput, Image, ScrollView, ImageBackground, Dimensions, FlatList } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/dist/Feather'
import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/BaseScreen'
import Input from '../../components/Input'
import Button from '../../components/Button'
import moment from 'moment/moment'
import Swiper from 'react-native-swiper'

import SpecialistData from '../../Data/specialist'
import RazorpayCheckout from 'react-native-razorpay'
import { useDerivedValue } from 'react-native-reanimated'

const themeColor = '#F5CF04'

const Data = [
    { id: 1, title1: 'Look', title2: 'Awesome', text: '$ save some', img: require('../../assets/Images/swiper1.png'), backgroundColor: '#000' },
    { id: 2, title1: 'Look', title2: 'Awesome', text: '$ save some', img: require('../../assets/Images/swiper2.png'), backgroundColor: '#000' },
    { id: 3, title1: 'Look', title2: 'Awesome', text: '$ save some', img: require('../../assets/Images/swiper3.png'), backgroundColor: '#000' },
]

const Data2 = [
    { id: 1, title: 'Haircut', img: require('../../assets/Images/scissor.png') },
    { id: 2, title: 'Shaving', img: require('../../assets/Images/shaving-razor.png') },
    { id: 3, title: 'Massage', img: require('../../assets/Images/massage.png') },
    { id: 4, title: 'Threading', img: require('../../assets/Images/thread-spool.png') },
    { id: 5, title: 'Haircut', img: require('../../assets/Images/scissor.png') },
    { id: 6, title: 'Shaving', img: require('../../assets/Images/shaving-razor.png') },
    { id: 7, title: 'Massage', img: require('../../assets/Images/massage.png') },
    { id: 8, title: 'Threading', img: require('../../assets/Images/thread-spool.png') },

]

const Recomended = [
    { id: 1, work: 'Style & Scissor', location: "king Road , 34 sector, Mumbai", img: require('../../assets/Images/recommended.png'), rating: 4.7 },
    { id: 2, work: 'Bella Devid', location: "Makeup Artist", img: require('../../assets/Images/recommended.png'), rating: 4.7 },
    { id: 3, work: 'Bella Devid', location: "Makeup Artist", img: require('../../assets/Images/recommended.png'), rating: 4.7 },
    { id: 4, work: 'Bella Devid', location: "Makeup Artist", img: require('../../assets/Images/recommended.png'), rating: 4.7 },
    { id: 5, work: 'Bella Devid', location: "Makeup Artist", img: require('../../assets/Images/recommended.png'), rating: 4.7 },
    { id: 6, work: 'Bella Devid', location: "Makeup Artist", img: require('../../assets/Images/recommended.png'), rating: 4.7 },
    { id: 7, work: 'Bella Devid', location: "Makeup Artist", img: require('../../assets/Images/recommended.png'), rating: 4.7 },
    { id: 8, work: 'Bella Devid', location: "Makeup Artist", img: require('../../assets/Images/recommended.png'), rating: 4.7 }

]





const HomeScreen = ({ navigation }) => {
    return (
        <BaseScreen
            logo={
                <TouchableOpacity style={{ alignItems: 'flex-start' }} onPress={() => { }}>
                    <Image source={require('../../assets/Images/logo1.png')} style={{ height: 40, width: 40, top: 18, borderRadius: 10 }} />
                    <Text style={{
                        fontSize: 22,
                        // flexDirection: 'row',     
                        // textAlign: 'center',
                        left: 50,
                        fontWeight: '200',
                        top: -25,
                        color: '#fff', fontFamily: "Roboto-Bold"
                    }}>Hi David!
                    </Text>
                    <Text style={{
                        fontSize: 12,
                        // flexDirection: 'row',     
                        // textAlign: 'center',
                        left: 50,
                        top: -25,
                        color: '#323232', fontFamily: "Roboto-Bold"
                    }}>Let's  make your hair attractive
                    </Text>

                </TouchableOpacity>

            }
            renderChild={Content({ navigation })} navigation={navigation} leftButton={false} paddingTop={false} paddingHorizontal={true}
            rightButton={
                <TouchableOpacity onPress={() => { navigation.navigate('Notifications') }} style={{}}>
                    <MaterialIcons name="notifications-none" size={30} color={'#fff'}></MaterialIcons>
                </TouchableOpacity>} />
    )
}




const Content = ({ navigation }) => {

    const { BaseUrl, appData, } = useContext(AuthContext)

    const activeColor = "#F5CF04"

    const [search, setSearch] = useState('')
    const renderitem = ({ item }) => {
        return (
            <View >
                <ScrollView horizontal={true}>

                    <TouchableOpacity style={styles.SpecialistDataWrapper}
                        onPress={() =>
                            navigation.navigate('Specialist', {
                                Specialistid: item.id
                            })
                        }>

                        <Image source={item.img} style={styles.SpecialistImg} resizeMode={'contain'} />

                        <Text style={[styles.SpecialistName]}>{item.title}</Text>
                        <Text style={[styles.Specialistwork]}>{item.work}</Text>

                    </TouchableOpacity>



                </ScrollView>
            </View>
        )
    }

    return (
        <ScrollView style={styles.contentScroll} >

            <View style={styles.filter}>
                <MaterialIcons name='search' color={'#fff'} size={25} />
                <TextInput
                    placeholder={"search for location or saloon name"}
                    placeholderTextColor={"#c4c4c4"}
                    width={'80%'}
                    borderColor={false}
                />
                <Feather name='filter' color={'#fff'} size={25} />
            </View>

            <Swiper style={styles.rowWrap} height={213} showsButtons={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={true} dotColor={'#fff'} activeDotColor={'#FFB441'}  >
                {Data.map((item, index) =>
                    <View key={index} style={styles.cardWrapper} >
                        <ImageBackground style={styles.cardImg} source={item.img}>

                            <Text style={[styles.subHeading, { color: '#FFB441', fontSize: 25.56 }]}>{item.title1} <Text style={{ color: '#fff' }}>{item.title2}</Text></Text>
                            <Text style={{ left: 20, top: 5, fontSize: 16, color: '#fff' }}>{item.text}</Text>
                            <Button width={'50%'} title={'Get upto 50% off'}
                                onPress={() => { navigation.navigate("Location") }}
                                borderColor={'#FFB441'} />
                        </ImageBackground>
                    </View>

                )}
            </Swiper>

            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                paddingHorizontal: 10,
                width: '100%',

            }} >
                {Data2.map((item, index) =>
                    <View key={index} style={styles.serviceswrapper} >

                        <Image source={item.img} style={styles.serviceIMg} resizeMode={'center'} />

                        <Text style={[styles.servicetitle]}>{item.title}</Text>
                    </View>

                )}





            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '92%', marginTop: 6, marginHorizontal: 12 }}>
                <Text style={{ color: "#fff" }}>Best Specialist</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#FFB441' }}>View all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={SpecialistData}
                renderItem={renderitem}
            />



            {/* Recomended */}

            <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '92%', marginTop: 6, marginHorizontal: 12, marginBottom: 2 }}>
                <Text style={{ color: "#fff" }}>Recommended</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#FFB441' }}>View all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
                {Recomended.map((item, index) =>
                    <View key={index} style={styles.RecomendedData}>
                        <Image source={item.img} style={styles.RecomendedImg} resizeMode={'center'} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={[styles.RecomendedName]}>{item.work}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialIcons name="star" color="yellow" size={18} />
                                <Text style={{ color: '#fff', marginRight: 10, marginLeft: 6 }}>{item.rating}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 6, marginLeft: 4 }}>
                            <MaterialIcons name="location-on" color={"#c4c4c4"} size={10} />
                            <Text style={[styles.RecomendedWork]}>{item.location}</Text>
                        </View>
                    </View>

                )}

            </ScrollView>




        </ScrollView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        // height: '100%',
        // flex:1,
        marginBottom: 70,
        width: '100%',
        position: 'relative',
        paddingTop: 10,
        backgroundColor: '#000'
    },
    SpecialistDataWrapper: {
        borderColor: 'green',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(255, 255, 255, 0.2);',
        paddingBottom: 10,
        marginVertical: 10
    },
    SpecialistImg: {
        width: 107,
        height: 87,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10



    },
    SpecialistName: {
        fontSize: 14,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        color: '#fff',
        textAlign: 'left',
        left: 4,
        width: 107,
        lineHeight: 14.63
    },
    Specialistwork: {
        fontSize: 10,
        lineHeight: 12,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        left: 4,
        color: '#fff',
        textAlign: 'left',
        width: 107
    },
    serviceIMg: {

        height: 50,
        width: 60,
        borderWidth: 1,
        borderColor: '#323232',
        margin: 8,

        borderRadius: 10,
        paddingVertical: 33,
        // backgroundColor: 'red',
        marginHorizontal: 12



    },
    heading: {
        // fontSize: 18,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
        color: '#000',
        fontFamily: "Roboto-Bold",
        marginBottom: 5,
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        color: '#000',
        borderWidth: 1,
        borderRadius: 6,
        fontFamily: "Roboto-Regular",
        backgroundColor: '#000',
        elevation: 3,
        shadowColor: '#0009',
        borderColor: '#323232'

    },
    subHeadingBold: {
        // fontSize: 16,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#000',
        fontFamily: "Roboto-SemiBold",
    },
    servicetitle: {
        color: '#fff',
        fontFamily: "Montserrat",
        // marginTop: 20,
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: '600',
        fontSize: 14
    },
    subHeading: {
        // fontSize: 16,
        // fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#000',
        fontFamily: "Montserrat",
        marginTop: 20,
        fontWeight: '600',
    },
    smTxt: {
        // fontSize: 12,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(4.5),
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    regTxt: {
        // fontSize: 14,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    fontMedium: {
        fontFamily: 'Roboto-Medium'
    },

    cardWrapper: {
        alignSelf: "center",
        display: 'flex',
        justifyContent: 'center',

        marginTop: 10,


        width: '95%',
        height: 173,

        backgroundColor: '#000',
        borderRadius: 20,
        borderColor: '#green',
        elevation: 3,
        shadowColor: '#000',
        color: '#000',



    },
    serviceswrapper: {
        alignItems: 'center',
        alignSelf: 'auto',
        // borderColor: 'green',
        marginHorizontal: 2,
        // justifyContent:  'flex-start'




    },
    rowAlign: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowWrap: {
        marginTop: 10

    },
    iconTxtBtn: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        paddingHorizontal: 10,
        color: '#fff'
    },
    badge: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#2a2',
    },
    secondaryBtn: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        alignItems: 'flex-end',
        width: 70,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#fff',
        // borderWidth: 1,
        borderColor: themeColor,
    },
    secondaryBtnTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        color: themeColor,
        // fontFamily: 'Roboto-Bold',
        fontFamily: 'Roboto-Medium',
    },
    cardImg: {

        height: 173,
        justifyContent: 'center',
        paddingLeft: 30,
        borderRadius: 20,
        backgroundColor: '#D9D9D9'
    },
    RecomendedData: {
        borderColor: 'green',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(255, 255, 255, 0.2);',
        paddingBottom: 10,
        marginVertical: 10,
        marginBottom: 10
    },
    RecomendedImg: {
        width: 249,
        height: 125,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    RecomendedName: {
        fontSize: 14,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        color: '#fff',
        textAlign: 'left',
        left: 4,
        width: 96,
        lineHeight: 14.63,
        height: 17,
        marginTop: 8,
    },
    RecomendedWork: {
        fontSize: 10,
        lineHeight: 12,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        left: 6,
        color: '#c4c4c4',
        textAlign: 'left',
        width: 230
    }

})