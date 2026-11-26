import { View, Text, Pressable } from "react-native";
import { useRouter, usePathname } from "expo-router"; 




// Footer component for the ProjectTally app with tabs for Counter, Count Trainer, and Mental Trainer
export default function Footer() {
    // Initialize the router and pathname hook to navigate between screens and display the current screen's tab as active via styling 
    const router = useRouter();
    const pathname = usePathname(); 

    return (
        <View>
            <Pressable onPress={() => router.replace('/cardCounter')}>
            <View>
                <Text>
                    Counter
                </Text>
            </View>
            </Pressable>
            <Pressable onPress={() => router.replace('/cardCounter')}>
            <View>
                <Text>
                    Count Trainer
                </Text>
            </View>
            </Pressable>
            <Pressable onPress={() => router.replace('/cardCounter')}>
            <View>
                <Text>
                    Mental Trainer
                </Text>
            </View>
            </Pressable>
        </View> 
    );
}