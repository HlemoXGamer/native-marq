// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Pages
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import BoardsScreen from "./screens/BoardsScreen";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Toastification
import { ToastProvider } from "react-native-toast-notifications";
import TheHeader from "./components/UI/TheHeader";

export default function App() {
    return (
        <Provider store={store}>
            <ToastProvider placement="top" animationType="zoom-in">
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Boards">
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="Auth"
                            component={AuthScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="Boards"
                            component={BookmarksScreen}
                            options={{
                                header: () => <TheHeader />,
                            }}
                        />
                        <Stack.Screen
                            name="Bookmarks"
                            component={BoardsScreen}
                            options={{
                                header: () => <TheHeader />,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ToastProvider>
        </Provider>
    );
}
