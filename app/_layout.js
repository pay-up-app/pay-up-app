import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function MainLayout() {
  return (
    <>
      <StatusBar style='light' />
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='signin' options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({});
