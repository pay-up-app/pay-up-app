import React from "react";
import { Text, View } from "@/components/Themed";
import { StyleSheet, Pressable, TextInput } from "react-native";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

export default function SearchBar() {
  const [text, onChangeText] = React.useState("");
  const onPressFunction = () => {
    onChangeText("");
  };
  return (
    <>
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
          {text ? (
            <FontAwesome6 name='xmark-circle' size={18} color='#7b7c9a' />
          ) : (
            <></>
          )}
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
