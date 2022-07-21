import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from "react-native";

import { styles } from "./styles";

const Home = () => {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.background}
            >
                <View style={styles.background}></View>
            </ScrollView>
            <Text>aaaaaaaaaa</Text>
            <Text>aaaaaaaaaa</Text>
            <Text>aaaaaaaaaa</Text>
            <Text>aaaaaaaaaa</Text>
            <Text>aaaaaaaaaa</Text>
            <Text>aaaaaaaaaa</Text>
            <Text>aaaaaaaaaa</Text>
            <Text>aaaaaaaaaa</Text>
            <Text>aaaaaaaaaa</Text>
            <Text>aaaaaaaaaa</Text>
            <Text>aaaaaaaaaa</Text>
            <Text>aaaaaaaaaa</Text>
        </SafeAreaView>
    );
};

export default Home;
