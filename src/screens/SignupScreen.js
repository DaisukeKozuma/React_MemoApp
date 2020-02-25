import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableHighlight } from 'react-native';

class SignupScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    メンバー登録
                </Text>
                <TextInput style={styles.input} value="Mailadress" />
                <TextInput style={styles.input} value="Password" />
                <TouchableHighlight style={styles.button} onPress={() => { }} underlayColor="#C70F66">
                    <Text style={styles.buttonTitle}>送信する</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        backgroundColor: '#fff',
    },
    input: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 8,
    },
    title: {
        fontSize: 24,
        alignSelf: "center",
        marginBottom: 28,
    },
    button: {
        backgroundColor: '#E31676',
        height: 48,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        width: '70%',
        alignSelf: "center",
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    },
});

export default SignupScreen;