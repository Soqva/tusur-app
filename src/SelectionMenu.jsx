import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button} from "react-native";
import dataAreas from "./data/AreasData";
import dataTech from "./data/TechnologiesData";
import dataQuestions from "./data/QuestionsData";
import {AppHeader} from "./AppHeader";

export const SelectionMenu = (props) => {

    const arrowIcon = require('../assets/arrow.png');
    const arrowIconBright = require('../assets/arrowBright.png');
    const [currentIndex, setCurrentIndex] = React.useState(null);
    const [active, setActive] = React.useState(false);
    const mainColor = '#4285F4';

    let data;

    switch (props.page)
    {
        case 'Areas':
            data = dataAreas;
            break;
        case 'Tech':
            data = dataTech;
            break;
        case 'Questions':
            data = dataQuestions;
            break;
    }

    return (
        <View style={styles.container}>
            <AppHeader />
            <ScrollView>
                {data.map(({listElement, subListElement}, index) => {
                    return <View style={styles.list}>
                        <View>
                            <TouchableOpacity
                                style={styles.listElement}
                                key={listElement}
                                onPress={() => {
                                    setCurrentIndex(index === currentIndex ? null : index);
                                    setActive(active === false? true : false);
                                }}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.listHeader}>
                                    {listElement}
                                </Text>
                                <View>
                                    {active == true?
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
                                        props.page === 'Questions'?
                                            <View style={styles.questionsSubListElement}>
                                                <Text key={subListElement} style={styles.questionsSubListText}>
                                                    {subListElement}
                                                </Text>
                                                <Button
                                                    style={styles.subListButton}
                                                    title="Перейти к ответу"
                                                    color={mainColor}
                                                />
                                            </View>
                                            :
                                            <View  style={styles.subListElement}>
                                                <View style={styles.listElement}>
                                                    <Text key={subListElement} style={styles.subListText}>
                                                        {subListElement}
                                                    </Text>
                                                    <View>
                                                        {active == true?
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
        width: 335-29,
    },
    questionsSubListElement: {

    },
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
