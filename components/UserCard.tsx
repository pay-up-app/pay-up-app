import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

interface UserCardProps {
  name: string;
  indebted: boolean;
  value: number;
}

export const UserCard: React.FC<UserCardProps> = ({
  name,
  indebted,
  value,
}) => {
  return (
    <View style={styles.item}>
      <Pressable style={styles.pressable_1}>
        <Image
          style={styles.icon}
          source={require(`../assets/images/icon.png`)}
        />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <View
            style={indebted ? styles.info_popup_green : styles.info_popup_red}>
            <Text
              style={indebted ? styles.info_text_green : styles.info_text_red}>
              {indebted ? "+" : "-"} ${value}
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.pressable_2}>
        <View style={styles.button}>
          <MaterialIcons name='currency-exchange' size={22} color='black' />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignSelf: "stretch",
    height: 65,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomEndRadius: 3,
    borderBottomStartRadius: 3,
  },
  pressable_1: {
    flex: 4,
    flexDirection: "row",
    gap: 12,
  },
  pressable_2: {},
  icon: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  name: {
    fontFamily: "NS_sb",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#eff0f5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 45,
  },
  details: {
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  info_popup_green: {
    backgroundColor: "rgba(0, 165, 28, 0.25)",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  info_text_green: {
    fontFamily: "NS_rg",
    color: "rgb(0, 165, 28)",
  },

  info_popup_red: {
    backgroundColor: "rgba(255, 0, 0, 0.25)",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  info_text_red: {
    fontFamily: "NS_rg",
    color: "#ff0000",
  },
});
