import React from 'react';
import {Button, StyleSheet, View} from "react-native";

export const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.button}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
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