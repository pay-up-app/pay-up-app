import { StyleSheet, TextInput } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "react-native-elements";

import React from "react";
import Colors from "@/constants/Colors";
import { useColorScheme as _useColorScheme } from "@/components/useColorScheme";
import { overrideColorScheme as useColorScheme } from "@/components/overrideColorScheme";

const colorScheme = useColorScheme() as "light" | "dark";

export default function indexScreen() {
  const [text, onChangeText] = React.useState("Useless Text");
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
          <View style={styles.header_search}>
            <TextInput
              style={styles.header_search}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
        </View>
        <View style={styles.body}>
          <EditScreenInfo path='app/(tabs)/index.tsx' />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    gap: 0,
  },
  container: {
    flexDirection: "column",
    gap: 0,
    height: "20%",
    backgroundColor: Colors[colorScheme ?? "light"].bannerBackground,
  },
  header_icons: {
    backgroundColor: Colors[colorScheme ?? "light"].bannerBackground,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  header_search: {
    marginHorizontal: "auto",
    gap: 23,
    height: 30,
  },
  body: {},
});
