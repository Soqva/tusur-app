import React from 'react';
import {StyleSheet, View, Text} from "react-native";

export const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.button}>
            <Text>This is a home screen</Text>
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
