import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MarqInput from "../Common/MarqInput";
import Colors from "../../constants/Colors";
import MarqButton from "../Common/MarqButton";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [passowrd, setPassword] = useState("");

    const Validation = () => {
        if (
            email.length === 0 ||
            passowrd.length === 0 ||
            passowrd.length < 8
        ) {
            return true;
        }
        return false;
    };

    const EmailHandler = (val) => {
        setEmail(val);
        Validation();
    };

    const PasswordHandler = (val) => {
        setPassword(val);
        Validation();
    };

    return (
        <View>
            <View style={{ rowGap: 24 }}>
                <MarqInput
                    placeholder="Email"
                    value={email}
                    onChangeText={EmailHandler}
                    secureTextEntry={false}
                />
                <MarqInput
                    placeholder="Password"
                    value={passowrd}
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
            <MarqButton title="Continue" disabled={Validation()} />
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
