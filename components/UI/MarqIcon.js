import { Image, StyleSheet } from "react-native";
import MarqLogo from "../../assets/Common/MarqLogo.png";

const MarqIcon = ({ size }) => {
    return (
        <Image
            source={MarqLogo}
            style={{
                width: size || 35,
                height: size || 35,
            }}
            resizeMode="contain"
        />
    );
};

const styles = StyleSheet.create({});

export default MarqIcon;
