import ScreenWrapper from "../components/UI/ScreenWrapper";
import LoginButtons from "../components/Home/LoginButtons";
import HomeLogo from "../components/Home/HomeLogo";
import HomeCarousel from "../components/Home/HomeCarousel";

const HomeScreen = () => {
    return (
        <ScreenWrapper>
            <HomeLogo />
            <HomeCarousel />
            <LoginButtons />
        </ScreenWrapper>
    );
};

export default HomeScreen;
