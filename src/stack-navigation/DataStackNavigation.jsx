import React from 'react';
import {AreasScreen} from "../screens/AreasScreen";
import {TechnologiesScreen} from "../screens/TechnologiesScreen";
import {QuestionsListScreen} from "../screens/QuestionsListScreen";
import {QuestionsScreen} from "../screens/QuestionsScreen";

const {createStackNavigator} = require("@react-navigation/stack");

const Stack = createStackNavigator();

export const DataStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="AreasScreen"
            screenOptions={DataStackNavigatorScreenOptions}>
            <Stack.Screen
                name="AreasScreen"
                component={AreasScreen}
            />
            <Stack.Screen
                name="TechnologiesScreen"
                component={TechnologiesScreen}
                options={{gestureEnabled: true}}
            />
            <Stack.Screen
                name="QuestionsListScreen"
                component={QuestionsListScreen}
                options={{gestureEnabled: true}}
            />
            <Stack.Screen
                name="QuestionsScreen"
                component={QuestionsScreen}
                options={{gestureEnabled: true}}
            />
        </Stack.Navigator>
    );
};

const DataStackNavigatorScreenOptions = {
    headerShown: false,
}

