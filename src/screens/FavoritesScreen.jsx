import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

export const FavoritesScreen = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>This is your favorites questions</Text>
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
