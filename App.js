import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Pages
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import BoardsScreen from "./screens/BoardsScreen";

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
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
                <Stack.Screen name="Boards" component={BookmarksScreen} />
                <Stack.Screen name="Bookmarks" component={BoardsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
