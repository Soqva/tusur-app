import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Animated,
} from "react-native";
import {AppHeader} from "./AppHeader";
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const QuestionsListScreen = ({route, navigation}) => {

    const arrowIcon = require("../assets/arrow.png");
    const arrowIconBright = require('../assets/arrowBright.png');
    const [currentIndex, setCurrentIndex] = React.useState(null);
    const [active, setActive] = React.useState(true);
    const mainColor = '#4285F4';
    let data = route.params.data;

    return (
        <View style={styles.container}>
            <AppHeader navigation={navigation}/>
            <ScrollView>
                {data.map(({listElement, subListElement, answer}, index) => {
                    return <View style={styles.list}>
                        <View>
                            <TouchableOpacity
                                style={styles.listElement}
                                key={listElement}
                                onPress={() => {
                                    setCurrentIndex(index === currentIndex ? null : index);
                                    setActive(true);
                                }}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.listHeader}>
                                    {listElement}
                                </Text>
                            </TouchableOpacity>
                            {index === currentIndex &&
                            (<View>
                                    {subListElement.map(subListElement => (
                                        <View style={styles.subListElement}>
                                            <View key={subListElement} >
                                                <TouchableOpacity
                                                    style={styles.listElement}
                                                    onPress={() => {
                                                        setActive(!active);
                                                    }
                                                    }
                                                >
                                                    <Text key={subListElement} style={styles.subListText}>
                                                        {subListElement}
                                                    </Text>
                                                    <View>
                                                        {active ?
                                                            <Image
                                                                style={[styles.listIcon, {transform: [{ rotate: "0deg" }]}]}
                                                                source={arrowIcon}
                                                            />
                                                            :
                                                            <Image
                                                                style={[styles.listIcon, {transform: [{ rotate: "90deg" }]}]}
                                                                source={arrowIconBright}
                                                            />
                                                        }
                                                    </View>
                                                </TouchableOpacity>
                                                <View>
                                                    { active ?
                                                        <View></View>
                                                        :
                                                        <AnimatedTouchable style={styles.button} onPress={() => {
                                                            navigation.navigate("QuestionsScreen", {
                                                                title: subListElement,
                                                                answer: answer,
                                                            },);
                                                        }}>
                                                            <Text style={styles.text}>Перейти к вопросу</Text>
                                                        </AnimatedTouchable>
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
    },
    button: {
        borderColor: '#D2D4D3',
        backgroundColor: '#4285F4',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: 300,
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        color: 'white',
    },
});
