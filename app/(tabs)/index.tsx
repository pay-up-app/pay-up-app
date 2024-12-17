import {
  StyleSheet,
  TextInput,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome6,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import OwingToggle from "@/components/OwingToggle";

import React, { useState, useRef } from "react";
import Colors from "@/constants/Colors";
import { useColorScheme as _useColorScheme } from "@/components/useColorScheme";
import { overrideColorScheme as useColorScheme } from "@/components/overrideColorScheme";

const colorScheme = useColorScheme() as "light" | "dark";

export default function indexScreen() {
  const translateX = useRef(new Animated.Value(0)).current;
  console.log(colorScheme);
  const alert = false;
  const [toggle, setToggle] = useState(true);
  const togglePress = () => {
    const newState = !toggle;
    Animated.timing(translateX, {
      toValue: 200,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.sin,
    }).start();
    setToggle(newState);
  };
  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 0, backgroundColor: "#0b38c7" }}
      />
      <View>
        <View style={styles.container}>
          <View style={styles.header_icons}>
            <MaterialCommunityIcons
              name='account-circle-outline'
              size={28}
              color='white'
            />
            <View style={styles.header_text_view}>
              <Text style={styles.header_text_title}>Hi Bryan,</Text>
              <Text style={styles.header_text_subtitle}>Welcome back!</Text>
            </View>
            <MaterialCommunityIcons
              size={28}
              name={alert ? "bell-badge-outline" : "bell-outline"}
              color='white'
            />
          </View>
          <SearchBar />
        </View>
      </View>
      <View style={styles.body}>
        <Pressable onPress={togglePress}>
          <View style={styles.toggle}>
            <Animated.View
              style={[
                styles.toggle_inner,
                {
                  transform: [{ translateX }],
                },
              ]}>
              <Text
                style={toggle ? styles.toggle_text_on : styles.toggle_text_off}>
                Indebted
              </Text>
            </Animated.View>
            <View style={styles.toggle_right}>
              <Text
                style={toggle ? styles.toggle_text_off : styles.toggle_text_on}>
                Owe
              </Text>
            </View>
          </View>
        </Pressable>
        <View style={styles.feed}>
          <Text>Feed</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    gap: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  toggle_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  toggle: {
    flexDirection: "row",
    backgroundColor: "#e5e5ef",
    height: 30,
    borderRadius: 15,
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 5,
  },
  toggle_inner: {
    backgroundColor: "#fff",
    height: 20,
    borderRadius: 15,
    width: "50%",
    verticalAlign: "middle",
  },
  toggle_right: { height: 20, width: "50%", backgroundColor: "transparent" },
  toggle_text_on: {
    fontFamily: "Inter_md",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 12,
    marginVertical: "auto",
    color: "#2E2E5F",
  },
  toggle_text_off: {
    fontFamily: "Inter",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 12,
    marginVertical: "auto",
    color: "#757695",
  },
  feed: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "green",
  },
  container: {
    flexDirection: "column",
    gap: 30,
    backgroundColor: Colors[colorScheme ?? "light"].bannerBackground,
    paddingVertical: 25,
    paddingHorizontal: 30,
  },
  header_icons: {
    backgroundColor: Colors[colorScheme ?? "light"].bannerBackground,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_text_view: {
    flex: 1,
    marginLeft: 30,
    backgroundColor: "transparent",
  },
  header_text_title: {
    color: Colors[colorScheme ?? "light"].bannerText,
    fontSize: 14,
    fontFamily: "Poppins_sb",
  },
  header_text_subtitle: {
    color: Colors[colorScheme ?? "light"].bannerText,
    fontSize: 12,
    fontFamily: "Poppins",
  },
});
