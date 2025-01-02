import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

interface UserCardProps {
  name: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name }) => {
  return (
    <View style={styles.item}>
      <Pressable style={styles.pressable_1}>
        <Image
          style={styles.icon}
          source={require("../assets/images/icon.png")}
        />
        <Text style={styles.name}>{name}</Text>
      </Pressable>
      <Pressable style={styles.pressable_2}>
        <Text>Button</Text>
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
  name: {
    fontFamily: "NS_md",
    fontSize: 12,
  },
});
