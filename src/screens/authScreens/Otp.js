import React, { useState, useContext, useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, TextInput, ScrollView, Alert, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import Button from '../../components/Button'

const Otp = ({ navigation }) => {
    

    
    const [otp1, setotp1] = useState()
    const [otp2, setotp2] = useState()
    const [otp3, setotp3] = useState()
    const [otp4, setotp4] = useState()
    const [errors, setErrors] = useState({})

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()


    const validate = () => {
        let errors = {}
        if (!otp1) {
            errors.otp1 = "otp1 is required"
            setErrors(errors)
           
            return false
        }
        else if (!otp2) {
            errors.otp2 = "otp2 is required"
            setErrors(errors)
           
            return false
        }
        else if (!otp3) {
            errors.otp3 = "otp3 is required"
            setErrors(errors)
         
            return false
        }
        else if (!otp4) {
            errors.otp4 = "otp4 is required"
            setErrors(errors)
           
            return false
        }
        else {
            setErrors({})
            return true
        }
    }

    const handleSubmit=()=>{
        const isValid = validate()
        if(isValid){
            // verifyOtp(otp1+otp2+otp3+otp4)
            navigation.navigate('Location')
        } 
    }


    useEffect(() => {
        console.log( 'params data')
       
    }, [])

    return (
        <View>
            <StatusBar backgroundColor={"#000"} />
            <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
            <View style={{ flex: .4,   width: '100%', }}>
            <Image source={require('../../assets/Images/logo.png')} style={styles.logoImage} />
            <Image source={require('../../assets/Images/scissors.png')} style={styles.InsideImage} />
            <Text style={ { marginBottom: 40, textAlign: 'center', color: "#fff",  fontSize: 20.16, fontFamily: 'Rufina', alignItems: 'center',  width:'100%', left: 20, height:29 }}>OHO</Text>
            <Text style={{
                color: '#fff', height: 22, fontSize: 16, fontFamily: "Roboto", fontWeight: '600',
                lineHeight: 21.75,
                left: 15,
                textAlign: 'center',
                width: '100%'
            }}>Welcome to oho look</Text>
            <Text style={{
                height: 22, fontSize: 16, fontFamily: "Roboto", fontWeight: '600',
                lineHeight: 21.75,
                textAlign: 'center',
                color: '#c4c4c4',
                left: 10,
                top: 5

            }}>Log in and go to the dashboard</Text>


        </View>
                <View style={styles.inputWrapper}>
                <TextInput
                    ref={ref1}
                    style={[styles.otpInput, { borderColor: errors.otp1 ? 'red' : '#C4C4C4' }]}
                    name="otp" value={otp1} placeholder='1'
                    keyboardType='number-pad'
                    maxLength={1}
                    placeholderTextColor='#C4C4C4'
                    onChangeText={(text) => {
                        setotp1(text)
                        
                    }}>
                </TextInput>
                <TextInput
                    ref={ref2}
                    style={[styles.otpInput, { borderColor: errors.otp2 ? 'red' : '#C4C4C4' }]}
                    name="otp" value={otp2} placeholder='1'
                    keyboardType='number-pad'
                    maxLength={1}
                    placeholderTextColor='#C4C4C4'
                    onChangeText={(text) => {
                        setotp2(text)
                       
                    }}>
                </TextInput>
                <TextInput
                    ref={ref3}
                    style={[styles.otpInput, { borderColor: errors.otp3 ? 'red' : '#C4C4C4' }]}
                    name="otp" value={otp3} placeholder='1'
                    keyboardType='number-pad'
                    maxLength={1}
                    placeholderTextColor='#C4C4C4'
                    onChangeText={(text) => {
                        setotp3(text)
                      
                    }}>
                </TextInput>

                <TextInput
                    ref={ref4}
                    style={[styles.otpInput, { borderColor: errors.otp4 ? 'red' : '#C4C4C4' }]}
                    name="otp" value={otp4} placeholder='1'
                    keyboardType='number-pad'
                    maxLength={1}
                    placeholderTextColor='#C4C4C4'
                    onChangeText={(text) => {
                        setotp4(text)
                       
                    }}>
                </TextInput>

                </View>
                <View style={styles.checkboxContainer}>
                    <Text style={styles.regTxt}>Resend Otp </Text>
                </View>
                <TouchableOpacity style={[styles.whiteBtn]}
                >
                    <Text style={styles.subHeading}>Log in using<Text style={[styles.subHeading, {
                        color: '#FC9918',
                        fontFamily: "Poppins-Bold",
                    }]}> Password</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.Trouble]}
                >
                    <Text style={styles.subHeading}>Having trouble in logging in?<Text style={[styles.subHeading, {
                        color: '#FC9918',
                        fontFamily: "Poppins-Bold",
                    }]}> Get Help</Text></Text>
                </TouchableOpacity>



                    <View style={styles.button}>
                <Button
                    width={'90%'}
                    title={"Continue"}
                    onPress={()=>{handleSubmit()}} />
                    </View>
                <View style={[styles.term]}
                >
                    <Text style={styles.termHeading}>By Signing up, you agree to out
                        <Text style={[styles.termHeading, {
                            color: '#FC9918',
                            fontFamily: "Poppins",
                        }]}> Term and Condition</Text></Text>
                </View>








            </ScrollView>
        </View>

    )
}

export default Otp

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#000'
    },
    logoImage: {
        width: 129,
        height: 83,
        top: 84,
        left: 134,

    },
    InsideImage: {
        width: 45.34,
        height: 45.34,
        top: 9,
        left: 180.7
    },
    heading: {
        fontSize: 18,
        color: '#000',
        fontFamily: "Roboto-Bold",
        marginBottom: 5,
    },
    subHeadingBold: {
        fontSize: 16,
        color: '#000',
        fontFamily: "Roboto-SemiBold",
    },
    subHeading: {
        fontSize: 16,
        color: '#fff',
        fontFamily: "Poppins",
        
    },
    termHeading:{
        fontSize: 16,
        color: '#fff',
        fontFamily: "Poppins",
        marginHorizontal: 40,
        textAlign: 'center',
        lineHeight: 22.51,
        fontWeight: '400'
    },
    smTxt: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    regTxt: {
        fontSize: 14,
        color: '#FC9918',
        fontFamily: 'Roboto-Regular'
    },
    fontMedium: {
        fontFamily: 'Roboto-Medium'
    },
    rowAlign: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },


    checkboxContainer: {
        flexDirection: "row",
        marginLeft: 16,
        // borderWidth:1,borderColor:'#fff'
    },
    checkbox: {
        alignSelf: "center",
        display: 'flex',
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#fff',
        width: 25,
        height: 25,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FC9918'
    },

    forgotBtnWrapper: {
        // alignSelf: 'flex-end',
    },
    forgotBtn: {
        fontSize: 14,
        // color: '#fc9918'
        color: '#FC9918',
        fontFamily: "Roboto-Medium",
    },

    orWrapper: {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 40,
    },
    orline: {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        borderTopColor: '#aaa',
        borderTopWidth: 1,
        width: '30%',
    },
    orTxt: {
        // marginTop: -16.5,
        fontSize: 20, fontWeight: '600',
        backgroundColor: 'transparent',
        color: '#aaa',
        width: 50,
        textAlign: 'center'
    },

    whiteBtn: {
        backgroundColor: 'transparent',
        marginTop: 5,
        fontWeight: 500,
        color: "#fe0000",
        width: '100%',
        marginLeft: 16
       
    },
    Trouble: {
        backgroundColor: 'transparent',
        marginTop: 5,
        fontWeight: 500,
        color: "#fe0000",
        marginBottom: 40,
        width: '100%',
        marginLeft: 16
    },

    fbButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 45,
        borderRadius: 6,
        backgroundColor: '#3228C5',
        marginBottom: 15,
    },
    socialButton: {

        marginTop: 20,

    },
    googleIcon: {
        width: 22, height: 22,
        marginRight: 20
    },
    socialBtnTxt: {
        fontSize: 16, fontWeight: '700',
        color: '#000'
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%', height: 90,
        marginBottom: 20,
        borderRadius: 10,
        //    borderWidth: 2,
        borderColor: '#000'
    },
    otpInput: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 55,
        height: 55,
        textAlign: 'center',
        paddingHorizontal: 5,
        fontSize: 18,
        color: '#fff',
        borderBottomWidth: 1,
        borderColor: "#c4c4c4"
        // fontFamily: "Poppins-Regular",
    },
    term: {
        backgroundColor: 'transparent',
        marginTop: 5,
        fontWeight: 500,
        color: "#fe0000",
        marginVertical: 25,
        width: '100%',
        alignItems: 'center',
        fontFamily: "Poppins"
        // marginBottom: 15
    },
    button:{
        marginTop: 50
    },
    
})
