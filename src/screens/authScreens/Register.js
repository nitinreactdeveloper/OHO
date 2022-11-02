import React, { useState, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import Button from '../../components/Button'
import Input from '../../components/Input'
import BaseScreen from '../../components/BaseScreen'
import Loader from '../../components/Loader'
import { AuthContext } from '../../navigation/AuthProvider'


const themeColor =
    '#f33'

const errorColor ="#f33"


const Register = ({ navigation }) => {

    return (
        <BaseScreen  renderChild={Content({ navigation })}
            navigation={navigation} />
    )
}

const Content = ({ navigation }) => {


    const { register, fetching, setLoading } = useContext(AuthContext)

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [mobile, setmobile] = useState()
    const [password, setPassword] = useState()
    const [securePwd, setsecurePwd] = useState(true)
    const [errors, setErrors] = useState({})
    const [isSelected, setIsSelected] = useState(false)

    const validate = () => {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
        let errors = {}
        if (!email) {
            errors.email = "Email is required"
            setErrors(errors)
            return false
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
            setErrors(errors)
            return false
        }
        else if (!mobile) {
            errors.mobile = "Mobile is required"
            setErrors(errors)
            return false
        }
        else if (!/^[0]?[789]\d{9}$/.test(mobile)) {
            errors.mobile = 'Invalid mobile no';
            setErrors(errors)
            return false
        }
        else if (!password) {
            errors.password = "Password is required"
            setErrors(errors)
            return false
        }
        else if (!strongRegex.test(password)) {
            errors.password = 'Password must have at least 8 digits, 1 Capital letter, 1 small letter, 1 number and 1 special character.';
            setErrors(errors)
            return false
        }
        else if (!isSelected) {
            errors.selected = 'Accept the terms and conditions for getting started'
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
            // register(name, email, mobile, password, navigation)

            register(name, email, mobile, password, navigation)
            navigation.navigate('Gender')
        }
    }



    return (

        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
            <View >
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

                }}>Create your account</Text>
            </View>


            <View style={{
                marginTop: 20
            }}>
                <Text style={[styles.subHeading, { marginVertical: 10, color: "#fff", marginLeft: 16 }]}>Email</Text>


                <Input
                    name="email" value={email} placeholder='Enter your email'
                    error={errors.email ? true : false}
                    borderRadius={8}
                    // width={'90%'}
                    keyboardType='email-address'
                    onChangeText={(text) => {
                        setEmail(text)
                    }}>
                </Input>
                {errors.email ?
                    <Text style={{ color: errorColor, marginBottom: 5, marginTop: 5}}>{errors.email}</Text>
                    : null
                }

                <Text style={[styles.subHeading, { marginVertical: 10, color: "#fff", marginLeft: 16 }]}>Mobile</Text>


                <Input
                    name="mobile" value={mobile} placeholder='Enter 10 digit Mobile No' keyboardType='phone-pad'
                    error={errors.mobile ? true : false}
                    borderRadius={8}
                    // width={'90%'}
                    onChangeText={setmobile}>
                </Input>
                {errors.mobile ?
                    <Text style={{ color: errorColor, marginBottom: 5, marginTop: 5 }}>{errors.mobile}</Text>
                    : null
                }



                <Text style={[styles.subHeading, { marginVertical: 10, color: "#fff", marginLeft: 16 }]}>Password</Text>
                <Input
                    name="password" value={password} placeholder='Password' keyboardType='default'
                    error={errors.password ? true : false}
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
                    <Text style={styles.subHeading}>I agree to the<Text style={[styles.subHeading, {
                        color: '#FC9918',
                        fontFamily: "Poppins-Bold",
                    }]}> Term & Conditions</Text></Text>
                </View>
                


            </View>
            {errors.selected ?
                    <Text style={{ color: errorColor, marginBottom: 5, marginTop: 5, marginLeft: 16 }}>{errors.selected}</Text>
                    : null
                }




            <Button

                // width={'90%'}
                onPress={() => { handleSubmit() }}
                title={"Sign up"} />
            <TouchableOpacity style={[styles.whiteBtn]}
                onPress={() => { navigation.navigate('Login') }}
            >
                <Text style={styles.subHeading}>Are you already member?<Text style={[styles.subHeading, {
                    color: '#FC9918',
                    fontFamily: "Poppins-Bold",
                }]}> Log in</Text></Text>
            </TouchableOpacity>

            <View style={styles.socialButton}>
                <Button
                  
                    backgroundColor={'#3228C5'}
                    title={"Continue with facebook"} />
                <Button
                   
                    backgroundColor={'#ffffff'}
                    color={'#000000'}
                    title={"Continue with google"} />
            </View>

        </ScrollView>

    )
}

export default Register

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
        marginTop: 6,
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
        
    },
    forgotBtn: {
        fontSize: 14,
    
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
     
        fontSize: 20, fontWeight: '600',
        backgroundColor: 'transparent',
        color: '#aaa',
        width: 50,
        textAlign: 'center'
    },

    whiteBtn: {
        backgroundColor: 'transparent',
        marginTop: 3,
        fontWeight: 500,
        color: "#fe0000",
        width: '100%',
        alignItems: 'center',
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