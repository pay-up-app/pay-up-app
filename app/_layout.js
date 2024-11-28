import { StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function MainLayout() {
  StatusBar.setBarStyle("light-conent", true);
  StatusBar.setBackgroundColor();
  return (
    <>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='signin' options={{ headerShown: false }} />
      </Stack>
      <StatusBar />
    </>
  );
}

const styles = StyleSheet.create({});
