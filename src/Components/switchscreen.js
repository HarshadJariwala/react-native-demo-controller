import React, { useState } from 'react';
import { Switch } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';

const Switchscreen = () => {
    const [checked, setChecked] = useState(false);
    const toggleSwitch = () => {
        setChecked(!checked);
    };

    return (
        <View style={styles.view}>
            <Switch
                value={checked}
                onValueChange={(value) => setChecked(value)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        margin: 10,
    },
});


export default Switchscreen;
