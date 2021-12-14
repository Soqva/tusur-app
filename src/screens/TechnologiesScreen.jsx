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
import {AppHeader} from "./AppHeader";
import BigDataDataEngineerHadoopSparkData from "../data/BigDataDataEngineerHadoopSparkData";
import BigDataDataEngineerJavaScalaData from "../data/BigDataDataEngineerJavaScalaData";
import BigDataDataEngineerPythonData from "../data/BigDataDataEngineerPythonData";
import BigDataDataEngineerSQLData from "../data/BigDataDataEngineerSQLData";
import BigDataDataScientistDeepLearningData from "../data/BigDataDataScientistDeepLearningData";
import BigDataDataScientistHadoopSparkData from "../data/BigDataDataScientistHadoopSparkData";
import BigDataDataScientistMachineLearningData from "../data/BigDataDataScientistMachineLearningData";
import BigDataDataScientistPythonData from "../data/BigDataDataScientistPythonData";
import GameDevUE4CPPData from "../data/GameDevUE4CPPData";
import GameDevUE4GeneralData from "../data/GameDevUE4GeneralData";
import GameDevUnityGeneralData from "../data/GameDevUnityGeneralData";
import GameDevUnityCSData from "../data/GameDevUnityCSData";
import MobileAndroidJavaData from "../data/MobileAndroidJavaData";
import MobileAndroidKotlinData from "../data/MobileAndroidKotlinData";
import MobileIOSGeneralData from "../data/MobileIOSGeneralData";
import MobileIOSObjCData from "../data/MobileIOSObjCData";
import MobileIOSSwiftData from "../data/MobileIOSSwiftData";
import MobileAndroidGeneralData from "../data/MobileAndroidGeneralData";

export const TechnologiesScreen = ({navigation, route}) => {

    const arrowIcon = require("../assets/arrow.png");
    const arrowIconBright = require('../assets/arrowBright.png');
    const [currentIndex, setCurrentIndex] = React.useState(null);
    const [active, setActive] = React.useState(false);
    const mainColor = '#4285F4';

    let data = route.params.data;

    return (
        <View style={styles.container}>
            <AppHeader navigation={navigation}/>
            <ScrollView>
                {data.map(({listElement}) => {
                    return <View style={styles.list}>
                        <View>
                            <TouchableOpacity
                                style={styles.listElement}
                                key={listElement}
                                onPress={() => {
                                    setActive(!active);
                                    switch (listElement) {
                                        case 'Java / Scala':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: BigDataDataEngineerJavaScalaData,
                                                },
                                            );
                                            break;
                                        case 'Hadoop / Spark / etc':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: BigDataDataEngineerHadoopSparkData,
                                                },
                                            );
                                            break;
                                        case 'Python':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: BigDataDataEngineerPythonData,
                                                },
                                            );
                                            break;
                                        case 'SQL':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: BigDataDataEngineerSQLData,
                                                },
                                            );
                                            break;
                                        case 'Python ':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: BigDataDataScientistPythonData,
                                                },
                                            );
                                            break;
                                        case 'Hadoop / Spark / etc ':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: BigDataDataScientistHadoopSparkData,
                                                },
                                            );
                                            break;
                                        case 'Machine Learning':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: BigDataDataScientistMachineLearningData,
                                                },
                                            );
                                            break;
                                        case 'Deep Learning':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: BigDataDataScientistDeepLearningData,
                                                },
                                            );
                                            break;
                                        case 'С++':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: GameDevUE4CPPData,
                                                },
                                            );
                                            break;
                                        case 'Общие вопросы':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: GameDevUE4GeneralData,
                                                },
                                            );
                                            break;
                                        case 'C#':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: GameDevUnityCSData,
                                                },
                                            );
                                            break;
                                        case 'Общие вопросы ':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: GameDevUnityGeneralData,
                                                },
                                            );
                                            break;
                                        case 'Java':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: MobileAndroidJavaData,
                                                },
                                            );
                                            break;
                                        case 'Kotlin':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: MobileAndroidKotlinData,
                                                },
                                            );
                                            break;
                                        case 'Общие вопросы  ':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: MobileAndroidGeneralData,
                                                },
                                            );
                                            break;
                                        case 'Swift':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: MobileIOSSwiftData,
                                                },
                                            );
                                            break;
                                        case 'Objective-C':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: MobileIOSObjCData,
                                                },
                                            );
                                            break;
                                        case 'Общие вопросы   ':
                                            navigation.navigate("QuestionsListScreen", {
                                                data: MobileIOSGeneralData,
                                                },
                                            );
                                            break;
                                    }
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
