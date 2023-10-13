import { StyleSheet, Text, View } from "react-native";
import MarqIcon from "../UI/MarqIcon";
const HomeLogo = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                marginTop: 24,
                marginBottom: 24,
            }}
        >
            <MarqIcon />
            <Text
                style={{
                    fontSize: 36,
                }}
            >
                Marqly
            </Text>
        </View>
    );
};

export default HomeLogo;

const styles = StyleSheet.create({});
