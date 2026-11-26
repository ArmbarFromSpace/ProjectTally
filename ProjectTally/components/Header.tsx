import { View, Text, Image } from "react-native";

type Props = {
    // Props for the Header component
    pageTitle: string;
}
// Header component definition which accepts a title prop and displays our logo
export default function Header({pageTitle}: Props) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <View>
                <Image source={require('../assets/Cards.png')}/>
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    {pageTitle}
                </Text>
            </View>
            <View>
                <Image source={require('../assets/Chips.png')}/>
            </View>
        </View> 
    );
}
