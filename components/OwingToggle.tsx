import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

export default function OwingToggle() {
  const [isOn, setIsOn] = useState(true);
  const handlePress = () => {
    const newState = !isOn; // Toggle state
    setIsOn(newState);
  };
  return <></>;
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginVertical: 20,
    flex: 1,
  },
  toggleContainer: {
    borderRadius: 25,
    backgroundColor: "#e5e5ef",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  option: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeOption: {
    zIndex: 1, // Keeps text on top of slider
  },
  text: {
    fontSize: 16,
    color: "#747696",
    fontWeight: "500",
  },
  activeText: {
    color: "#2e2e5f",
    fontWeight: "bold",
  },
  slider: {
    position: "absolute",
    width: "50%",
    height: "90%",
    borderRadius: 25,
    backgroundColor: "#fff", // Green slider
  },
  sliderLeft: {
    left: 5,
  },
  sliderRight: {
    right: 5,
  },
});
