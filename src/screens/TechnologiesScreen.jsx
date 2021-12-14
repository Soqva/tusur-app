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
import dataQuestions from "../data/QuestionsData";

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
                {data.map(({listElement, subListElement}, index) => {
                    return <View style={styles.list}>
                        <View>
                            <TouchableOpacity
                                style={styles.listElement}
                                key={listElement}
                                onPress={() => {
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
