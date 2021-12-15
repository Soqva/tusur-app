import {Image, StyleSheet, View} from "react-native";
import {DrawerItem} from "@react-navigation/drawer";
import React from "react";

export const CustomDrawerContent = ({ navigation }) => {
    return (
        <View>
            <DrawerItem
                style={styles.item}
                labelStyle={styles.label}
                label="Профиль"
                icon={({focused, color, size}) => (
                    <Image
                        source={require('../assets/profile-icon.png')}
                    />
                )}
                onPress={() => {
                    navigation.navigate('Profile');
                }}
            />
            <DrawerItem
                style={styles.item}
                labelStyle={styles.label}
                label="Вопросы"
                icon={({focused, color, size}) => (
                    <Image
                        source={require('../assets/profile-icon.png')}
                    />
                )}
                onPress={() => {
                    navigation.navigate('Tasks');
                }}
            />
            <DrawerItem
                style={styles.item}
                labelStyle={styles.label}
                label="Избранное"
                icon={({focused, color, size}) => (
                    <Image
                        source={require('../assets/favorites-icon.png')}
                    />
                )}
                onPress={() => {
                    navigation.navigate('Favorites');
                }}
            />
            <DrawerItem
                style={styles.item}
                labelStyle={styles.label}
                label="Уведомления"
                icon={({focused, color, size}) => (
                    <Image
                        source={require('../assets/notifications-icon.png')}
                    />
                )}
                onPress={() => {
                    navigation.navigate('Notifications');
                }}
            />
            <DrawerItem
                style={styles.item}
                labelStyle={styles.label}
                label="Поделиться"
                icon={({focused, color, size}) => (
                    <Image
                        source={require('../assets/share-icon.png')}
                    />
                )}
                onPress={() => {
                    navigation.navigate('Share');
                }}
            />
            <DrawerItem
                style={styles.item}
                labelStyle={{
                    color: "white",
                    fontSize: 16,
                    paddingLeft: 22,
                }}
                label="Настройки"
                icon={({focused, color, size}) => (
                    <Image
                        source={require('../assets/settings-icon.png')}
                    />
                )}
                onPress={() => {
                    navigation.navigate('Settings');
                }}
            />
            <DrawerItem
                style={styles.downItem}
                labelStyle={styles.downLabel}
                label="Отключить рекламу"
            />
            <DrawerItem
                labelStyle={styles.downLabel}
                label="Связаться с нами"
            />
            <DrawerItem
                labelStyle={styles.downLabel}
                label="О приложении"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        paddingTop: 30,
    },
    label: {
        color: "white",
        fontSize: 16,
        paddingLeft: 20,
    },
    downItem: {
        marginTop: 50,
    },
    downLabel: {
        color: "white",
        fontSize: 12,
    },
});
