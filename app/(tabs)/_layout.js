import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2f54fe",
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "NotoSans-Medium",
        },
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name='house' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name='magnifying-glass' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='chat'
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name='commenting' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome name='cog' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name='group'
        options={{
          // This tab will no longer show up in the tab bar.
          title: "Group",
          href: null,
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name='signin'
        options={{
          // This tab will no longer show up in the tab bar.
          title: "Group",
          href: null,
        }}
      />
    </Tabs>
  );
}
