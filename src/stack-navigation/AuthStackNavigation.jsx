import React from 'react';
import {LoginScreen} from "../screens/LoginScreen";
import {RegistrationScreen} from "../screens/RegistrationScreen";

const {createStackNavigator} = require("@react-navigation/stack");

const Stack = createStackNavigator();

export const AuthStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={authStackNavigatorScreenOptions}>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegistrationScreen}
            />
        </Stack.Navigator>
    );
};

const authStackNavigatorScreenOptions = {
    headerShown: true,
}
