import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Categories} from "./src/Categories";
import {AppHeader} from "./src/AppHeader";
import {Category} from "./src/Category";

export default function App() {
  return (
    <View style={styles.container}>
        <Categories />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
