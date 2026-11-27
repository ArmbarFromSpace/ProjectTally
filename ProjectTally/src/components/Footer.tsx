import { View, Text, Pressable } from "react-native";
import { useRouter, usePathname } from "expo-router"; 




// Footer component for the ProjectTally app with tabs for Counter, Count Trainer, and Mental Trainer
export default function Footer() {
    // Initialize the router and pathname hook to navigate between screens and display the current screen's tab as active via styling 
    const router = useRouter();
    const pathname = usePathname(); 

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>

            <Pressable onPress={() => router.replace('/cardCounter')}>
            <View style={{backgroundColor: pathname === '/cardCounter' ? 'gray' : 'white', padding: 15, borderRadius: 5, alignItems: 'center' }}>
                <Text>
                    Counter
                </Text>
            </View>
            </Pressable>
            <Pressable onPress={() => router.replace('/countTrainer')}>
            <View style={{backgroundColor: pathname === '/countTrainer' ? 'gray' : 'white', padding: 15, borderRadius: 5, alignItems: 'center' }}>
                <Text>
                    Count Trainer
                </Text>
            </View>
            </Pressable>
            <Pressable onPress={() => router.replace('/mentalTrainer')}>
            <View style={{backgroundColor: pathname === '/mentalTrainer' ? 'gray' : 'white', padding: 15, borderRadius: 5, alignItems: 'center' }}>
                <Text>
                    Mental Trainer
                </Text>
            </View>
            </Pressable>
        </View> 
    );
}