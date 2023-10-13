import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MarqButton from "../Common/MarqButton";
import Ionicons from "@expo/vector-icons/Ionicons";

const AuthButtons = () => {
    return (
        <View
            style={{
                rowGap: 16,
            }}
        >
            <MarqButton
                title="Continue With Google"
                onPress={() => console.log("test")}
                icon={
                    <Ionicons
                        style={{ marginRight: 10 }}
                        name="logo-google"
                        size={24}
                        color="#fff"
                    />
                }
            />
            <MarqButton
                title="Continue With Apple"
                onPress={() => console.log("test")}
                isDark={true}
                icon={
                    <Ionicons
                        style={{ marginRight: 10 }}
                        name="logo-apple"
                        size={24}
                        color="#fff"
                    />
                }
            />
        </View>
    );
};

export default AuthButtons;

const styles = StyleSheet.create({});
