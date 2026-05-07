import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import api from '../services/api';
import { Card } from '../components/Card';
import { homeScreenStyles as styles } from '../styles/HomeScreenStyles';

interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
}

export const HomeScreen = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        try {
            const response = await api.get('/character');
            setCharacters(response.data.results);
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={characters}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Card
                        name={item.name}
                        image={item.image}
                        species={item.species}
                        status={item.status}
                    />
                )}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};