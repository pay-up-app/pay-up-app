import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function Group() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Group {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
