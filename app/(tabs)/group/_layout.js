import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Grouplayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2f54fe",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}

const styles = StyleSheet.create({});
