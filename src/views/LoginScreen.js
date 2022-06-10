import React, { useState } from "react";
import { View, Image, StyleSheet, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!user.trim() || !password.trim()) {
            return alert('Campo vacio');
        }

        if (user.trim().toLowerCase() === 'admin' && password.trim() === '1234') {
            setUser('');
            setPassword('');
            navigation.navigate('Home');
        } else {
            return alert('Usuario o contraseña incorrectos');
        }
    }

    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Usuario'
                    placeholderTextColor='#C4C4C4'
                    value={user}
                    onChangeText={(text) => setUser(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Contraseña'
                    placeholderTextColor='#C4C4C4'
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Button title='Iniciar Sesion' onPress={handleLogin}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 70,
        height: 70,
        alignSelf: 'center'
    },

    container: {
        margin: 10,
        marginTop: 50
    },

    input: {
        backgroundColor: '#F5F5F5',
        color: '#212121',
        fontSize: 16,
        padding: 16,
        marginBottom: 16
    },
})

export default LoginScreen;