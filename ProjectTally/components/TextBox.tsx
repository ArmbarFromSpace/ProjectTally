import { View, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type props = {
  BoxText: string;
  PlcaeHolderText: string;
  AccountInformation: string;
  onChangeText?: (text: string) => void;
};

export default function TextBox({
  BoxText,
  PlcaeHolderText,
  AccountInformation,
  onChangeText,
}: props) {
  return (
    <SafeAreaView>
      <View>
        <Text>{BoxText}</Text>
        <View>
          <TextInput
            accesibilitylabel={BoxText}
            placeholder={`Enter ${PlcaeHolderText}`}
            value={AccountInformation}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginleft: "10%",
  },
});
