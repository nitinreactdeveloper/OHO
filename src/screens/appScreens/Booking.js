import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/Button";
import SpecialistData from "../../Data/specialist";


const Booking = ({ navigation }) => {





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
        <View style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.month}>August</Text>

                <View style={styles.Days}>
                    <Text style={styles.Day}>Mon</Text>
                    <Text style={styles.Day}>Tue</Text>
                    <Text style={styles.Day}>Wed</Text>
                    <Text style={styles.Day}>Thu</Text>
                    <Text style={styles.Day}>Fri</Text>
                    <Text style={styles.Day}>Sat</Text>
                    <Text style={styles.Day}>Sun</Text>
                </View>


                <View style={styles.Datecontainer}>
                    <TouchableOpacity >
                        <Text style={styles.date}>12</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={styles.date}>13</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={styles.date}>14</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={styles.date}>15</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={styles.date}>16</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={styles.date}>17</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={styles.date}>18</Text>
                    </TouchableOpacity>





                </View>

                <Text style={{ color: '#fff', margin: 10, left: 8 }}>Choose Specialist</Text>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={SpecialistData}
                    renderItem={renderitem}
                />

                <Text style={{ color: '#fff', margin: 10, left: 8 }}>Available Slot</Text>


                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} >
                    <TouchableOpacity style={styles.slot}><Text style={{ color: '#fff' }}>7:00Am - 8:00Am</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.slot}><Text style={{ color: '#fff' }}>7:00Am - 8:00Am</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.slot}><Text style={{ color: '#fff' }}>7:00Am - 8:00Am</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.slot}><Text style={{ color: '#fff' }}>7:00Am - 8:00Am</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.slot}><Text style={{ color: '#fff' }}>7:00Am - 8:00Am</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.slot}><Text style={{ color: '#fff' }}>7:00Am - 8:00Am</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.slot}><Text style={{ color: '#fff' }}>7:00Am - 8:00Am</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.slot}><Text style={{ color: '#fff' }}>7:00Am - 8:00Am</Text></TouchableOpacity>
                </View>


            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', bottom: 8 }}>

                <Button title={'Proceed'} />
            </View>

        </View>
    )
}


export default Booking;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },

    card: {
        margin: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#323232",
        paddingVertical: 10
    },
    slot: {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        paddingVertical: 8,
        left: 10,
        borderRadius: 5,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        marginBottom: 5,
        margin: 3,
        justifyContent: 'center'
    },
    month: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',

    },
    Days: {
        flexDirection: 'row'
    },
    Day: {
        color: '#fff',
        margin: 15
    },
    Datecontainer: {
        flexDirection: "row"
    },
    date: {
        color: "#fff",
        marginHorizontal: 19
    },
    SpecialistDataWrapper: {
        borderColor: 'green',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(255, 255, 255, 0.2);',
        paddingBottom: 10,
        // marginVertical: 10
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
})