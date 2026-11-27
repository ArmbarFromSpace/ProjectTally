import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function cardCounter() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <Header pageTitle="Card Counter" />
      <View>
        <Text>{count}</Text>
        <Text>Current Count</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 30 }}>
        <View>
          <Pressable onPress={() => setCount(count - 1)}>
            <Text>-1</Text>
            <Text>For Cards</Text>
            <Text>10, J, Q, K, A</Text>
          </Pressable>
        </View>

        <Pressable onPress={() => setCount(count + 1)}>
          <View>
            <Text>+1</Text>
            <Text>For Cards</Text>
            <Text>2, 3, 4, 5, 6</Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={() => setCount(0)} style={{ alignItems: "center" }}>
          <View
            style={{
              padding: 10,
              backgroundColor: "red",
              borderRadius: 10,
              width: "30%",
              alignItems: "center",
            }}
          >
            <Text>Reset Count</Text>
          </View>
        </Pressable>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
