import { View } from "react-native";
import MarqButton from "../Common/MarqButton";
import { useNavigation } from "@react-navigation/native";

const LoginButtons = () => {
    const navigation = useNavigation();

    const SignInHandler = () => {
        navigation.navigate("Auth", { mode: "Sign In" });
        console.log("Testing");
    };
    const SignUpHandler = () => {
        navigation.navigate("Auth", { mode: "Sign Up" });
        console.log("Testing");
    };
    return (
        <View style={{ rowGap: 8 }}>
            <MarqButton title="Sign In" onPress={SignInHandler} />
            <MarqButton
                title="Create a new account"
                onPress={SignUpHandler}
                isLight={true}
            />
        </View>
    );
};

export default LoginButtons;
