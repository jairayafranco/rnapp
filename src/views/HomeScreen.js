import React, { useEffect } from "react";
import { View, StyleSheet, BackHandler, Alert, Image, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Atencion!", "¿Desea cerrar la sesion?", [
                {
                    text: "No",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "Si", onPress: () => navigation.navigate('Login') }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Bienvenido Usuario</Text>
                <Button title='TodoList' onPress={() => navigation.navigate('TodoList')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    },

    headerContainer: {
        backgroundColor: '#63A4FF',
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 16,
        paddingLeft: 16
    },

    image: {
        width: 35,
        height: 35,
        borderRadius: 5,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 30,
    }
})

export default HomeScreen;