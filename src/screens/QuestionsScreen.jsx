import React from 'react';
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
import arrowIcon from "../assets/arrow.png";
import arrowIconBright from "../assets/arrowBright.png";


export const QuestionsScreen = ({route, navigation}) => {

    const [currentIndex, setCurrentIndex] = React.useState(null);
    const [active, setActive] = React.useState(true);
    let index = 0;

    return (
        <View>
            <AppHeader navigation={navigation}/>
            <ScrollView>
                <View style={styles.list}>
                    <View>
                        <TouchableOpacity
                            style={styles.listElement}
                            onPress={() => {
                                setCurrentIndex(index === currentIndex ? null : index);
                                setActive(!active);
                            }}
                            activeOpacity={0.8}
                        >

                            <Text style={styles.listHeader}>
                                {route.params.title}
                            </Text>
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
                        </TouchableOpacity>
                        {index === currentIndex &&
                        (<View>
                                <View style={styles.subListElement}>
                                    <View>
                                        <View style={styles.listElement}>
                                            <Text style={styles.subListText}>
                                                {route.params.answer}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        width: '100%',
        marginTop: 10,
        paddingLeft: 29,
    },
    listHeader: {
        width: 335,
    },
    listElement: {
        paddingTop: 35,
        flexGrow: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingRight: 165,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D2D4D3',
    },
    subListElement: {
        marginLeft: 29,
    },
    subListText: {
        color: '#4285F4',
        width: 335 - 29,
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
    listIcon: {
        width: 13,
        height: 19,
    },
});
