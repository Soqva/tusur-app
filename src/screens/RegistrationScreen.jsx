import React from 'react';
import {View, Image, Text, TextInput,Animated, TouchableOpacity, StyleSheet} from "react-native";
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const RegistrationScreen = ({navigation}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={require("../assets/Avatar.png")}
                />
            </View>
            <View>
                <TextInput style={styles.textField} placeholder="Логин"/>
                <TextInput style={styles.textField} placeholder="Почта"/>
                <TextInput style={styles.textField} placeholder="Пароль"/>
                <TextInput style={styles.textField} placeholder="Повторите пароль"/>
                <AnimatedTouchable style={styles.button} onPress={() => navigation.reset({
                    index: 0,
                    routes: [{name: 'DrawerNavigationRoutes'}]
                })}>
                    <Text style={styles.text}>ОК</Text>
                </AnimatedTouchable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    avatarContainer: {
        paddingTop: 60,
        paddingBottom: 50,
    },
    avatar: {
        height: 170,
        width: 170,
    },
    textField: {
        height: 55,
        width: 280,
        borderColor: '#D2D4D3',
        borderWidth: 1,
        padding: 20,
        marginBottom: 23,
    },
    button: {
        borderColor: '#D2D4D3',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
});
