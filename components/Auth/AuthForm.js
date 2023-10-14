import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

// Components
import MarqInput from "../Common/MarqInput";
import Colors from "../../constants/Colors";
import MarqButton from "../Common/MarqButton";

// Redux
import { useLoginMutation, useRegisterMutation } from "../../services/AuthApi";

// Toastification
import { useToast } from "react-native-toast-notifications";
import { useNavigation } from "@react-navigation/native";

const AuthForm = ({ mode }) => {
    const toast = useToast();
    const navigation = useNavigation();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isSignUpMode = mode === "Sign Up";

    const Validation = () => {
        if (
            (isSignUpMode &&
                (!username || !email || !password || password.length < 6)) ||
            (!isSignUpMode && (!email || !password || password.length < 6))
        ) {
            return true;
        }
        return false;
    };

    const UsernameHandler = (val) => {
        setUsername(val);
        Validation();
    };

    const EmailHandler = (val) => {
        setEmail(val);
        Validation();
    };

    const PasswordHandler = (val) => {
        setPassword(val);
        Validation();
    };

    // Auth Flow
    const loginCredentials = {
        email: email,
        password: password,
    };
    const registerCredentials = {
        email: email,
        password: password,
    };

    const [login] = useLoginMutation();
    const [register] = useRegisterMutation();

    const authHandler = async () => {
        console.log("Hello World");
        try {
            const authAction = isSignUpMode
                ? register(registerCredentials)
                : login(loginCredentials);
            const response = await authAction.unwrap();
            const successMessage = isSignUpMode
                ? "Account Registered Successfully"
                : "Login successful";
            toast.show(successMessage, {
                type: "success",
            });
            console.log(response);
            localStorage.setItem("accessToken", response.token);
            navigation.navigate("Boards");
        } catch (error) {
            console.log(
                isSignUpMode ? "Registration failed" : "Login failed",
                error
            );
            toast.show(error.data.message, {
                type: "danger",
            });
        }
    };

    return (
        <View>
            <View style={{ rowGap: 24 }}>
                {isSignUpMode && (
                    <MarqInput
                        placeholder="Username"
                        value={username}
                        onChangeText={UsernameHandler}
                        secureTextEntry={false}
                    />
                )}
                <MarqInput
                    placeholder="Email"
                    value={email}
                    onChangeText={EmailHandler}
                    secureTextEntry={false}
                />
                <MarqInput
                    placeholder="Password"
                    value={password}
                    onChangeText={PasswordHandler}
                    secureTextEntry={true}
                />
            </View>
            <Text style={styles.hint}>
                Passwords must be a minimum of 8 characters. Include one letter,
                and one number or symbol.
            </Text>
            <Text
                style={{
                    color: Colors.textLightGray,
                    fontSize: 16,
                    textAlign: "center",
                    marginTop: 25,
                    marginBottom: 20,
                    lineHeight: 26,
                }}
            >
                By continuing, you agree to Marqly{" "}
                <Text style={{ color: Colors.baseBlue }}>
                    Terms & Conditions{" "}
                </Text>
                and{" "}
                <Text style={{ color: Colors.baseBlue }}>Privacy Policy.</Text>
            </Text>
            <MarqButton
                title="Continue"
                onPress={authHandler}
                disabled={Validation()}
            />
        </View>
    );
};

export default AuthForm;

const styles = StyleSheet.create({
    hint: {
        fontSize: 14,
        color: Colors.textLightGray,
        marginTop: 12,
    },
});
