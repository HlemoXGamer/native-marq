import { StyleSheet, Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BoardsList from "../components/Boards/BoardsList";

const BoardsScreen = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                padding: 20,
                paddingTop: 0,
            }}
        >
            <Text style={styles.heading}>Boards</Text>
            <BoardsList />
        </View>
    );
};

export default BoardsScreen;

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
});
