import { useForm } from "react-hook-form";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AuthenticationForm,
  AuthenticationFormInput,
} from "../schema/authentacationSchema";

export default function SignUp() {
  const {
    control,
    formState: { errors },
  } = useForm<AuthenticationFormInput, any, AuthenticationForm>({
    defaultValues: {
      userName: "",
      passWord: "",
    },
    mode: "onBlur",
  });
  return (
    <SafeAreaView>
      <View>
        
      </View>
    </SafeAreaView>
  );
}
