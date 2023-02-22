import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container} className="bg-white h-full">
        <View>
        <Text>HomeScreen</Text>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    }
  });