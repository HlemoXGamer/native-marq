import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Alert,
    TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import MarqIcon from "./MarqIcon";
import Avatar from "../../assets/Common/Avatar.png";
import Colors from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const TheHeader = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 20,
                backgroundColor: "#fff",
            }}
        >
            <TouchableOpacity onPress={() => navigation.navigate("Boards")}>
                <MarqIcon />
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.sectionStyle}>
                    <Ionicons
                        style={styles.imageStyle}
                        name="search"
                        size={20}
                        color={Colors.textLightGray}
                    />
                    <TextInput
                        placeholder="Search"
                        style={styles.searchInput}
                    />
                </View>
            </View>
            <TouchableOpacity
                onPress={() =>
                    Alert.alert("Are You Sure You Want To Logout?", "", [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel",
                        },
                        {
                            text: "OK",
                            onPress: () => navigation.navigate("Home"),
                        },
                    ])
                }
            >
                <Image
                    source={Avatar}
                    resizeMode="contain"
                    style={{
                        width: 35,
                        height: 35,
                    }}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default TheHeader;

const styles = StyleSheet.create({
    searchInput: {
        flex: 1,
        color: Colors.textLightGray,
        padding: 8,
        height: 34,
    },
    container: {
        padding: 8,
        height: 34,
        borderRadius: 10,
        backgroundColor: "#F5F5F6",
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: 18,
        marginRight: 18,
    },
    sectionStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
