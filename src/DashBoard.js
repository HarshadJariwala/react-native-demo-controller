import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';
import data from './data';
import { Text, Card, Button, Icon } from 'react-native-elements';

const DashBoard = ({ navigation }) => {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.sectionContainer} >
                        <Text style={styles.sectionTitle}>Welcome,</Text>
                        <Text style={styles.sectionTitle}>Harshad Jariwala</Text>
                    </View>
                    {
                        data && data.map((ele, i) => (
                            <Card containerStyle={{ marginTop: 15 }} key={`${i}`}>
                                <Card.Title h4>{ele.title}</Card.Title>
                                <Card.Divider />
                                <Button onPress={() => navigation.navigate(ele.screenname)}
                                    buttonStyle={{
                                        borderRadius: 0,
                                        marginLeft: 10,
                                        marginRight: 10,
                                        marginBottom: 0,
                                    }}
                                    title="VIEW NOW"
                                />
                            </Card>
                        ))
                    }
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000000'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default DashBoard;
