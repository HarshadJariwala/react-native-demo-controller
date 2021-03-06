import React, { useState } from 'react';
import { BottomSheet, Button, Card, ListItem } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Bottomsheetscreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    const list = [
        { title: 'List Item 1' },
        { title: 'List Item 2' },
        { title: 'List Item 3' },
        { title: 'List Item 4' },
        { title: 'List Item 5' },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];

    return (
        <SafeAreaProvider>
            <Button
                title="Open Bottom Sheet"
                onPress={() => setIsVisible(true)}
                buttonStyle={styles.button}
            />
            <BottomSheet modalProps={{}} isVisible={isVisible}>
                {list.map((l, i) => (
                    <ListItem
                        key={i}
                        containerStyle={l.containerStyle}
                        onPress={l.onPress}
                    >
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
    },
});

export default Bottomsheetscreen;
