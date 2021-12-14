import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DataStackNavigation} from "../stack-navigation/DataStackNavigation";
import {ProfileScreen} from "../screens/ProfileScreen";
import {FavoritesScreen} from "../screens/FavoritesScreen";
import {NotificationsScreen} from "../screens/NotificationsScreen";
import {ShareScreen} from "../screens/ShareScreen";
import {SettingsScreen} from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={drawerNavigatorScreenOptions}
            initialRouteName="Tasks"
            backBehavior="history">
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
            />
            <Drawer.Screen
                name="Tasks"
                component={DataStackNavigation}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesScreen}
            />
            <Drawer.Screen
                name="Notifications"
                component={NotificationsScreen}
            />
            <Drawer.Screen
                name="Share"
                component={ShareScreen}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
            />
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
