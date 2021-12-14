import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

export const ShareScreen = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>You can share some tasks with your friends</Text>
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
