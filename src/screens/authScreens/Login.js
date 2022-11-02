import React, { useState, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, Platform, PixelRatio, View, TextInput, ScrollView, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/BaseScreen'

const errorColor =
    '#fe0000'

const darkBlue = '#2C467B'

const Login = ({ navigation }) => {

    return (
        <BaseScreen navigation={navigation} renderChild={Content({ navigation })} leftButton={false}

            height={'100%'} />
    )
}

const Content = ({ navigation }) => {
    const { login, fetching, setFetching } = useContext(AuthContext)

    const [email, setemail] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState({})
    const [isSelected, setIsSelected] = useState(false)

    const validate = () => {
        let errors = {}
        if (!email) {
            errors.email = "email is required"
            setErrors(errors)
            return false
        }

        else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email, use the format - abc@xyz.com'
            setErrors(errors)
            return false
        }

        else if (!password) {
            errors.password = "Password is required"
            setErrors(errors)
            return false
        }

        else {
            setErrors({})
            return true
        }
    }

    const handleSubmit = () => {
        let isValid = validate()
        if (isValid === true) {
            login(email, password,)

        }
    }


    return (

        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
            <View style={{ flex: .4, width: '100%', }}>
                <Image source={require('../../assets/Images/logo.png')} style={styles.logoImage} />
                <Image source={require('../../assets/Images/scissors.png')} style={styles.InsideImage} />
                <Text style={{ marginBottom: 40, textAlign: 'center', color: "#fff", fontSize: 20.16, fontFamily: 'Rufina', alignItems: 'center', width: '100%', left: 20, height: 29 }}>OHO</Text>
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
            <View style={{
                marginTop: 10
            }}>
                <Text style={[styles.subHeading, { marginVertical: 10, color: "#fff", marginLeft: 16 }]}>Email</Text>


                <Input
                    name="email" value={email} placeholder='Enter your email'
                    error={errors.email ? true : false}
                    // width={'90%'}
                    borderRadius={8}
                    // color={'#fff'}
                    keyboardType='email-address'
                    onChangeText={(text) => {
                        setemail(text)
                    }}>
                </Input>
                {errors.email ?
                    <Text style={{ color: errorColor, marginBottom: 5, marginTop: 5 }}>{errors.email}</Text>
                    : null
                }
                <Text style={[styles.subHeading, { marginVertical: 10, color: "#fff", marginLeft: 16 }]}>Password</Text>

                <Input
                    name="password" value={password} placeholder='Enter Password'
                    keyboardType='default' secureTextEntry={true}
                    // width={'90%'}
                    borderRadius={8}
                    onChangeText={setPassword}>
                </Input>
                {errors.password ?
                    <Text style={{ color: errorColor, marginBottom: 5, marginTop: 5 }}>{errors.password}</Text>
                    : null
                }
            </View>

            <View style={styles.rowAlign}>
                <View style={styles.checkboxContainer}>
                    <TouchableOpacity style={styles.checkbox} onPress={() => setIsSelected(!isSelected)}>
                        {isSelected ?
                            <MaterialIcons name='check' color="#F5CF04" size={20}></MaterialIcons>
                            : null
                        }
                    </TouchableOpacity>
                    <Text style={styles.regTxt}>Remember me </Text>
                </View>

                <TouchableOpacity style={styles.forgotBtnWrapper}
                    onPress={() => { navigation.navigate('Forgot') }}
                >
                    <Text style={styles.forgotBtn}>Forgot Password ?</Text>
                </TouchableOpacity>
            </View>




            <Button
                onPress={() => { handleSubmit() }}
                title={"login"} />
            <TouchableOpacity style={[styles.whiteBtn]}
                onPress={() => { navigation.navigate('Register') }}
            >
                <Text style={styles.subHeading}>If you don't have an account?<Text style={[styles.subHeading, {
                    color: '#FC9918',
                    fontFamily: "Poppins-Bold",
                }]}> Sign Up</Text></Text>
            </TouchableOpacity>

            <View style={styles.socialButton}>
                <Button
                    // width={'90%'}
                    backgroundColor={'#3228C5'}
                    title={"Continue with facebook"} />
                <Button
                    // width={'90%'}
                    backgroundColor={'#ffffff'}
                    color={'#000000'}
                    title={"Continue with google"} />
            </View>

        </ScrollView>

    )
}


export default Login

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
        fontFamily: "Roboto-Medium",
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
        flexDirection: "row", justifyContent: 'center', alignItems: 'center',
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
        marginVertical: 25,
        width: '100%',
        alignItems: 'center',
        // marginBottom: 15
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
})
