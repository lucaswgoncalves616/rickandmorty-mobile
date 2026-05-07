import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { welcomeStyles as styles } from '../styles/WelcomeStyles';

export const WelcomeScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.subtitle}>
                Clique para conhecer os personagens do desenho Rick and Morty.
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};