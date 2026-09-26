import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function CategoryCard({ category }) {
    return (
        <LinearGradient
            colors={['#1D2766', '#171F52']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.card}
        >
            <Image source={category.icon} style={styles.icon} resizeMode="contain" />
            <Text style={styles.title}>{category.title}</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 104,
        height: 120,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        paddingTop: 20,
        paddingBottom: 12,
        overflow: 'hidden',
    },
    icon: {
        width: 48,
        height: 48,
        marginBottom: 12,
    },
    title: {
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        fontSize: 15,
        lineHeight: 15,
    },
});