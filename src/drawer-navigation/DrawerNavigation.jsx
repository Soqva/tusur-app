import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from "./navigation-test-screens/HomeScreen";
import {NotificationsScreen} from "./navigation-test-screens/NotificationsScreen";
import {getHeaderTitle} from "@react-navigation/elements";
import {Header} from "./navigation-test-screens/Header";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerType: "front",
                    drawerStyle: {
                        backgroundColor: "aqua",
                        width: 240,
                    },
                    drawerContentContainerStyle: {
                        backgroundColor: "white"
                    },
                    headerStyle: {
                        height: 80,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "aqua"
                    },
                    header: ({route, options}) => {
                        const title = getHeaderTitle(options, route.name);
                        return <Header title={title} style={options.headerStyle}/>;
                    },
                }}
                initialRouteName="Home"
                backBehavior="history">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
