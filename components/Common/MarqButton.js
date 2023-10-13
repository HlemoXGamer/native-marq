import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import React from "react";

const MarqButton = ({
    title,
    onPress,
    isLight = false,
    isDark = false,
    icon,
    disabled,
}) => {
    const buttonBackgroundColor = disabled
        ? Colors.lightGray
        : isLight
        ? Colors.baseLightBlue
        : isDark
        ? Colors.baseBlack
        : Colors.baseBlue;

    const buttonTextColor = disabled ? "#fff" : isLight ? "#007AFF" : "#fff";

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.marqButton,
                {
                    backgroundColor: buttonBackgroundColor,
                },
            ]}
        >
            <View style={styles.buttonContent}>
                {icon && icon}
                <Text
                    style={[
                        styles.marqButtonContent,
                        { color: buttonTextColor },
                    ]}
                >
                    {title}
                </Text>
            </View>
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
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});
