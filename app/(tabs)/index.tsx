import { StyleSheet, TextInput, Pressable } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome6,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";

import React from "react";
import Colors from "@/constants/Colors";
import { useColorScheme as _useColorScheme } from "@/components/useColorScheme";
import { overrideColorScheme as useColorScheme } from "@/components/overrideColorScheme";

const colorScheme = useColorScheme() as "light" | "dark";

export default function indexScreen() {
  const [text, onChangeText] = React.useState("");
  const onPressFunction = () => {
    onChangeText("");
  };
  const alert = false;
  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 0, backgroundColor: "#0b38c7" }}
      />
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.header_icons}>
            <MaterialCommunityIcons
              name='account-circle-outline'
              size={28}
              color='white'
            />
            <MaterialCommunityIcons
              size={28}
              name={alert ? "bell-badge-outline" : "bell-outline"}
              color='white'
            />
          </View>
          <View style={{ ...styles.header_search_container, borderRadius: 50 }}>
            <FontAwesome name='search' size={18} color='#2e2f5f' />
            <View style={styles.search_field}>
              <TextInput
                onChangeText={onChangeText}
                placeholder='Search'
                value={text}
                placeholderTextColor='#6d6d8f'
                style={{ outline: "none" }}
              />
            </View>
            <Pressable onPress={onPressFunction}>
              <FontAwesome6 name='xmark-circle' size={18} color='#7b7c9a' />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <EditScreenInfo path='app/(tabs)/index.tsx' />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {},
  body: {
    flex: 1,
    justifyContent: "center",
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
  },
  header_search_container: {
    backgroundColor: "#efeff7",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    borderRadius: "20px",
    height: 30,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  search_field: {
    flex: 1,
    outline: "none",
    backgroundColor: "#efeff7",
    borderWidth: 0,
  },
});
