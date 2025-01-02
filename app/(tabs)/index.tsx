import {
  StyleSheet,
  TextInput,
  Pressable,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import OwingToggle from "@/components/OwingToggle";

import React, { useState, useRef } from "react";
import Colors from "@/constants/Colors";
import { useColorScheme as _useColorScheme } from "@/components/useColorScheme";
import { overrideColorScheme as useColorScheme } from "@/components/overrideColorScheme";
import { UserCard } from "@/components/UserCard";

const colorScheme = useColorScheme() as "light" | "dark";

export default function indexScreen() {
  const users = [
    {
      name: "Grayson Sterling",
      indebted: true,
      value: 152.34,
    },
    {
      name: "Nick Voltis",
      indebted: true,
      value: 100.0,
    },
    {
      name: "Jeffery Hinds",
      indebted: false,
      value: 420.2,
    },
    {
      name: "Alex Davies",
      indebted: false,
      value: 300.0,
    },
    {
      name: "Mitchel Spencer",
      indebted: true,
      value: 25.0,
    },
    {
      name: "Gordon Bennett",
      indebted: true,
      value: 25.0,
    },
    {
      name: "Jesse Vlad",
      indebted: true,
      value: 25.0,
    },
    {
      name: "Craig Morishita",
      indebted: true,
      value: 25.0,
    },
    {
      name: "Jacob Elordi",
      indebted: false,
      value: 152.34,
    },
    {
      name: "Jenna Ortega",
      indebted: true,
      value: 1000.0,
    },
  ];
  const translateX = useRef(new Animated.Value(0)).current;
  console.log(colorScheme);
  const alert = false;
  const [toggle, setToggle] = useState(true);
  const togglePress = () => {
    if (toggle) {
      Animated.timing(translateX, {
        toValue: 180,
        duration: 250,
        useNativeDriver: true,
        easing: Easing.sin,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
        easing: Easing.sin,
      }).start();
    }
    const newState = !toggle;
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
              ]}></Animated.View>

            <View style={styles.toggle_text}>
              <Text
                style={toggle ? styles.toggle_text_on : styles.toggle_text_off}>
                Indebted
              </Text>
              <Text
                style={toggle ? styles.toggle_text_off : styles.toggle_text_on}>
                Owe
              </Text>
            </View>
          </View>
        </Pressable>
        <ScrollView contentContainerStyle={styles.feed}>
          {users.map((user, index) => {
            if (toggle == user.indebted)
              return (
                <UserCard
                  key={index}
                  name={user.name}
                  indebted={user.indebted}
                  value={user.value}
                />
              );
          })}
        </ScrollView>
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
    paddingTop: 20,
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
    paddingHorizontal: 5,
    position: "relative",
  },
  toggle_inner: {
    backgroundColor: "#fff",
    height: 20,
    borderRadius: 15,
    width: "50%",
    verticalAlign: "middle",
    zIndex: 1,
  },
  toggle_right: { height: 20, width: "50%", backgroundColor: "transparent" },
  toggle_text: {
    flexDirection: "row",
    backgroundColor: "transparent",
    width: "100%",
    justifyContent: "space-around",
    zIndex: 2,
    left: "-50%",
    paddingRight: 5,
  },
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
  feed: {
    flex: 1,
    flexDirection: "column",
    gap: 22,
    width: "100%",
    justifyContent: "flex-start",
  },
  item: {
    alignSelf: "stretch",
    height: 65,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  pressable_1: {
    flex: 4,
    flexDirection: "row",
    gap: 12,
  },
  pressable_2: {
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
