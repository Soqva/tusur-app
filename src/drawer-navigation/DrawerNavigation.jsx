import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from "../screens/HomeScreen";
import {NotificationsScreen} from "../screens/NotificationsScreen";
import {SelectionMenu} from "../SelectionMenu";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={drawerNavigatorScreenOptions}
            initialRouteName="HomeScreen"
            backBehavior="history">
            <Drawer.Screen
                name="HomeScreen"
                component={SelectionMenu}/>
            <Drawer.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}/>
        </Drawer.Navigator>
    );
}

const drawerNavigatorScreenOptions = {
    drawerType: "front",
    drawerStyle: {
        backgroundColor: "aqua",
        width: 240,
    },
    drawerContentContainerStyle: {
        backgroundColor: "white"
    },
    headerShown: false,
}
