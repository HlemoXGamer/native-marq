import { StyleSheet, Animated, View, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");

const Pagination = ({ data, scrollX }) => {
    return (
        <View style={styles.container}>
            {data.map((_, index) => {
                const inputRange = [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width,
                ];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 28, 10],
                    extrapolate: "clamp",
                });
                const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ["#D9EBFF", "#2880F1", "#D9EBFF"], // Example colors
                    extrapolate: "clamp",
                });
                return (
                    <Animated.View
                        key={index}
                        style={[
                            styles.dot,
                            { backgroundColor, width: dotWidth },
                        ]}
                    ></Animated.View>
                );
            })}
        </View>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 25,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
        backgroundColor: "#D9EBFF",
    },
});
