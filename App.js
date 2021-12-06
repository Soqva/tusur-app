import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectionMenu} from "./src/drawer-navigation/SelectionMenu";
import {DrawerNavigation} from "./src/drawer-navigation/DrawerNavigation";
import {AppHeader} from "./src/drawer-navigation/AppHeader";

export default function App() {
    return (
        <DrawerNavigation>
            <View style={styles.container}>
            </View>
        </DrawerNavigation>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
