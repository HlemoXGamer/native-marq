import { useRef } from "react";
import { Animated, StyleSheet, Text, View, FlatList } from "react-native";
import Slides from "../../../data/Slides";
import SlideItem from "./parts/SlideItem";
import Pagination from "./parts/Pagination";

const HomeCarousel = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const onScrollHandler = (event) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            }
        )(event);
    };
    return (
        <View style={{ flex: 1 }}>
            <View>
                <FlatList
                    data={Slides}
                    renderItem={({ item }) => <SlideItem item={item} />}
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScrollHandler}
                />
                <Pagination data={Slides} scrollX={scrollX} />
            </View>
        </View>
    );
};

export default HomeCarousel;

const styles = StyleSheet.create({});
