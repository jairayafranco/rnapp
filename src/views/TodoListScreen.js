import React, { useState, useEffect } from 'react';
import { TextInput, Button, StyleSheet, Text, View, FlatList, LogBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoListScreen = () => {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState('');
    
    useEffect(() => {
        getTodoList();
    }, []);

    const getTodoList = async () => {
        try {
            const todoList = await AsyncStorage.getItem('todoList');
            if (todoList) {
                setTodoList(JSON.parse(todoList));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const addTodo = async () => {
        if (!todo.trim()) {
            return alert('Campo vacio');
        }

        const newTodoList = [...todoList, todo];
        setTodoList(newTodoList);
        await AsyncStorage.setItem('todoList', JSON.stringify(newTodoList));
        setTodo('');
    }

    return (
        <>
            <View style={{ margin:10 }}>
                <TextInput
                    style={styles.input}
                    placeholder='Nueva Nota'
                    placeholderTextColor='#C4C4C4'
                    value={todo}
                    onChangeText={(text) => setTodo(text)}
                />
                <Button title='Añadir' onPress={addTodo} />
            </View>
            <View style={styles.container}>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={todoList}
                        renderItem={({ item, key }) => (
                            <View key={key} style={styles.todo}>
                                <Text style={styles.todoText}>{item}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
    },

    input: {
        backgroundColor: '#F5F5F5',
        color: '#212121',
        fontSize: 16,
        padding: 16,
        marginBottom: 16
    },

    todo: {
        backgroundColor: '#F5F5F5',
        margin: 10,
        padding: 22,
        borderRadius: 10
    },

    todoText: {
        color: '#212121',
        fontSize: 16
    }
});

export default TodoListScreen;
