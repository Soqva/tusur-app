import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

export const SettingsScreen = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>There is your settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    text: {
        fontSize: 22,
    }
});
