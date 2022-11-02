import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/BaseScreen';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import Button from '../../components/Button'

const Profile = ({ navigation }) => {

    return (
        <BaseScreen title={''} navigation={navigation}
            renderChild={Content({ navigation, })}
        
        />
    )
}

const Content = ({ navigation, }) => {
    const [username, setUsername] = useState("Nitin")
    const [email, setEmail] = useState('xyz@gmail.com')
    const { logout } = useContext(AuthContext)

    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}>
            
               

           
            
             

            <Button title={'Logout'} width={'100%'} onPress={() => logout()} />
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#000'
    },
    UserProfile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dashboardContet:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: '100%',
        backgroundColor: '#f4ebeb',
        alignSelf: 'center',
        padding: 5,
        borderRadius: 10,
        margin: 8   
    },
    dashboardTextContet:{
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 18,
        fontWeight:'400'
    },
    dashBoard:{
        // backgroundColor: 'green',
        padding: 20,
    }
})