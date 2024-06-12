import { Link } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import {
  Feather,
  Octicons,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function home() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../../assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "NotoSans-SemiBold": require("../../assets/fonts/NotoSans-SemiBold.ttf"),
    "NotoSans-Medium": require("../../assets/fonts/NotoSans-Medium.ttf"),
    "NotoSans-Regular": require("../../assets/fonts/NotoSans-Regular.ttf"),
  });

  const data = {
    name: "Bryan",
    img: require("../../assets/images/2.jpg"),
    events: [
      {
        date: "16 Mar",
        title: "Italy Trip 2024",
        price: "$ 11,435.58",
      },
      {
        date: "23 Oct, 2023",
        title: "Fall Out Boys Concert",
        price: "$ 455.72",
      },
      {
        date: "16 Apr, 2023",
        title: "Arctic Monkeys Concert",
        price: "$ 567.89",
      },
      {
        date: "12 Dec, 2022",
        title: "Christmas in NY",
        price: "$ 5,503.67",
      },
      {
        date: "12 Sep, 2021",
        title: "LA Trip",
        price: "$ 2,306.41",
      },
    ],
  };
  return fontsLoaded ? (
    <View style={header.container}>
      <SafeAreaView style={header.header}>
        <View style={header.vertical}>
          <View>
            <Image style={header.icon} source={data.img} />
          </View>
          <View style={{ flexGrow: 1 }}>
            <Text style={header.h1}>Hi {data.name},</Text>
            <Text style={header.p}>Welcome Back!</Text>
          </View>
          <View>
            <Octicons
              name='bell-fill'
              size={22}
              color='white'
              style={header.bell}
            />
          </View>
        </View>
        <View style={header.buttons}>
          <Pressable>
            <View>
              <View style={header.button}>
                <Feather name='arrow-up-right' size={24} color='white' />
              </View>
              <Text style={header.buttonText}>Send</Text>
            </View>
          </Pressable>
          <Pressable>
            <View>
              <View style={header.button}>
                <Feather name='arrow-down-left' size={24} color='white' />
              </View>
              <Text style={header.buttonText}>Receive</Text>
            </View>
          </Pressable>
          <Pressable>
            <View>
              <View style={header.button}>
                <FontAwesome6 name='calculator' size={24} color='white' />
              </View>
              <Text style={header.buttonText}>Calculator</Text>
            </View>
          </Pressable>
          <Pressable>
            <View>
              <View style={header.button}>
                <MaterialCommunityIcons
                  name='account'
                  size={24}
                  color='white'
                />
              </View>
              <Text style={header.buttonText}>Account</Text>
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
      <ScrollView style={body.main}>
        <View style={body.info}>
          <Text style={body.h1}>Recent Events</Text>
          <Pressable>
            <View style={body.newEvent}>
              <Text style={body.newEventText}>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>&#43;</Text>{" "}
                New Event
              </Text>
              <Link href='/signin'>Hi</Link>
            </View>
          </Pressable>
        </View>
        {data.events.map((event) => {
          return (
            <View style={body.eventContainer} key={event.title}>
              <Text style={body.date}>{event.date}</Text>
              <Link href={`/event/[${event.title}]`} asChild>
                <Pressable>
                  <View style={body.event}>
                    <View style={body.eventView}>
                      <Text style={body.eventViewText}>{event.title}</Text>
                      <Text style={body.eventViewMoney}>{event.price}</Text>
                    </View>
                  </View>
                </Pressable>
              </Link>
            </View>
          );
        })}
      </ScrollView>
    </View>
  ) : (
    <></>
  );
}

const header = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  h1: {
    fontWeight: "700",
    fontSize: 14,
    color: "white",
    fontFamily: "Poppins-SemiBold",
  },
  p: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
  header: {
    backgroundColor: "#11339b",
    height: 260,
    width: "100%",
    justifyContent: "center",
    gap: 20,
    padding: 200,
    borderColor: "#aaaaaa",
    borderBottomWidth: 1,
  },
  vertical: {
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
  },
  buttons: {
    flexDirection: "row",
    gap: 40,
    justifyContent: "center",
  },
  button: {
    width: 61,
    height: 61,
    borderRadius: 200,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "#ffffff26",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    marginTop: 10,
    color: "white",
    fontFamily: "NotoSans-Regular",
    fontSize: 12,
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 50,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "#ffffff80",
  },
  bell: {
    marginRight: 50,
  },
});

const body = StyleSheet.create({
  main: {
    flex: 1,
    maxWidth: 960,
    minWidth: 420,
    paddingHorizontal: 15,
    fontFamily: "NotoSans-SemiBold",
    gap: 25,
    marginVertical: 30,
    paddingHorizontal: 15,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  newEvent: { flexDirection: "row", gap: 10 },
  newEventText: {
    fontFamily: "NotoSans-Medium",
    color: "#2962E1",
    fontSize: 14,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  h1: { fontFamily: "NotoSans-SemiBold", fontSize: 15 },
  date: {
    fontFamily: "NotoSans-Medium",
    fontSize: 14,
    paddingLeft: 2,
  },
  eventContainer: { marginBottom: 28 },
  event: {
    backgroundColor: "#f8f8fb",
    height: 60,
    marginTop: 20,
    borderRadius: 5,
  },
  eventView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  eventViewText: { fontFamily: "NotoSans-SemiBold", fontSize: 15 },
  eventViewMoney: {
    fontFamily: "NotoSans-Regular",
    fontSize: 15,
    color: "#6c779a",
  },
});
