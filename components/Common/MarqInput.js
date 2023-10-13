import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const MarqInput = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    style,
}) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            style={[styles.input, style]}
            placeholderTextColor={Colors.textLightGray}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        backgroundColor: "#fff",
        paddingVertical: 14,
        paddingHorizontal: 20,
        fontSize: 18,
        height: 50,
        color: Colors.textLightGray,
    },
});

export default MarqInput;
