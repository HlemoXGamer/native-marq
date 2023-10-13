import { SafeAreaView } from "react-native-safe-area-context";

const ScreenWrapper = ({ children }) => {
    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
            {children}
        </SafeAreaView>
    );
};

export default ScreenWrapper;
