import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function countTrainer() {
  let count = 0;

  return (
    <SafeAreaView>
      <Header pageTitle="Value Trainer" />
      <View>
        <Text>{count}</Text>
        <Text>Current Count</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 30 }}>
        <View>
          <Pressable onPress={() => count--}>
            <Text>-1</Text>
            <Text>For Cards</Text>
            <Text>10, J, Q, K, A</Text>
          </Pressable>
        </View>

        <Pressable onPress={() => count++}>
          <View>
            <Text>+1</Text>
            <Text>For Cards</Text>
            <Text>2, 3, 4, 5, 6</Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={() => (count = 0)}>
          <View>
            <Text>Reset Count</Text>
          </View>
        </Pressable>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
