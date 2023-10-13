import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const MarqButton = ({ title, onPress, isLight = false }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.marqButton,
                { backgroundColor: isLight ? "#D9EBFF" : "#2880F1" },
            ]}
        >
            <Text
                style={[
                    styles.marqButtonContent,
                    { color: isLight ? "#007AFF" : "#fff" },
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default MarqButton;

const styles = StyleSheet.create({
    marqButton: {
        paddingTop: 14,
        paddingRight: 20,
        paddingBottom: 14,
        paddingLeft: 20,
        borderRadius: 72,
    },
    marqButtonContent: {
        textAlign: "center",
        fontSize: 18,
    },
});
