import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, AppState } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons'
import Feather from 'react-native-vector-icons/dist/Feather'


import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons'

import { AuthContext } from './AuthProvider';
import HomeScreen from '../screens/appScreens/HomeScreen';
import NearbySaloon from '../screens/appScreens/NearbySaloon';
import Profile from '../screens/appScreens/Profile'
import Transactions from '../screens/appScreens/Transactions';
import Notifications from '../screens/appScreens/Notifications';
import Specialist from '../screens/appScreens/specialist';
import Booking from '../screens/appScreens/Booking';
const { width, height } = Dimensions.get('window')

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const activeTabColor =
    '#FFB441'
const nonActiveTabColor =
    '#C4C4C4'
const backgroundTabColor =
    '#fff'

const AppStack = () => {

    const { userToken, userDetails } = useContext(AuthContext)

    return (
        <Stack.Navigator initialRouteName={"BottomTabNav"}>
            <Stack.Screen
                name="BottomTabNav"
                component={BottomTabNav}
                options={{
                    headerShown: false,
                }}>
            </Stack.Screen>

            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Transactions" component={Transactions} options={{ headerShown: false }} />
            <Stack.Screen name='Specialist' component={Specialist} options={{ headerShown: false }} />
            <Stack.Screen name='Notifications' component={Notifications} options={{ headerShown: false }} />
            <Stack.Screen name='Location' component={NearbySaloon} options={{ headerShown: false }} />
            <Stack.Screen name='Booking' component={Booking} options={{headerShown: false}} />
         </Stack.Navigator>
    )
}

export default AppStack

// const DrawerNavigator = ({ navigation }) => (
//     <Drawer.Navigator initialRouteName="Home"
//         drawerContent={props => <DrawerContent{...props} />}
//     >
//         <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

//     </Drawer.Navigator>
// )

const BottomTabNav = ({ navigation }) => (

    <Tab.Navigator initialRouteName="Drawer"
        screenOptions={{
            keyboardHidesTabBar: true,
            showLabel: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                // elevation: 5,
                backgroundColor: "#323232",
                // borderTopWidth: 1,
                borderTopColor: "#f9f9f9",
                height: 60,
            }
        }}>
        <Tab.Screen name="Home" component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcons name="home" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></MaterialIcons>
                            {focused ?
                                <Text style={{
                                    color: focused ? activeTabColor : nonActiveTabColor,
                                    fontSize: 12
                                }}>Home</Text>
                                : null}
                        </View>
                    )
                },
            }} />
        <Tab.Screen name="Location" component={NearbySaloon}
            options={{
                headerShown: false,
                headerStyle: { backgroundColor: "#000", },
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <EvilIcons name="location" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></EvilIcons>
                            {focused ?
                                <Text style={{
                                    color: focused ? activeTabColor : nonActiveTabColor,
                                    fontSize: 12
                                }}>Location</Text>
                                : null}
                        </View>

                    )
                },
            }} />
        <Tab.Screen name="Transactions" component={Transactions}
            options={{
                headerShown: false,
                headerTitleContainerStyle: { backgroundColor: "#000" },
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <EvilIcons name="calendar" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></EvilIcons>
                            {focused ?
                                <Text style={{
                                    color: focused ? activeTabColor : nonActiveTabColor,
                                    fontSize: 12
                                }}>Appointment</Text>
                                : null}
                        </View>

                    )
                },
            }} />
        <Tab.Screen name="Notifications" component={Notifications}
            options={{
                headerShown: false,
                headerTitleContainerStyle: { backgroundColor: "#000" },
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcons name="message" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></MaterialIcons>
                            {focused ?
                                <Text style={{
                                    color: focused ? activeTabColor : nonActiveTabColor,
                                    fontSize: 12
                                }}>Message</Text>
                                : null}
                        </View>

                    )
                },
            }} />
        <Tab.Screen name="Profile" component={Profile}
            options={{
                headerShown: false,
                headerTitleContainerStyle: { backgroundColor: "#000" },
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Feather name="user" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></Feather>
                            {focused ?
                                <Text style={{
                                    color: focused ? activeTabColor : nonActiveTabColor,
                                    fontSize: 12
                                }}>Profile</Text>
                                : null}
                        </View>

                    )
                },
            }} />
    </Tab.Navigator>
)


const styles = StyleSheet.create({})