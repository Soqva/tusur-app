import React from 'react';
import {Alert, Button, Image, StyleSheet, Text, View, TextInput, Animated, TouchableOpacity} from 'react-native';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export function Login(){
    return(
        <View style={styles.wrapper}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={require("../Avatar.png")}
                />
            </View>

            <View>
                <TextInput
                    style={styles.textField}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Логин'
                />
                <TextInput
                    style={styles.textField}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    placeholder='Пароль'
                />
            </View>

            <View style={styles.separator}>
                <Text style={styles.text}>ИЛИ</Text>
            </View>

            <View>
                <AnimatedTouchable style={styles.buttonViaGoogle} onPress={() => Alert.alert('Google')}>
                    <Text style={styles.text}>Войти через Google</Text>
                </AnimatedTouchable>

                <AnimatedTouchable style={styles.buttonViaTusur} onPress={() => Alert.alert('TUSUR')}>
                    <Text style={{color: '#000000'}}>Войти через ТУСУР</Text>
                </AnimatedTouchable>

                <AnimatedTouchable style={styles.buttonRegistration} onPress={() => Alert.alert('Registration')}>
                    <Text style={styles.text}>Регистрация</Text>
                </AnimatedTouchable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatarContainer: {
        paddingTop: 60,
        paddingBottom: 50,
    },

    avatar: {
        height: 170,
        width: 170,
    },

    text: {
        color: '#D2D4D3',
//        fontSize: 14,
    },

    separator: {
        width: 280,
        height: 'auto',
        alignItems: 'center',
        marginBottom: 23,
//        borderWidth: 1,
//        borderColor: '#000000',
    },

    textField: {
        width: 280,
        height: 55,
        borderColor: '#D2D4D3',
        borderWidth: 1,
        padding: 20,
        marginBottom: 23,
    },

    buttonViaGoogle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 55,
        backgroundColor: '#4285F4',
        padding: 20,
        marginBottom: 23,
    },

    buttonViaTusur: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 55,
        backgroundColor: '#D2D4D3',
        padding: 20,
        marginBottom: 10,
    },

    buttonRegistration: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 55,
        padding: 20,
//        borderColor: '#000000',
//        borderWidth: 1,
        marginBottom: 23,
    }
});