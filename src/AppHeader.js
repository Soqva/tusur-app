import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export const AppHeader = () => {
    return (
        <View style={styles.header}>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 10,
        height: 74,
        width: '100%',
        backgroundColor: '#4285F4',
    }
});
