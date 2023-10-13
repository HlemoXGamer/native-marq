import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import ScreenWrapper from "../components/UI/ScreenWrapper";

const AuthScreen = () => {
    const route = useRoute();
    const { mode } = route.params;
    return (
        <ScreenWrapper>
            <Text>{mode}</Text>
        </ScreenWrapper>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({});
