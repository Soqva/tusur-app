import React from 'react';
import {View, StyleSheet, Text} from "react-native";

export const NotificationsScreen = ({navigation}) => {
    return (
        <View style={styles.button}>
            <Text>This is a notification screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
});
