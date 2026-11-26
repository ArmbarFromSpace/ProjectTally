import { View, Text, Image } from "react-native";

type Props = {
    // Props for the Header component
    pageTitle: string;
}
// Header component definition which accepts a title prop and displays our logo
export default function Header({pageTitle}: Props) {
    return (
        <View>
            <View>
                <Image source={require('../assets/Cards.png')}/>
            </View>
            <View>
                <Text>
                    {pageTitle}
                </Text>
            </View>
            <View>
                <Image source={require('../assets/Chips.png')}/>
            </View>
        </View> 
    );
}
