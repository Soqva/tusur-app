import React from 'react';
import {View, Text, StyleSheet} from "react-native";

export const Header = ({title, style}) => {
    return (
        <View style={style}>
            <Text style={styles.text}>This is a {title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        paddingTop: 20,
    },
});
