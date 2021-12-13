import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import {AuthStackNavigation} from "./src/stack-navigation/AuthStackNavigation";
import {DataStackNavigation} from "./src/stack-navigation/DataStackNavigation";
import {DrawerNavigation} from "./src/drawer-navigation/DrawerNavigation";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="AuthStackNavigation"
                screenOptions={appStackNavigatorScreenOptions}>
                <Stack.Screen
                    name="Auth"
                    component={AuthStackNavigation}/>
                <Stack.Screen
                    name="DrawerNavigationRoutes"
                    component={DrawerNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const appStackNavigatorScreenOptions = {
    headerShown: false,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
