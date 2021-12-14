import React from 'react';
import {StyleSheet, View, TouchableOpacity} from "react-native";
import {Image} from "react-native";

export const AppHeader = () => {
    return (
        <View
            style={styles.header}
        >
            <TouchableOpacity>
                <Image
                    source={require('../assets/menu.png')}
                    style={styles.menuBurger}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 10,
        height: 74,
        width: '100%',
        backgroundColor: '#4285F4',
        paddingLeft: 29,
        paddingTop: 29,
        paddingRight: 29,
        paddingBottom: 29,
    },
    menuBurger: {
        height: 19,
        width: 25,
    }
});
