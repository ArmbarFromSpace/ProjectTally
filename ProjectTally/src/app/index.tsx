import { useFonts } from "expo-font";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Bitcount: require("../../fonts/static/BitcountPropSingle-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Pressable style={}>
        <Text style={styles.text}>Counter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: "Bitcount",
    fontSize: 20,
  },
  button: {
    flex: 2,
    alignContent: "flex-end",
  },
});
