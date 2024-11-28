import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useState } from "react";
import { Link } from "expo-router";

export default function signin() {
  const google_logo = require("../assets/icons/google.png");
  const apple_logo = require("../assets/icons/apple.png");
  const [fontsLoaded, fontError] = useFonts({
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });
  const [text, changeText] = useState("email@domain.com");
  return fontsLoaded ? (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(39,106,252,1)", "rgba(41,72,255,1)"]}
        style={styles.background}
      />
      <Text style={styles.title}>PayUp</Text>
      <View>
        <View style={styles.details}>
          <Text style={styles.h2}>Create an account</Text>
          <Text style={styles.p}>Enter an email to sign up for this app</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={changeText}
          title='email'
          placeholder='email@domain.com'
          placeholderTextColor='#828282'
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign up with email</Text>
        </Pressable>
        <View style={styles.altSignUpTextView}>
          <View style={styles.altSignUpTextLeft} />
          <View>
            <Text style={styles.altSignUpText}>or continue with</Text>
          </View>
          <View style={styles.altSignUpTextRight} />
        </View>
        <Pressable style={{ ...styles.button, backgroundColor: "#eeeeee" }}>
          <View style={styles.googleButton}>
            <Image source={google_logo} style={{ width: 25, height: 25 }} />
            <Text
              style={{
                ...styles.buttonText,
                color: "black",
              }}>
              Google
            </Text>
          </View>
        </Pressable>
        <Pressable style={{ ...styles.button, backgroundColor: "#000000" }}>
          <View style={styles.appleButton}>
            <Image source={apple_logo} style={{ width: 18, height: 18 }} />
            <Text
              style={{
                ...styles.buttonText,
                color: "white",
              }}>
              Apple
            </Text>
          </View>
        </Pressable>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.agreement}>
            By clicking continue, you agree to our{" "}
            <Link href='./terms'>
              <Text style={{ fontFamily: "Inter-Bold" }}>
                Terms and Conditions
              </Text>{" "}
              and{" "}
              <Text style={{ fontFamily: "Inter-Bold" }}>Privacy Policy</Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 83,
  },
  title: {
    fontFamily: "Inter-SemiBold",
    fontSize: 24,
    color: "white",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
    color: "red",
  },
  details: { alignItems: "center" },
  input: {
    height: 40,
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 10,
    minWidth: "80%",
    color: "black",
    backgroundColor: "white",
    borderRadius: 7,
  },
  h2: {
    fontFamily: "Inter-SemiBold",
    color: "white",
    fontSize: 18,
    paddingBottom: 2,
  },
  p: {
    fontFamily: "Inter-Regular",
    color: "white",
  },
  button: {
    marginTop: 16,
    height: 40,
    verticalAlign: "middle",
    justifyContent: "center",
    backgroundColor: "#0D1124",
    borderRadius: 7,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    verticalAlign: "middle",
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },
  altSignUpTextView: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  altSignUpTextLeft: {
    flex: 1,
    height: 1,
    backgroundColor: "white",
  },
  altSignUpText: {
    textAlign: "center",
    paddingHorizontal: 10,
    color: "white",
    fontFamily: "Inter-Regular",
  },
  altSignUpTextRight: {
    flex: 1,
    height: 1,
    backgroundColor: "white",
  },
  googleButton: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
  },
  appleButton: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
  agreement: {
    fontFamily: "Inter-Regular",
    marginTop: 24,
    fontSize: 12,
    color: "white",
    minWidth: "80%",
    flex: 1,
    flexWrap: "wrap",
    alignContent: "center",
    textAlign: "center",
  },
});
