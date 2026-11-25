import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/TextBox";

export default function SignUp() {
    const {
        control,
        formState: { errors },
    } = useForm<TextBox>({
        defaultValues: {
            userName: "",
            passWord: "",
        },
        mode: "onBlur"
    })
  return (
    <SafeAreaView>
      <View>
        <Controller
      </View>
    </SafeAreaView>
  );
}
