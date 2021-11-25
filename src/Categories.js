import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export const Categories = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>fss</Text>
            </View>
            <View>
                <Text>sdsa</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
    },
    header: {
        marginBottom: 10,
        height: 74,
        width: '100%',
        backgroundColor: '#4285F4',
    },
});
