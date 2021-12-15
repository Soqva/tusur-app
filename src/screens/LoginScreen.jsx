import React from 'react';
import {Alert, Image, StyleSheet, Text, View, TextInput, Animated, TouchableOpacity, Dimensions} from 'react-native';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export function LoginScreen({navigation}){
    return(
        <View style={styles.wrapper}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={require("../assets/Avatar.png")}
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
                <AnimatedTouchable style={styles.buttonViaGoogle} onPress={() => navigation.reset({
                    index: 0,
                    routes: [{name: 'DrawerNavigationRoutes'}]
                })}>
                    <Text style={styles.text}>Войти</Text>
                </AnimatedTouchable>

                <AnimatedTouchable style={styles.buttonViaTusur} onPress={() => Alert.alert('TUSUR')}>
                    <Text style={{color: '#000000'}}>Войти через ТУСУР</Text>
                </AnimatedTouchable>

                <AnimatedTouchable style={styles.buttonRegistration} onPress={() => navigation.navigate("RegisterScreen")}>
                    <Text style={styles.text}>Регистрация</Text>
                </AnimatedTouchable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
        fontSize: 14,
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
        marginBottom: 23,
    },

    buttonViaTusur: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 55,
        backgroundColor: '#D2D4D3',
        marginBottom: 10,
    },

    buttonRegistration: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 55,
        marginBottom: 23,
    }
});
