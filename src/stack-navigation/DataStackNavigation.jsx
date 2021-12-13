import React from 'react';
import {AreasScreen} from "../screens/AreasScreen";
import {TechnologiesScreen} from "../screens/TechnologiesScreen";
import {QuestionsScreen} from "../screens/QuestionsScreen";
import {DrawerNavigation} from "../drawer-navigation/DrawerNavigation";

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
            />
            <Stack.Screen
                name="QuestionsScreen"
                component={QuestionsScreen}
            />
        </Stack.Navigator>
    );
};

const DataStackNavigatorScreenOptions = {
    headerShown: true,
}
