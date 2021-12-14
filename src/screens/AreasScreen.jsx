import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Button,
} from "react-native";
import dataAreas from "../data/AreasData";
import dataTech from "../data/TechnologiesData";
import {AppHeader} from "./AppHeader";
import MobileAndroidData from "../data/MobileAndriodData";
import MobileCrossPlatformData from "../data/MobileCrossPlatformData";
import MobileIOSData from "../data/MobileIOSData";
import BigDataDataEngineerData from "../data/BigDataDataEngineerData";
import BigDataDataScientistData from "../data/BigDataDataScientistData";
import GameDevComputerGraphicsData from "../data/GameDevComputerGraphicsData";
import GameDevUnityData from "../data/GameDevUnityData";
import GameDevUE4Data from "../data/GameDevUE4Data";

export const AreasScreen = ({navigation}) => {

    const arrowIcon = require('../assets/arrow.png');
    const arrowIconBright = require('../assets/arrowBright.png');
    const [currentIndex, setCurrentIndex] = React.useState(null);
    const [active, setActive] = React.useState(false);
    const mainColor = '#4285F4';

    let data = dataAreas;

    return (
        <View style={styles.container}>
            <AppHeader/>
            <ScrollView>
                {data.map(({listElement, subListElement}, index) => {
                    return <View style={styles.list}>
                        <View>
                            <TouchableOpacity
                                style={styles.listElement}
                                key={listElement}
                                onPress={() => {
                                    setCurrentIndex(index === currentIndex ? null : index);
                                    setActive(!active);
                                }}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.listHeader}>
                                    {listElement}
                                </Text>
                                <View>
                                    {active ?
                                        <Image
                                            style={styles.listIcon}
                                            source={arrowIconBright}
                                        />
                                        :
                                        <Image
                                            style={styles.listIcon}
                                            source={arrowIcon}
                                        />
                                    }
                                </View>
                            </TouchableOpacity>
                            {index === currentIndex &&
                            (<View>
                                    {subListElement.map(subListElement => (
                                        <View style={styles.subListElement}>

                                            <TouchableOpacity
                                                key={subListElement}
                                                activeOpacity={0.8}
                                                onPress={() => {
                                                    switch (subListElement) {
                                                        case 'Front End':
                                                            navigation.navigate("TechnologiesScreen", {
                                                                data: dataTech,
                                                                },
                                                            );
                                                            break;
                                                        case 'Back End':
                                                            navigation.navigate("TechnologiesScreen", {
                                                                data: dataTech,
                                                                },
                                                            );
                                                            break;
                                                        case 'Full Stack':
                                                            navigation.navigate("TechnologiesScreen", {
                                                                data: dataTech,
                                                                },
                                                            );
                                                            break;
                                                        case 'Android Разработка':
                                                            navigation.navigate("TechnologiesScreen", {
                                                                data: MobileAndroidData,
                                                                },
                                                            );
                                                            break;
                                                        case 'IOS Разработка':
                                                            navigation.navigate("TechnologiesScreen", {
                                                                data: MobileIOSData,
                                                                },
                                                            );
                                                            break;
                                                        case 'Кроссплатформерная разработка':
                                                            navigation.navigate("TechnologiesScreen", {
                                                                data: MobileCrossPlatformData,
                                                                },
                                                            );
                                                            break;
                                                        case 'Data Science':
                                                            navigation.navigate("TechnologiesScreen", {
                                                                data: BigDataDataScientistData,
                                                                },
                                                            );
                                                            break;
                                                        case 'Data Engineer':
                                                            navigation.navigate("TechnologiesScreen", {
                                                                data: BigDataDataEngineerData,
                                                                },
                                                            );
                                                            break;
                                                        case 'Unity 3D Разработка':
                                                            navigation.navigate("TechnologiesScreen", {
                                                                data: GameDevUnityData,
                                                                },
                                                            );
                                                            break;
                                                        case 'Unreal Engine 4 Разработка':
                                                            navigation.navigate("TechnologiesScreen", {
                                                                data: GameDevUE4Data,
                                                                },
                                                            );
                                                            break;
                                                    }
                                                }
                                                }
                                            >
                                                <View style={styles.listElement}>
                                                    <Text key={subListElement} style={styles.subListText}>
                                                        {subListElement}
                                                    </Text>
                                                    <View>
                                                        {active ?
                                                            <Image
                                                                style={styles.listIcon}
                                                                source={arrowIconBright}
                                                            />
                                                            :
                                                            <Image
                                                                style={styles.listIcon}
                                                                source={arrowIcon}
                                                            />
                                                        }
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </View>
                            )}
                        </View>
                    </View>
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    list: {
        width: '100%',
        marginTop: 10,
        paddingLeft: 29,
    },
    listHeader: {
        width: 335,
    },
    listIcon: {
        width: 13,
        height: 19,
    },
    listElement: {
        flexGrow: 1,
        flexDirection: 'row',
        height: 68,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingRight: 165,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D2D4D3',
    },
    listTitle: {
        fontSize: 18,
    },
    subListElement: {
        marginLeft: 29,
    },
    subListText: {
        width: 335 - 29,
    },
    questionsSubListElement: {},
    questionsSubListText: {
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '4%',
        paddingRight: 165,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D2D4D3',
    },
    subListButton: {
        // ????
        width: '60%',
    }
});
