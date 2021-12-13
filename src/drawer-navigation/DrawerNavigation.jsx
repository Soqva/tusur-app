import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AreasScreen} from "../screens/AreasScreen";
import {TechnologiesScreen} from "../screens/TechnologiesScreen";
import {QuestionsScreen} from "../screens/QuestionsScreen";
import {DataStackNavigation} from "../stack-navigation/DataStackNavigation";
import {LoginScreen} from "../screens/LoginScreen";
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
            initialRouteName="AreasScreen"
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
