import React from 'react';
import {Button, View, StyleSheet} from "react-native";

export const NotificationsScreen = ({navigation}) => {
    return (
        <View style={styles.button}>
            <Button
                onPress={() => navigation.navigate("Home")}
                title="Go back home"
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
