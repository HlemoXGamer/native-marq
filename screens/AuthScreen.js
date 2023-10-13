import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import ScreenWrapper from "../components/UI/ScreenWrapper";
import MarqIcon from "../components/UI/MarqIcon";
import AuthButtons from "../components/Auth/AuthButtons";
import AuthDivider from "../components/Auth/AuthDivider";
import AuthForm from "../components/Auth/AuthForm";

const AuthScreen = () => {
    const route = useRoute();
    const { mode } = route.params;
    return (
        <ScreenWrapper>
            <View style={styles.icon}>
                <MarqIcon size={70} />
            </View>
            <AuthButtons />
            <AuthDivider content={"or continue with email"} />
            <AuthForm />
        </ScreenWrapper>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    icon: {
        // marginTop: 46,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 62,
    },
});
