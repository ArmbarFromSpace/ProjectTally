import { useFonts } from "expo-font";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Bitcount: require("../../fonts/static/BitcountPropSingle-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Counter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  buttonBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    padding: 8,
    borderRadius: 24,
    backgroundColor: "#e8e8e8",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 18,
    backgroundColor: "#fff",
  },
  text: {
    fontFamily: "Bitcount",
    fontSize: 20,
  },
});
