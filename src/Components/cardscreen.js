import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

const users = [
    {
        name: 'brynn',
        avatar: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
    },
    {
        name: 'thot leader',
        avatar:
            'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    },
    {
        name: 'jsa',
        avatar: 'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
    },
    {
        name: 'talhaconcepts',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
        name: 'andy vitale',
        avatar: 'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
    },
    {
        name: 'katy friedson',
        avatar:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    },
];

const Cardscreen = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Card>
                        <Card.Title>CARD WITH DIVIDER</Card.Title>
                        <Card.Divider />
                        {users.map((u, i) => {
                            return (
                                <View key={i} style={styles.user}>
                                    <Avatar
                                        rounded
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: u.avatar }}
                                    />
                                    <Text style={styles.name}>{u.name}</Text>
                                </View>
                            );
                        })}
                    </Card>
                    <Card containerStyle={{ marginTop: 15 }}>
                        <Card.Title>FONTS</Card.Title>
                        <Card.Divider />
                        <Text style={styles.fonts} h1>
                            h1 Heading
                        </Text>
                        <Text style={styles.fonts} h2>
                            h2 Heading
                        </Text>
                        <Text style={styles.fonts} h3>
                            h3 Heading
                        </Text>
                        <Text style={styles.fonts} h4>
                            h4 Heading
                        </Text>
                        <Text style={styles.fonts}>Normal Text</Text>
                    </Card>
                    <Card>
                        <Card.Title>HELLO WORLD</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri:
                                    'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                            }}
                        />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>
                        <Button
                            icon={
                                <Icon
                                    name="code"
                                    color="#ffffff"
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                            }}
                            title="VIEW NOW"
                        />
                    </Card>
                </View>
            </ScrollView>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default Cardscreen;
