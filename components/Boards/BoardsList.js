import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";
const { Section, Accordion, Item, Icon } = List;

const BoardsList = () => {
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded);
    return (
        <View>
            <Section>
                <Accordion
                    title="Controlled Accordion"
                    left={(props) => <Icon {...props} icon="folder" />}
                    expanded={expanded}
                    onPress={handlePress}
                >
                    <Item title="First item" />
                    <Item title="Second item" />
                </Accordion>
            </Section>
        </View>
    );
};

export default BoardsList;

const styles = StyleSheet.create({});
