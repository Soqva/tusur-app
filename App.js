import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Categories} from "./src/Categories";
import {DrawerNavigation} from "./src/drawer-navigation/DrawerNavigation";

export default function App() {
  return (
      <DrawerNavigation>
        <View style={styles.container}>
          <Categories />
        </View>
      </DrawerNavigation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
