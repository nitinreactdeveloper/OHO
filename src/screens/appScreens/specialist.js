import React, { useState, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View, PixelRatio, TextInput, Image, ScrollView, ImageBackground, Dimensions, FlatList, StatusBar, Center, Animated } from 'react-native'
import BaseScreen from "../../components/BaseScreen";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import { AuthContext } from "../../navigation/AuthProvider";
import SpecialistData from "../../Data/specialist";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";

const themeColor = "#fff"


const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

const Services = [
    { id: 1, title: 'Hair cut', image: require('../../assets/Images/Haircut.png'), about: 'In publishing and graphic design', time: '35' },
    { id: 2, title: 'Hair Spa', image: require('../../assets/Images/Haircut.png'), about: 'In publishing and graphic design', time: '35' },
    { id: 3, title: 'Makeup', image: require('../../assets/Images/Haircut.png'), about: 'In publishing and graphic design', time: '35' },
    { id: 4, title: 'Shaving', image: require('../../assets/Images/Haircut.png'), about: 'In publishing and graphic design', time: '35' },
    { id: 5, title: 'Waxing', image: require('../../assets/Images/Haircut.png'), about: 'In publishing and graphic design', time: '35' },
    { id: 6, title: 'Shaving', image: require('../../assets/Images/Haircut.png'), about: 'In publishing and graphic design', time: '35' },


]

const Review = [
    { id: 1, title: 'Rohit Kapoor', img: require('../../assets/Images/riyan.png'), review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At egestas ultrices vestibulum neque auctor id. Lectus nec ' },
    { id: 2, title: 'Rohit Kapoor', img: require('../../assets/Images/riyan.png'), review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At egestas ultrices vestibulum neque auctor id. Lectus nec ' },
    { id: 3, title: 'Rohit Kapoor', img: require('../../assets/Images/riyan.png'), review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At egestas ultrices vestibulum neque auctor id. Lectus nec ' },
    { id: 4, title: 'Rohit Kapoor', img: require('../../assets/Images/riyan.png'), review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At egestas ultrices vestibulum neque auctor id. Lectus nec ' },
    { id: 5, title: 'Rohit Kapoor', img: require('../../assets/Images/riyan.png'), review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At egestas ultrices vestibulum neque auctor id. Lectus nec ' }
]














const Specialist = ({ navigation, route }) => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [tabcolor, settabcolor] = useState('#000')

    const { BaseUrl, appData, } = useContext(AuthContext)
    const [tab, setTab] = useState(1)

    const activeColor = "#F5CF04"


    const [search, setSearch] = useState('')

    const id = route.params.Specialistid


    const selectedData = SpecialistData.find((element) => {
        return id === element.id;
    });






    return (


        <ScrollView style={styles.contentScroll}  >



            <Image source={require('../../assets/Images/specialistdata.png')} resizeMode={'contain'} />

            <View style={styles.cardWrapper} onPress={() => alert("selected")}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={[styles.subHeading]}>{selectedData.title} <Text style={{ fontSize: 12 }}>{selectedData.work}</Text></Text>
                    <Button title={"Follow"} width={'30%'} height={35} onPress={() => { navigation.navigate('Booking') }} />
                </View>

                <View style={styles.location}>
                    <MaterialIcons name="location-on" size={18} color={"#323232"} />
                    <Text style={styles.locationTxt}>{selectedData.location}</Text>
                </View>
                <View style={styles.rating} >
                    <MaterialIcons name="star" size={18} color={'#FFB441'} />
                    <MaterialIcons name="star" size={18} color={'#FFB441'} />
                    <MaterialIcons name="star" size={18} color={'#FFB441'} />
                    <MaterialIcons name="star" size={18} color={'#FFB441'} />
                    <MaterialIcons name="star" size={18} color={'#fff'} />
                    <Text style={styles.review}>({selectedData.reviews})</Text>
                </View>
                <View style={styles.rating} >
                    <View style={{ padding: 10, backgroundColor: '#323232', borderRadius: 10, margin: 5 }}>
                        <MaterialIcons name="call" size={18} color={'#fff'} />
                    </View>
                    <View style={{ padding: 10, backgroundColor: '#323232', borderRadius: 10, margin: 5 }}>
                        <MaterialIcons name="message" size={18} color={'#fff'} />
                    </View>
                    <View style={{ padding: 10, backgroundColor: '#323232', borderRadius: 10, margin: 5 }}>
                        <MaterialIcons name="location-on" size={18} color={'#fff'} />
                    </View>
                    <View style={{ padding: 10, backgroundColor: '#323232', borderRadius: 10, margin: 5 }}>
                        <MaterialIcons name="share" size={18} color={'#fff'} />
                    </View>
                </View>
            </View>




            <View style={[styles.rowAlign, { paddingHorizontal: 5, marginTop: 25, marginBottom: 10, justifyContent: 'space-around' }]}>
                <TouchableOpacity style={styles.tabBtn}
                    onPress={() => setTab(1)}>
                    <Text style={[styles.tabBtnTxt, { color: tab === 1 ? '#fff' : '#848484', backgroundColor: tab == 1 ? '#FFB441' : '#323232' }]}>About</Text>
                    {/* <View style={{ height: 2, width: 60, backgroundColor: tab === 1 ? '#FFB441' : 'transparent', marginBottom: 5 }}></View> */}
                    {/* <MaterialIcons name='circle' size={8} color={tab === 1 ? '#fc9918' : '#f4f4f4'} style={{ marginTop: 2 }}></MaterialIcons> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBtn}
                    onPress={() => setTab(2)}>
                    <Text style={[styles.tabBtnTxt, { color: tab === 2 ? '#fff' : '#848484', backgroundColor: tab == 2 ? '#FFB441' : '#323232' }]}>Services</Text>
                    {/* <MaterialIcons name='circle' size={8} color={tab === 2 ? '#fc9918' : '#f4f4f4'} style={{ marginTop: 2 }}></MaterialIcons> */}
                    {/* <View style={{ height: 2, width: 60, backgroundColor: tab === 2 ? '#FFB441' : 'transparent', marginBottom: 5 }}></View> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBtn}
                    onPress={() => setTab(3)}>
                    <Text style={[styles.tabBtnTxt, { color: tab === 3 ? '#fff' : '#848484', backgroundColor: tab == 3 ? '#FFB441' : '#323232' }]}>Reviews</Text>
                    {/* <MaterialIcons name='circle' size={8} color={tab === 3 ? '#fc9918' : '#f4f4f4'} style={{ marginTop: 2 }}></MaterialIcons> */}
                    {/* <View style={{ height: 2, width: 60, backgroundColor: tab === 3 ? '#FFB441' : 'transparent', marginBottom: 5 }}></View> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBtn}
                    onPress={() => setTab(4)}>
                    <Text style={[styles.tabBtnTxt, { color: tab === 4 ? '#fff' : '#848484', backgroundColor: tab == 4 ? '#FFB441' : '#323232' }]}>Gallery</Text>
                    {/* <MaterialIcons name='circle' size={8} color={tab === 3 ? '#fc9918' : '#f4f4f4'} style={{ marginTop: 2 }}></MaterialIcons> */}
                    {/* <View style={{ height: 2, width: 60, backgroundColor: tab === 4 ? '#FFB441' : 'transparent', marginBottom: 5 }}></View> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBtn}
                    onPress={() => setTab(5)}>
                    <Text style={[styles.tabBtnTxt, { color: tab === 5 ? '#fff' : '#848484', backgroundColor: tab == 5 ? '#FFB441' : '#323232' }]}>Expert</Text>
                    {/* <MaterialIcons name='circle' size={8} color={tab === 3 ? '#fc9918' : '#f4f4f4'} style={{ marginTop: 2 }}></MaterialIcons> */}
                    {/* <View style={{ height: 2, width: 60, backgroundColor: tab === 5 ? '#FFB441' : 'transparent', marginBottom: 5 }}></View> */}
                </TouchableOpacity>
            </View>

            {
                tab === 1 ?
                    <ScrollView >
                        <View>
                            <View style={{ padding: 6, borderRadius: 6, borderWidth: 1, borderColor: '#323232', left: 10, justifyContent: 'center', width: 375, backgroundColor: '#323232', marginVertical: 8 }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Montserrat', color: '#fff', lineHeight: 14.66 }}>
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                                    <Text style={{ color: '#FFB441' }}>Read more ...</Text>
                                </Text>
                            </View>
                            <View style={{ padding: 6, borderRadius: 6, borderWidth: 1, borderColor: '#323232', left: 10, justifyContent: 'center', width: 375, backgroundColor: '#323232', marginVertical: 8 }}>
                                <Text style={{ color: "#FFB441" }}>Service timing</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: "#fff" }}> Monday - Friday </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <MaterialIcons name="access-time" size={12} color={"#fff"} />
                                        <Text style={{ color: "#fff" }}> 10:00 Am - 10:00 Pm </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: "#fff" }}> Saturday - Sunday </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <MaterialIcons name="access-time" size={12} color={"#fff"} />
                                        <Text style={{ color: "#fff" }}> 10:00 Am - 10:00 Pm </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ padding: 6, borderRadius: 6, borderWidth: 1, borderColor: '#323232', left: 10, justifyContent: 'center', width: 375, backgroundColor: '#323232', marginVertical: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: "#FFB441", fontSize: 16 }}>Contact Us</Text>
                                <View style={{ flexDirection: 'row', alignItems: "center", }}>
                                    <MaterialIcons name="call" color={'#fff'} size={18} />
                                    <Text style={{ color: "#fff", marginHorizontal: 12 }}>+91 7891444565</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    :
                    tab === 2 ?
                        <View style={{ paddingHorizontal: 10 }}>
                            {Services.map((item, index) =>

                                <ScrollView key={index}>
                                    <View style={styles.servicestab}>
                                        <Image source={item.image} style={{ width: 68, height: 70, margin: 5, borderRadius: 5 }} />
                                        <View>
                                            < Text style={{ color: '#fff' }}>{item.title}</Text>
                                            <Text style={{ color: '#c4c4c4', fontSize: 12 }}>{item.about}</Text>
                                            <Text style={{ color: '#FFB441' }}>{item.time} Min</Text>
                                        </View>
                                        <Button title={"Add"} width={"20%"} height={35} margin={5} />
                                    </View>

                                </ScrollView>
                            )

                            }

                        </View>
                        :
                        tab === 3 ?
                            <View style={{ paddingHorizontal: 10 }}>

                                {Review.map((item, index) =>
                                    <View style={styles.reviewWrapper} key={index}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={item.img} style={{ width: 50, height: 50, left: 31, borderRadius: 50 }} resizeMode={"contain"} />
                                            <View style={{ left: 40 }}>
                                                <Text style={{ color: '#fff', textAlign: 'center', }}>{item.title}</Text>
                                                <View style={[styles.rating, { left: 0 }]}>
                                                    <MaterialIcons name="star" size={18} color={'#FFB441'} />
                                                    <MaterialIcons name="star" size={18} color={'#FFB441'} /><MaterialIcons name="star" size={18} color={'#FFB441'} /><MaterialIcons name="star" size={18} color={'#FFB441'} /><MaterialIcons name="star" size={18} color={'#FFB441'} />
                                                </View>
                                            </View>
                                        </View>
                                        <Text style={{ color: '#fff', marginHorizontal: 35, fontFamily :'Montserrat', marginVertical: 5 }}>{item.review}<Text style={{ color: '#FFB441' }}>Read more..</Text></Text>
                                    </View>

                                )}
                            </View>
                            : 
                            tab === 4 ?
                            <View style={{ paddingHorizontal: 10 }}>

                                {Review.map((item, index) =>
                                    <View style={styles.reviewWrapper} key={index}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={item.img} style={{ width: 50, height: 50, left: 31, borderRadius: 50 }} resizeMode={"contain"} />
                                            <View style={{ left: 40 }}>
                                                <Text style={{ color: '#fff', textAlign: 'center', }}>{item.title}</Text>
                                                <View style={[styles.rating, { left: 0 }]}>
                                                    <MaterialIcons name="star" size={18} color={'#FFB441'} />
                                                    <MaterialIcons name="star" size={18} color={'#FFB441'} /><MaterialIcons name="star" size={18} color={'#FFB441'} /><MaterialIcons name="star" size={18} color={'#FFB441'} /><MaterialIcons name="star" size={18} color={'#FFB441'} />
                                                </View>
                                            </View>
                                        </View>
                                        <Text style={{ color: '#fff', marginHorizontal: 35, fontFamily :'Montserrat', marginVertical: 5 }}>{item.review}<Text style={{ color: '#FFB441' }}>Read more..</Text></Text>
                                    </View>

                                )}
                            </View>
                            : null
            }

        </ScrollView>

    )
}



export default Specialist
const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        flex: 1,
        height: '100%',
        top: 0,

        position: 'relative',
        backgroundColor: '#000'
    },
    reviewWrapper: {
        width: 380,
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor: '#323232',
        borderRadius: 10,


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
    tabBtn: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tabBtnTxt: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        backgroundColor: "#000000",
        borderWidth: 1,
        borderColor: "#323232",
        paddingHorizontal: 5,
        borderRadius: 5,
        marginHorizontal: 5
    },
    servicestab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        marginVertical: 5,
        borderColor: "#323232",
        borderRadius: 8
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
        marginHorizontal: 12
    },
    heading: {
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
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#000',
        fontFamily: "Roboto-SemiBold",
    },
    servicetitle: {
        color: '#fff',
        fontFamily: "Montserrat",
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: '600',
        fontSize: 14
    },
    subHeading: {
        color: '#fff',
        fontFamily: "Montserrat",
        marginTop: 15,
        fontWeight: '500',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        lineHeight: 19.5,
        left: 6
    },
    smTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(4.5),
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    regTxt: {
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
        marginHorizontal: 2,
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
        alignItems: 'flex-end',
        width: 70,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: themeColor,
    },
    secondaryBtnTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        color: themeColor,
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
    },
    location: {
        flexDirection: 'row',
        left: 4
    },
    locationTxt: {
        color: "#fff",
        fontSize: 12,
        alignItems: 'center'
    },
    rating: {
        flexDirection: 'row',
        marginTop: 5,
        left: 6

    },
    review: {
        color: '#fff',
        size: 14
    },
    tabBar: {
        flexDirection: 'row',

        paddingTop: StatusBar.currentHeight,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#000',
        margin: 20,
    },

})