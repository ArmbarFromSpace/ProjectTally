import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
 
export default function cardCounter() {
    return (
        <SafeAreaView>
            <Header pageTitle="Card Counter"/>
                <View>

                </View>       
            <Footer/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});