import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  Foundation,
} from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme as _useColorScheme } from "@/components/useColorScheme";
import { overrideColorScheme as useColorScheme } from "@/components/overrideColorScheme";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme() as "light" | "dark";
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Foundation
              size={25}
              style={{ marginBottom: -15 }}
              name='home'
              color={color}
            />
          ),
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='info-circle'
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='groups'
        options={{
          title: "Groups",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name='groups'
              size={25}
              style={{ marginBottom: -15 }}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='activity'
        options={{
          title: "Activity",
          tabBarIcon: ({ color }) => (
            <Octicons
              name='graph'
              size={25}
              style={{ marginBottom: -15 }}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={25}
              style={{ marginBottom: -15 }}
              name='nut'
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
