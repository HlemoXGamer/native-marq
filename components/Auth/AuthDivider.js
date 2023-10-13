import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AuthDivider = ({ content }) => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            {content && <Text style={styles.text}>{content}</Text>}
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        margin: 32,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#9ca5aa",
    },
    text: {
        marginHorizontal: 10,
        fontSize: 16,
        color: "#9ca5aa",
    },
});
export default AuthDivider;
