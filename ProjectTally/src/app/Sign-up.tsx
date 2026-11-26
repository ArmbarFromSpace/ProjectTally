import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/TextBox";
import { authenticationForm, AuthenticationForm, AuthenticationFormInput} from "../../schema/AuthentacationForm";

export default function SignUp() {
    const {
        control,
        formState: { errors },
    } = useForm<AuthenticationFormInput, any, AuthenticationForm>({
        defaultValues: {
            userName: "",
        },
        mode: "onBlur"
    })
  return (
    <SafeAreaView>
      <View>
      </View>
    </SafeAreaView>
  );
}
