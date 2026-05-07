import React from 'react';
import { View, Text, Image } from 'react-native';
import { cardStyles as styles } from '../styles/CardStyles';

interface CardProps {
    name: string;
    image: string;
    species: string;
    status: string;
}

export const Card = ({ name, image, species, status }: CardProps) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.details}>{species} - {status}</Text>
            </View>
        </View>
    );
};