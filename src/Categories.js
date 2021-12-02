import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from "react-native";
import {AppHeader} from "./AppHeader";
import data from "./data"

export const Categories = () => {

    const arrowIcon = require('../assets/arrow.png');
    const arrowIconBright = require('../assets/arrowBright.png');
    const [currentIndex, setCurrentIndex] = React.useState(null);

    return (
        <View style={styles.container}>
            <AppHeader/>
            <ScrollView>
                {data.map(({category, subCategories}, index) => {
                    return <View style={[styles.cardContainer, styles.list]}>
                        <View style={[styles.card]}>
                            <TouchableOpacity
                                style={styles.listElement}
                                key={category}
                                onPress={() => {
                                    setCurrentIndex(index === currentIndex ? null : index);
                                }}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.heading}>
                                    {category}
                                </Text>
                                <Image
                                    style={styles.listIcon}
                                    source={arrowIcon}
                                />
                            </TouchableOpacity>
                            {index === currentIndex &&
                            (<View style={styles.subListElement}>
                                    {subCategories.map(subCategories => (
                                        <View style={styles.listElement}>
                                            <Text key={subCategories}>
                                                {subCategories}
                                            </Text>
                                            <Image
                                                style={styles.listIcon}
                                                source={arrowIcon}
                                            />
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
        marginLeft: 29,
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

        // ???
        paddingRight: '42%',

        paddingBottom: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D2D4D3',
    },
    listTitle: {
        fontSize: 18,
    },
    subListElement: {
        paddingRight: 80,
        marginLeft: 29,
    }
});
